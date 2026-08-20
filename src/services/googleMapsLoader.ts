/**
 * Google Maps JavaScript API Loader with Places & Geometry support.
 * Safely loads Google Maps asynchronously without multiple script injection.
 * Supports VITE_GOOGLE_MAPS_API_KEY with graceful fallback when key is not provided.
 */

declare global {
  interface Window {
    google?: any;
    initGoogleMapsCallback?: () => void;
  }
}

let loadPromise: Promise<any> | null = null;

export const getGoogleMapsApiKey = (): string => {
  return ((import.meta as any).env?.VITE_GOOGLE_MAPS_API_KEY as string) || '';
};

export const isGoogleMapsKeyConfigured = (): boolean => {
  const key = getGoogleMapsApiKey();
  return Boolean(key && key.trim().length > 5 && !key.includes('YOUR_API_KEY'));
};

export const loadGoogleMapsApi = (): Promise<any> => {
  if (typeof window === 'undefined') {
    return Promise.reject(new Error('Window is undefined'));
  }

  // Already loaded
  if (window.google && window.google.maps) {
    return Promise.resolve(window.google.maps);
  }

  // Already loading
  if (loadPromise) {
    return loadPromise;
  }

  const apiKey = getGoogleMapsApiKey();

  if (!apiKey || apiKey.includes('YOUR_API_KEY')) {
    // API key not provided - resolve to null so app uses rich fallback without crashing
    return Promise.resolve(null);
  }

  loadPromise = new Promise((resolve) => {
    // Check if script already exists in document
    const existingScript = document.getElementById('google-maps-api-script');
    if (existingScript) {
      if (window.google && window.google.maps) {
        resolve(window.google.maps);
      } else {
        existingScript.addEventListener('load', () => resolve(window.google?.maps || null));
        existingScript.addEventListener('error', () => resolve(null));
      }
      return;
    }

    const script = document.createElement('script');
    script.id = 'google-maps-api-script';
    script.type = 'text/javascript';
    script.async = true;
    script.defer = true;
    
    // Load libraries: places, geometry, marker
    script.src = `https://maps.googleapis.com/maps/api/js?key=${encodeURIComponent(apiKey)}&libraries=places,geometry&callback=initGoogleMapsCallback&v=weekly`;

    window.initGoogleMapsCallback = () => {
      resolve(window.google?.maps || null);
      delete window.initGoogleMapsCallback;
    };

    script.onerror = () => {
      console.warn('Google Maps API failed to load. Using fallback proximity radar.');
      resolve(null);
    };

    document.head.appendChild(script);
  });

  return loadPromise;
};
