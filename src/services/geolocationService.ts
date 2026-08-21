// Progressive high-accuracy fallback
/**
 * Device Geolocation and Reverse Geocoding Service.
 * Handles browser GPS positioning, reverse geocoding via Google Maps or OpenStreetMap Nominatim,
 * and Google Maps Direction Link generation.
 */

import { LocationState } from '../types';
import { loadGoogleMapsApi } from './googleMapsLoader';
import { findNearestIndianCity } from '../data/indianLocations';

export interface ExactCoordinates {
  lat: number;
  lng: number;
  accuracy?: number;
}

export interface GeocodedAddress {
  area: string;
  city: string;
  state?: string;
  pincode: string;
  formattedAddress: string;
}

/**
 * Request real device GPS coordinates using navigator.geolocation
 */
export const getExactDeviceCoordinates = (): Promise<ExactCoordinates> => {
  return new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
      reject(new Error('Geolocation is not supported by your browser'));
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        resolve({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
          accuracy: position.coords.accuracy
        });
      },
      (error) => {
        let message = 'Unable to retrieve location';
        switch (error.code) {
          case error.PERMISSION_DENIED:
            message = 'Location permission was denied by user';
            break;
          case error.POSITION_UNAVAILABLE:
            message = 'Location information is unavailable';
            break;
          case error.TIMEOUT:
            message = 'The request to get user location timed out';
            break;
        }
        reject(new Error(message));
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 60000
      }
    );
  });
};

/**
 * Reverse geocode coordinates to get Human Readable Area, City & State across India.
 * Attempts Google Maps Geocoder first, then OpenStreetMap Nominatim, and finally Nearest Indian City.
 */
export const reverseGeocodeCoordinates = async (
  lat: number,
  lng: number
): Promise<GeocodedAddress> => {
  const nearestCity = findNearestIndianCity(lat, lng);

  // Try Google Maps Geocoder if loaded
  try {
    const maps = await loadGoogleMapsApi();
    if (maps && maps.Geocoder) {
      const geocoder = new maps.Geocoder();
      const response = await geocoder.geocode({ location: { lat, lng } });
      if (response && response.results && response.results.length > 0) {
        const result = response.results[0];
        let area = '';
        let city = '';
        let state = '';
        let pincode = '';

        for (const component of result.address_components) {
          if (component.types.includes('sublocality') || component.types.includes('neighborhood')) {
            area = area ? `${area}, ${component.long_name}` : component.long_name;
          }
          if (component.types.includes('locality')) {
            city = component.long_name;
          }
          if (component.types.includes('administrative_area_level_1')) {
            state = component.long_name;
          }
          if (component.types.includes('postal_code')) {
            pincode = component.long_name;
          }
        }

        return {
          area: area || result.formatted_address.split(',')[0] || nearestCity.area,
          city: city || nearestCity.city,
          state: state || nearestCity.state,
          pincode: pincode || nearestCity.pincode,
          formattedAddress: result.formatted_address
        };
      }
    }
  } catch (err) {
    console.warn('Google Geocoder failed, trying fallback...', err);
  }

  // Fallback to OpenStreetMap Nominatim for free reverse geocoding
  try {
    const res = await fetch(
      `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}&zoom=18&addressdetails=1`,
      { headers: { 'User-Agent': 'Dhoondo-Hyperlocal-App' } }
    );
    if (res.ok) {
      const data = await res.json();
      const addr = data.address || {};
      const area = addr.suburb || addr.neighbourhood || addr.road || addr.quarter || nearestCity.area;
      const city = addr.city || addr.town || addr.state_district || nearestCity.city;
      const state = addr.state || nearestCity.state;
      const pincode = addr.postcode || nearestCity.pincode;

      return {
        area: `${area}${addr.city ? `, ${addr.city}` : ''}`,
        city: city,
        state: state,
        pincode: pincode,
        formattedAddress: data.display_name || `${area}, ${city}, ${state}`
      };
    }
  } catch (err) {
    console.warn('OSM Reverse Geocode failed, using approximate Indian location', err);
  }

  // Final fallback with nearest Indian city match
  return {
    area: nearestCity.area,
    city: nearestCity.city,
    state: nearestCity.state,
    pincode: nearestCity.pincode,
    formattedAddress: `${nearestCity.area}, ${nearestCity.city}, ${nearestCity.state} - ${nearestCity.pincode}`
  };
};

/**
 * Generate Google Maps Direct Location URL (for redirecting to Google Maps website / app)
 */
export const getGoogleMapsLocationUrl = (
  lat: number,
  lng: number,
  label?: string
): string => {
  if (label) {
    return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(label)}+(${lat},${lng})`;
  }
  return `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`;
};

/**
 * Generate Google Maps Embed iframe URL
 */
export const getGoogleMapsEmbedUrl = (
  lat: number,
  lng: number,
  zoom: number = 14
): string => {
  return `https://maps.google.com/maps?q=${lat},${lng}&hl=en&z=${zoom}&output=embed`;
};

/**
 * Generate Google Maps Directions link from user to store
 */
export const getGoogleMapsDirectionsUrl = (
  userLat?: number,
  userLng?: number,
  storeLat?: number,
  storeLng?: number,
  storeName?: string
): string => {
  if (userLat && userLng && storeLat && storeLng) {
    return `https://www.google.com/maps/dir/?api=1&origin=${userLat},${userLng}&destination=${storeLat},${storeLng}&travelmode=driving`;
  }
  if (storeLat && storeLng) {
    return `https://www.google.com/maps/search/?api=1&query=${storeLat},${storeLng}+(${encodeURIComponent(storeName || 'Store')})`;
  }
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(storeName || 'Nearby Store')}`;
};
