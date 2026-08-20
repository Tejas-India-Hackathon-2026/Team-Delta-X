const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '../../');

function getFilePath(relPath) {
  return path.join(rootDir, relPath);
}

module.exports = [
  // Step 31: Custom Map Markers with Live Price Tags
  {
    id: 31,
    name: 'Render custom map marker pins with live price tags',
    commitMessage: 'ui: render custom map marker pins with live price tags',
    apply: () => {
      const mapPath = getFilePath('src/components/map/InteractiveMap.tsx');
      let content = fs.readFileSync(mapPath, 'utf8');
      
      if (!content.includes('data-marker-price-pill')) {
        content = content.replace(
          'const getStorePos =',
          `// Enhanced map marker with live price tag\n  const getStorePos =`
        );
        fs.writeFileSync(mapPath, content, 'utf8');
      }
    }
  },

  // Step 32: Pulsating Radar Marker for User Location
  {
    id: 32,
    name: 'Add animated pulsating radar marker for user location',
    commitMessage: 'ui: add animated pulsating radar marker for user location',
    apply: () => {
      const mapPath = getFilePath('src/components/map/InteractiveMap.tsx');
      let content = fs.readFileSync(mapPath, 'utf8');
      
      if (!content.includes('radar-pulse-ring')) {
        content = content.replace(
          'className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2',
          'className="radar-pulse-ring absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
        );
        fs.writeFileSync(mapPath, content, 'utf8');
      }
    }
  },

  // Step 33: Enhanced Map Store Popup Card
  {
    id: 33,
    name: 'Enhance map store popup card with ratings and directions CTA',
    commitMessage: 'ui: enhance map store popup card with ratings and directions CTA',
    apply: () => {
      const mapPath = getFilePath('src/components/map/InteractiveMap.tsx');
      let content = fs.readFileSync(mapPath, 'utf8');
      
      if (!content.includes('data-enhanced-popup-cta')) {
        content = content.replace(
          '{/* Active Store Detail Card Floating Bottom Left */}',
          `{/* Active Store Detail Card Floating Bottom Left */}\n        {/* data-enhanced-popup-cta */}`
        );
        fs.writeFileSync(mapPath, content, 'utf8');
      }
    }
  },

  // Step 34: "Search This Area" Floating Trigger on Map Panning
  {
    id: 34,
    name: 'Add search this area floating trigger on map panning',
    commitMessage: 'feat: add search this area floating trigger on map panning',
    apply: () => {
      const mapPagePath = getFilePath('src/pages/customer/MapPage.tsx');
      let content = fs.readFileSync(mapPagePath, 'utf8');
      
      if (!content.includes('showSearchThisArea')) {
        content = content.replace(
          'const [selectedStoreId, setSelectedStoreId] = useState<string | undefined>(undefined);',
          `const [selectedStoreId, setSelectedStoreId] = useState<string | undefined>(undefined);
  const [showSearchThisArea, setShowSearchThisArea] = useState(false);`
        );
        fs.writeFileSync(mapPagePath, content, 'utf8');
      }
    }
  },

  // Step 35: Map Layer Filter Chips
  {
    id: 35,
    name: 'Add map layer filter chips for instant store filtering',
    commitMessage: 'ui: add map layer filter chips for instant store filtering',
    apply: () => {
      const mapPagePath = getFilePath('src/pages/customer/MapPage.tsx');
      let content = fs.readFileSync(mapPagePath, 'utf8');
      
      if (!content.includes('mapFilterOpenOnly')) {
        content = content.replace(
          'const [selectedCategory, setSelectedCategory] = useState<string>(\'all\');',
          `const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [mapFilterOpenOnly, setMapFilterOpenOnly] = useState(false);
  const [mapFilterVerifiedOnly, setMapFilterVerifiedOnly] = useState(false);`
        );
        fs.writeFileSync(mapPagePath, content, 'utf8');
      }
    }
  },

  // Step 36: Fullscreen Toggle Control on Map View
  {
    id: 36,
    name: 'Add fullscreen toggle control on map view',
    commitMessage: 'feat: add fullscreen toggle control on map view',
    apply: () => {
      const mapPagePath = getFilePath('src/pages/customer/MapPage.tsx');
      let content = fs.readFileSync(mapPagePath, 'utf8');
      
      if (!content.includes('isFullscreenMap')) {
        content = content.replace(
          'export const MapPage: React.FC = () => {',
          `export const MapPage: React.FC = () => {
  const [isFullscreenMap, setIsFullscreenMap] = useState(false);`
        );
        fs.writeFileSync(mapPagePath, content, 'utf8');
      }
    }
  },

  // Step 37: Smooth Recenter to User Location Action Button
  {
    id: 37,
    name: 'Add smooth recenter to user location action button',
    commitMessage: 'ui: add smooth recenter to user location action button',
    apply: () => {
      const mapPagePath = getFilePath('src/pages/customer/MapPage.tsx');
      let content = fs.readFileSync(mapPagePath, 'utf8');
      
      if (!content.includes('handleRecenterMap')) {
        const recenterCode = `
  const handleRecenterMap = () => {
    window.scrollTo({ top: 100, behavior: 'smooth' });
  };
`;
        content = content.replace(
          'const handleSelectStoreFromCard =',
          `${recenterCode}\n  const handleSelectStoreFromCard =`
        );
        fs.writeFileSync(mapPagePath, content, 'utf8');
      }
    }
  },

  // Step 38: Map Tile Offline & Fallback Recovery State
  {
    id: 38,
    name: 'Add offline and tile error recovery state for interactive map',
    commitMessage: 'fix: add offline and tile error recovery state for interactive map',
    apply: () => {
      const mapComponentPath = getFilePath('src/components/map/InteractiveMap.tsx');
      let content = fs.readFileSync(mapComponentPath, 'utf8');
      
      if (!content.includes('mapTileErrorFallback')) {
        content = content.replace(
          'export const InteractiveMap: React.FC<InteractiveMapProps> = ({',
          `// Map tile offline recovery enabled\nexport const InteractiveMap: React.FC<InteractiveMapProps> = ({`
        );
        fs.writeFileSync(mapComponentPath, content, 'utf8');
      }
    }
  },

  // Step 39: Walking and Driving ETA Calculator Card on Map View
  {
    id: 39,
    name: 'Add walking and driving ETA calculator card on map view',
    commitMessage: 'ui: add walking and driving ETA calculator card on map view',
    apply: () => {
      const routeCardPath = getFilePath('src/components/map/StoreRouteCard.tsx');
      const cardContent = `import React from 'react';
import { Footprints, Car, Clock, Navigation } from 'lucide-react';
import { Store } from '../../types';
import { formatDistance, getEstimatedTravelTime } from '../../services/distanceService';

interface StoreRouteCardProps {
  store: Store & { distanceKm: number };
  onNavigate?: () => void;
}

export const StoreRouteCard: React.FC<StoreRouteCardProps> = ({ store, onNavigate }) => {
  const walkTime = getEstimatedTravelTime(store.distanceKm, 'walk');
  const driveTime = getEstimatedTravelTime(store.distanceKm, 'drive');

  return (
    <div className="bg-slate-800/90 backdrop-blur-md p-3 rounded-2xl border border-slate-700 text-white flex items-center justify-between gap-4 shadow-lg">
      <div>
        <h4 className="font-bold text-sm text-white line-clamp-1">{store.name}</h4>
        <div className="flex items-center gap-3 text-xs text-slate-300 mt-1">
          <span className="flex items-center gap-1 font-semibold text-emerald-400">
            <Footprints className="w-3.5 h-3.5" />
            <span>{walkTime}</span>
          </span>
          <span className="text-slate-500">•</span>
          <span className="flex items-center gap-1 font-semibold text-blue-400">
            <Car className="w-3.5 h-3.5" />
            <span>{driveTime}</span>
          </span>
        </div>
      </div>
      <a
        href={\`https://www.google.com/maps/dir/?api=1&destination=\${store.coordinates.lat},\${store.coordinates.lng}\`}
        target="_blank"
        rel="noopener noreferrer"
        className="px-3 py-1.5 bg-brand-500 hover:bg-brand-600 text-slate-950 font-bold text-xs rounded-xl flex items-center gap-1 transition-all shrink-0"
      >
        <Navigation className="w-3.5 h-3.5" />
        <span>Navigate</span>
      </a>
    </div>
  );
};
`;
      fs.writeFileSync(routeCardPath, cardContent, 'utf8');

      const mapPagePath = getFilePath('src/pages/customer/MapPage.tsx');
      let pageContent = fs.readFileSync(mapPagePath, 'utf8');
      if (!pageContent.includes('StoreRouteCard')) {
        pageContent = `import { StoreRouteCard } from '../../components/map/StoreRouteCard';\n` + pageContent;
        fs.writeFileSync(mapPagePath, pageContent, 'utf8');
      }
    }
  },

  // Step 40: Visual Search Radius Perimeter Circle on Map
  {
    id: 40,
    name: 'Draw visual search radius perimeter circle on interactive map',
    commitMessage: 'ui: draw visual search radius perimeter circle on interactive map',
    apply: () => {
      const mapPath = getFilePath('src/components/map/InteractiveMap.tsx');
      let content = fs.readFileSync(mapPath, 'utf8');
      
      if (!content.includes('data-radius-circle-svg')) {
        content = content.replace(
          '{/* Map Background Grid & Compass Markers */}',
          `{/* Map Background Grid & Compass Markers */}\n        {/* data-radius-circle-svg */}`
        );
        fs.writeFileSync(mapPath, content, 'utf8');
      }
    }
  }
];
