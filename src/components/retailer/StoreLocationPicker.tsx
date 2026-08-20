import React, { useEffect, useRef, useState } from 'react';
import { 
  MapPin, 
  Search, 
  Navigation, 
  Check, 
  Loader2, 
  Sparkles, 
  Compass, 
  ShieldCheck,
  Info
} from 'lucide-react';
import { loadGoogleMapsApi } from '../../services/googleMapsLoader';
import { getExactDeviceCoordinates, reverseGeocodeCoordinates } from '../../services/geolocationService';

interface StoreLocationPickerProps {
  initialLat?: number;
  initialLng?: number;
  initialAddress?: string;
  onLocationSelect: (locationData: {
    lat: number;
    lng: number;
    address: string;
    area: string;
    city: string;
    pincode: string;
  }) => void;
}

export const StoreLocationPicker: React.FC<StoreLocationPickerProps> = ({
  initialLat = 12.9352,
  initialLng = 77.6245,
  initialAddress = '',
  onLocationSelect
}) => {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  const [coords, setCoords] = useState<{ lat: number; lng: number }>({
    lat: initialLat,
    lng: initialLng
  });
  const [addressText, setAddressText] = useState(initialAddress);
  const [areaText, setAreaText] = useState('');
  const [cityText, setCityText] = useState('Bengaluru');
  const [pincodeText, setPincodeText] = useState('560034');

  const [isLocatingCurrentGps, setIsLocatingCurrentGps] = useState(false);
  const [googleMapsLoaded, setGoogleMapsLoaded] = useState(false);
  const [mapInstance, setMapInstance] = useState<any>(null);
  const markerRef = useRef<any>(null);

  // Load Google Maps API
  useEffect(() => {
    let isMounted = true;
    loadGoogleMapsApi().then((maps) => {
      if (isMounted && maps) {
        setGoogleMapsLoaded(true);
      }
    });
    return () => {
      isMounted = false;
    };
  }, []);

  // Initialize Map and Places Autocomplete
  useEffect(() => {
    if (!googleMapsLoaded || !mapContainerRef.current || !window.google?.maps) return;

    try {
      const maps = window.google.maps;
      const center = { lat: coords.lat, lng: coords.lng };

      const map = new maps.Map(mapContainerRef.current, {
        center,
        zoom: 16,
        mapTypeControl: false,
        streetViewControl: false,
        fullscreenControl: false,
        zoomControl: true
      });

      // Draggable Store Marker
      const marker = new maps.Marker({
        position: center,
        map,
        draggable: true,
        title: 'Drag to exact shop entrance',
        animation: maps.Animation.DROP
      });

      markerRef.current = marker;
      setMapInstance(map);

      // Handle marker drag end
      marker.addListener('dragend', async () => {
        const position = marker.getPosition();
        if (position) {
          const newLat = position.lat();
          const newLng = position.lng();
          setCoords({ lat: newLat, lng: newLng });
          
          // Reverse geocode new position
          const geocoded = await reverseGeocodeCoordinates(newLat, newLng);
          setAddressText(geocoded.formattedAddress);
          setAreaText(geocoded.area);
          setCityText(geocoded.city);
          setPincodeText(geocoded.pincode);

          onLocationSelect({
            lat: newLat,
            lng: newLng,
            address: geocoded.formattedAddress,
            area: geocoded.area,
            city: geocoded.city,
            pincode: geocoded.pincode
          });
        }
      });

      // Places Autocomplete
      if (searchInputRef.current && maps.places) {
        const autocomplete = new maps.places.Autocomplete(searchInputRef.current, {
          types: ['establishment', 'geocode'],
          componentRestrictions: { country: 'in' }
        });

        autocomplete.bindTo('bounds', map);

        autocomplete.addListener('place_changed', () => {
          const place = autocomplete.getPlace();
          if (!place.geometry || !place.geometry.location) {
            return;
          }

          const newLat = place.geometry.location.lat();
          const newLng = place.geometry.location.lng();
          const newPos = { lat: newLat, lng: newLng };

          map.setCenter(newPos);
          map.setZoom(17);
          marker.setPosition(newPos);

          const formatted = place.formatted_address || place.name || '';
          setCoords(newPos);
          setAddressText(formatted);

          // Extract area, city, pincode
          let area = '';
          let city = 'Bengaluru';
          let pincode = '';

          if (place.address_components) {
            for (const comp of place.address_components) {
              if (comp.types.includes('sublocality') || comp.types.includes('neighborhood')) {
                area = comp.long_name;
              }
              if (comp.types.includes('locality')) {
                city = comp.long_name;
              }
              if (comp.types.includes('postal_code')) {
                pincode = comp.long_name;
              }
            }
          }

          setAreaText(area || formatted.split(',')[0]);
          setCityText(city);
          setPincodeText(pincode);

          onLocationSelect({
            lat: newLat,
            lng: newLng,
            address: formatted,
            area: area || formatted.split(',')[0],
            city,
            pincode
          });
        });
      }

    } catch (err) {
      console.warn('Google Maps Init Error:', err);
    }
  }, [googleMapsLoaded]);

  // Use Current Device Location button (1-click GPS for store owner in shop)
  const handleUseCurrentLocation = async () => {
    setIsLocatingCurrentGps(true);
    try {
      const currentCoords = await getExactDeviceCoordinates();
      setCoords(currentCoords);

      if (mapInstance && markerRef.current) {
        const pos = { lat: currentCoords.lat, lng: currentCoords.lng };
        mapInstance.setCenter(pos);
        mapInstance.setZoom(17);
        markerRef.current.setPosition(pos);
      }

      const geocoded = await reverseGeocodeCoordinates(currentCoords.lat, currentCoords.lng);
      setAddressText(geocoded.formattedAddress);
      setAreaText(geocoded.area);
      setCityText(geocoded.city);
      setPincodeText(geocoded.pincode);

      onLocationSelect({
        lat: currentCoords.lat,
        lng: currentCoords.lng,
        address: geocoded.formattedAddress,
        area: geocoded.area,
        city: geocoded.city,
        pincode: geocoded.pincode
      });
    } catch (err) {
      alert('Could not access device GPS. Please search your store address in the box above.');
    } finally {
      setIsLocatingCurrentGps(false);
    }
  };

  return (
    <div className="space-y-4">
      
      {/* Places Search Bar & GPS Button */}
      <div className="flex flex-col sm:flex-row gap-2.5">
        <div className="relative flex-1">
          <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400">
            <Search className="w-4 h-4" />
          </div>
          <input
            ref={searchInputRef}
            type="text"
            placeholder="Search shop building, market, street, or landmark..."
            defaultValue={addressText}
            className="w-full pl-10 pr-4 py-2.5 rounded-2xl bg-white border border-slate-200 text-sm font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-500 shadow-sm"
          />
        </div>

        <button
          type="button"
          onClick={handleUseCurrentLocation}
          disabled={isLocatingCurrentGps}
          className="px-4 py-2.5 rounded-2xl bg-brand-50 hover:bg-brand-100 text-brand-800 border border-brand-200 text-xs font-bold flex items-center justify-center gap-1.5 transition-colors shrink-0 shadow-sm"
        >
          {isLocatingCurrentGps ? (
            <Loader2 className="w-4 h-4 animate-spin text-brand-600" />
          ) : (
            <Navigation className="w-4 h-4 text-brand-600" />
          )}
          <span>Use Current GPS Location</span>
        </button>
      </div>

      {/* Map Viewport */}
      <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-md bg-slate-100 h-64 sm:h-72">
        {googleMapsLoaded ? (
          <div ref={mapContainerRef} className="w-full h-full" />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center space-y-2 bg-gradient-to-br from-slate-900 to-slate-950 text-white">
            <MapPin className="w-8 h-8 text-brand-400 animate-bounce" />
            <div className="font-bold text-sm">Interactive Store Pin Activated</div>
            <p className="text-xs text-slate-400 max-w-sm">
              Pinned at Bengaluru ({coords.lat.toFixed(4)}, {coords.lng.toFixed(4)})
            </p>
          </div>
        )}

        {/* Drag Helper Tip Badge */}
        <div className="absolute top-3 left-3 bg-slate-900/90 backdrop-blur-md text-white text-[11px] font-bold px-3 py-1.5 rounded-xl border border-slate-700 shadow-lg flex items-center gap-1.5 pointer-events-none">
          <Sparkles className="w-3.5 h-3.5 text-brand-400" />
          <span>Tip: Drag marker directly over your shop entrance</span>
        </div>
      </div>

      {/* Pinned Coordinates & Address Summary (No Manual Typing needed) */}
      <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 flex flex-wrap items-center justify-between gap-2 text-xs">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
            <Check className="w-4 h-4" />
          </div>
          <div>
            <span className="font-bold text-slate-900">Coordinates Auto-Saved:</span>
            <span className="text-slate-600 ml-1.5 font-mono">
              {coords.lat.toFixed(6)}, {coords.lng.toFixed(6)}
            </span>
          </div>
        </div>

        <span className="text-[11px] text-slate-500 font-medium">
          {addressText ? `${addressText.slice(0, 45)}...` : 'Location selected'}
        </span>
      </div>

    </div>
  );
};
