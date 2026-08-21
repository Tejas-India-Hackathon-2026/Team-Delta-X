/**
 * Calculate the great-circle distance between two points on the Earth (Haversine formula) in kilometers.
 */
export function calculateDistanceKm(
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number
): number {
  const R = 6371; // Earth's radius in kilometers
  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRad(lat1)) *
      Math.cos(toRad(lat2)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distance = R * c;
  return Math.round(distance * 10) / 10; // 1 decimal place
}

function toRad(degrees: number): number {
  return (degrees * Math.PI) / 180;
}

export function formatDistance(distanceKm?: number): string {
  if (distanceKm === undefined || isNaN(distanceKm)) {
    return 'Nearby';
  }
  if (distanceKm < 1) {
    return `${Math.round(distanceKm * 1000)} m away`;
  }
  return `${distanceKm.toFixed(1)} km away`;
}

export function getEstimatedTravelTime(distanceKm?: number, mode: 'walk' | 'drive' = 'walk'): string {
  if (distanceKm === undefined || isNaN(distanceKm) || distanceKm <= 0) {
    return mode === 'walk' ? '1 min walk' : '1 min drive';
  }
  if (mode === 'walk') {
    // Average walking speed: 4.5 km/h
    const minutes = Math.ceil((distanceKm / 4.5) * 60);
    return minutes < 60 ? `${minutes} min walk` : `${Math.floor(minutes / 60)} hr ${minutes % 60}m walk`;
  } else {
    // Average city driving speed: 25 km/h
    const minutes = Math.ceil((distanceKm / 25) * 60);
    return minutes < 60 ? `${minutes} min drive` : `${Math.floor(minutes / 60)} hr ${minutes % 60}m drive`;
  }
}

export function estimateTravelTimeMinutes(distanceKm?: number, mode: 'walking' | 'two_wheeler' | 'driving' = 'walking'): number {
  if (!distanceKm || isNaN(distanceKm) || distanceKm <= 0) return 1;
  if (mode === 'walking') {
    return Math.max(1, Math.ceil((distanceKm / 4.5) * 60));
  } else if (mode === 'two_wheeler') {
    return Math.max(1, Math.ceil((distanceKm / 20) * 60));
  } else {
    return Math.max(1, Math.ceil((distanceKm / 25) * 60));
  }
}
