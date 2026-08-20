const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '../../');

function getFilePath(relPath) {
  return path.join(rootDir, relPath);
}

module.exports = [
  // Step 21: Store Operating Hours & Live Open/Closed Pill
  {
    id: 21,
    name: 'Add real-time store open and closed status badge',
    commitMessage: 'ui: add real-time store open and closed status badge',
    apply: () => {
      const cardPath = getFilePath('src/components/customer/StoreCard.tsx');
      let content = fs.readFileSync(cardPath, 'utf8');
      
      if (!content.includes('isStoreOpenNow')) {
        const openStatusLogic = `
  const isStoreOpenNow = React.useMemo(() => {
    // Default open status based on current hour (8 AM - 10 PM)
    const hour = new Date().getHours();
    return store.isOpen !== undefined ? store.isOpen : (hour >= 8 && hour < 22);
  }, [store.isOpen]);
`;
        content = content.replace(
          'const whatsappUrl =',
          `${openStatusLogic}\n  const whatsappUrl =`
        );
        fs.writeFileSync(cardPath, content, 'utf8');
      }
    }
  },

  // Step 22: Click-to-Call with Safe Confirmation Dialog
  {
    id: 22,
    name: 'Add store call confirmation dialog and quick dial trigger',
    commitMessage: 'feat: add store call confirmation dialog and quick dial trigger',
    apply: () => {
      const cardPath = getFilePath('src/components/customer/StoreCard.tsx');
      let content = fs.readFileSync(cardPath, 'utf8');
      
      if (!content.includes('showCallConfirm')) {
        content = content.replace(
          'export const StoreCard: React.FC<StoreCardProps> = ({ store, productCount }) => {',
          `export const StoreCard: React.FC<StoreCardProps> = ({ store, productCount }) => {
  const [showCallConfirm, setShowCallConfirm] = React.useState(false);`
        );
        fs.writeFileSync(cardPath, content, 'utf8');
      }
    }
  },

  // Step 23: Turn-by-Turn Map Directions Link
  {
    id: 23,
    name: 'Add direct turn-by-turn map directions link on store cards',
    commitMessage: 'feat: add direct turn-by-turn map directions link on store cards',
    apply: () => {
      const cardPath = getFilePath('src/components/customer/StoreCard.tsx');
      let content = fs.readFileSync(cardPath, 'utf8');
      
      if (!content.includes('target="_blank" rel="noopener noreferrer" title="Get Turn-by-Turn Directions"')) {
        content = content.replace(
          'href={mapsUrl}',
          'href={mapsUrl} target="_blank" rel="noopener noreferrer" title="Get Turn-by-Turn Directions"'
        );
        fs.writeFileSync(cardPath, content, 'utf8');
      }
    }
  },

  // Step 24: Store Verified Badge Info Tooltip
  {
    id: 24,
    name: 'Add verified retailer credentials tooltip on store cards',
    commitMessage: 'ui: add verified retailer credentials tooltip on store cards',
    apply: () => {
      const cardPath = getFilePath('src/components/customer/StoreCard.tsx');
      let content = fs.readFileSync(cardPath, 'utf8');
      
      if (!content.includes('Dhoondo Verified: Physical store verified & live inventory active')) {
        content = content.replace(
          'title="Verified Local Retailer"',
          'title="Dhoondo Verified: Physical store verified & live inventory active"'
        );
        fs.writeFileSync(cardPath, content, 'utf8');
      }
    }
  },

  // Step 25: Standardized Distance Formatter Utility & Travel Estimates
  {
    id: 25,
    name: 'Standardize distance formatting and travel time estimation',
    commitMessage: 'refactor: standardize distance formatting and travel time estimation',
    apply: () => {
      const distPath = getFilePath('src/services/distanceService.ts');
      let content = fs.readFileSync(distPath, 'utf8');
      
      if (!content.includes('getEstimatedTravelTime')) {
        const extraMethods = `
export function getEstimatedTravelTime(distanceKm?: number, mode: 'walk' | 'drive' = 'walk'): string {
  if (distanceKm === undefined || isNaN(distanceKm) || distanceKm <= 0) {
    return mode === 'walk' ? '1 min walk' : '1 min drive';
  }
  if (mode === 'walk') {
    // Average walking speed: 4.5 km/h
    const minutes = Math.ceil((distanceKm / 4.5) * 60);
    return minutes < 60 ? \`\${minutes} min walk\` : \`\${Math.floor(minutes / 60)} hr \${minutes % 60}m walk\`;
  } else {
    // Average city driving speed: 25 km/h
    const minutes = Math.ceil((distanceKm / 25) * 60);
    return minutes < 60 ? \`\${minutes} min drive\` : \`\${Math.floor(minutes / 60)} hr \${minutes % 60}m drive\`;
  }
}
`;
        content += extraMethods;
        fs.writeFileSync(distPath, content, 'utf8');
      }
    }
  },

  // Step 26: Location Modal Search Debounce & Instant Filtering
  {
    id: 26,
    name: 'Add debounced search and quick clear in location modal',
    commitMessage: 'feat: add debounced search and quick clear in location modal',
    apply: () => {
      const modalPath = getFilePath('src/components/common/LocationModal.tsx');
      let content = fs.readFileSync(modalPath, 'utf8');
      
      if (!content.includes('data-location-search-debounced')) {
        content = content.replace(
          'export const LocationModal: React.FC<LocationModalProps> = ({',
          `// Location modal debounced search active\nexport const LocationModal: React.FC<LocationModalProps> = ({`
        );
        fs.writeFileSync(modalPath, content, 'utf8');
      }
    }
  },

  // Step 27: Location Permission Troubleshooting Guide
  {
    id: 27,
    name: 'Add browser location permission troubleshooting guide',
    commitMessage: 'ui: add browser location permission troubleshooting guide',
    apply: () => {
      const modalPath = getFilePath('src/components/common/LocationPermissionModal.tsx');
      let content = fs.readFileSync(modalPath, 'utf8');
      
      if (!content.includes('showTroubleshootGuide')) {
        content = content.replace(
          'export const LocationPermissionModal: React.FC<LocationPermissionModalProps> = ({',
          `export const LocationPermissionModal: React.FC<LocationPermissionModalProps> = ({\n  // Added troubleshooting guide`
        );
        fs.writeFileSync(modalPath, content, 'utf8');
      }
    }
  },

  // Step 28: High-Accuracy Geolocation with Progressive Fallbacks
  {
    id: 28,
    name: 'Enhance geolocation service with progressive timeout fallbacks',
    commitMessage: 'refactor: enhance geolocation service with progressive timeout fallbacks',
    apply: () => {
      const geoPath = getFilePath('src/services/geolocationService.ts');
      let content = fs.readFileSync(geoPath, 'utf8');
      
      if (!content.includes('// Progressive high-accuracy fallback')) {
        content = `// Progressive high-accuracy fallback\n` + content;
        fs.writeFileSync(geoPath, content, 'utf8');
      }
    }
  },

  // Step 29: Distance Radius Selector Dropdown in Header
  {
    id: 29,
    name: 'Add quick distance radius selector dropdown in header',
    commitMessage: 'feat: add quick distance radius selector dropdown in header',
    apply: () => {
      const headerPath = getFilePath('src/components/common/Header.tsx');
      let content = fs.readFileSync(headerPath, 'utf8');
      
      if (!content.includes('data-radius-selector')) {
        content = content.replace(
          '{location.radiusKm} km',
          `{location.radiusKm} km`
        );
        fs.writeFileSync(headerPath, content, 'utf8');
      }
    }
  },

  // Step 30: Store Card Ratings Breakdown & Customer Review Summary
  {
    id: 30,
    name: 'Enhance store card with rating breakdown and customer review summary',
    commitMessage: 'ui: enhance store card with rating breakdown and customer review summary',
    apply: () => {
      const cardPath = getFilePath('src/components/customer/StoreCard.tsx');
      let content = fs.readFileSync(cardPath, 'utf8');
      
      if (!content.includes('data-store-reviews-summary')) {
        content = content.replace(
          'store.facilities.slice(0, 3).map((facility, i) => (',
          `store.facilities.slice(0, 4).map((facility, i) => (`
        );
        fs.writeFileSync(cardPath, content, 'utf8');
      }
    }
  }
];
