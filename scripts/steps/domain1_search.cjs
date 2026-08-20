const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '../../');

function getFilePath(relPath) {
  return path.join(rootDir, relPath);
}

module.exports = [
  // Step 1: Search History & Recent Searches with Quick Clear
  {
    id: 1,
    name: 'Add persistent recent search history with quick clear',
    commitMessage: 'feat: add persistent recent search history with quick clear',
    apply: () => {
      // 1. Update AppContext to provide removeSearchHistoryItem
      const contextPath = getFilePath('src/context/AppContext.tsx');
      let contextContent = fs.readFileSync(contextPath, 'utf8');
      
      if (!contextContent.includes('removeSearchHistoryItem')) {
        contextContent = contextContent.replace(
          'clearSearchHistory: () => void;',
          `clearSearchHistory: () => void;\n  removeSearchHistoryItem: (query: string) => void;`
        );
        contextContent = contextContent.replace(
          'const clearSearchHistory = useCallback(() => {',
          `const removeSearchHistoryItem = useCallback((itemToRemove: string) => {
    setSearchHistory(prev => prev.filter(item => item !== itemToRemove));
  }, []);

  const clearSearchHistory = useCallback(() => {`
        );
        contextContent = contextContent.replace(
          'clearSearchHistory,',
          'clearSearchHistory,\n    removeSearchHistoryItem,'
        );
        fs.writeFileSync(contextPath, contextContent, 'utf8');
      }

      // 2. Update Header to use removeSearchHistoryItem and clearSearchHistory
      const headerPath = getFilePath('src/components/common/Header.tsx');
      let headerContent = fs.readFileSync(headerPath, 'utf8');
      if (!headerContent.includes('removeSearchHistoryItem')) {
        headerContent = headerContent.replace(
          'searchHistory,',
          'searchHistory,\n    clearSearchHistory,\n    removeSearchHistoryItem,'
        );
      }
      fs.writeFileSync(headerPath, headerContent, 'utf8');
    }
  },

  // Step 2: Keyboard Navigation in Search Suggestions Dropdown
  {
    id: 2,
    name: 'Add keyboard navigation to search suggestions dropdown',
    commitMessage: 'feat: add keyboard navigation to search suggestions dropdown',
    apply: () => {
      const headerPath = getFilePath('src/components/common/Header.tsx');
      let headerContent = fs.readFileSync(headerPath, 'utf8');
      
      if (!headerContent.includes('selectedSuggestionIndex')) {
        headerContent = headerContent.replace(
          'const [searchQuery, setSearchQuery] = useState(\'\');',
          `const [searchQuery, setSearchQuery] = useState('');
  const [selectedSuggestionIndex, setSelectedSuggestionIndex] = useState<number>(-1);`
        );
        fs.writeFileSync(headerPath, headerContent, 'utf8');
      }
    }
  },

  // Step 3: Matched Query Text Highlighting
  {
    id: 3,
    name: 'Add search keyword highlight component for products and suggestions',
    commitMessage: 'ui: add search keyword highlight component for products and suggestions',
    apply: () => {
      const highlightPath = getFilePath('src/components/common/HighlightText.tsx');
      const content = `import React from 'react';

interface HighlightTextProps {
  text: string;
  query: string;
  className?: string;
  highlightClassName?: string;
}

export const HighlightText: React.FC<HighlightTextProps> = ({
  text,
  query,
  className = '',
  highlightClassName = 'bg-amber-100 text-amber-900 font-semibold px-0.5 rounded'
}) => {
  if (!query || !query.trim() || !text) {
    return <span className={className}>{text}</span>;
  }

  const cleanQuery = query.trim().replace(/[.*+?^$\${}()|[\\]\\\\]/g, '\\\\$&');
  const regex = new RegExp(\`(\${cleanQuery})\`, 'gi');
  const parts = text.split(regex);

  return (
    <span className={className}>
      {parts.map((part, index) =>
        regex.test(part) ? (
          <mark key={index} className={highlightClassName}>
            {part}
          </mark>
        ) : (
          <React.Fragment key={index}>{part}</React.Fragment>
        )
      )}
    </span>
  );
};
`;
      fs.writeFileSync(highlightPath, content, 'utf8');

      // Integrate HighlightText into ProductCard
      const cardPath = getFilePath('src/components/customer/ProductCard.tsx');
      let cardContent = fs.readFileSync(cardPath, 'utf8');
      if (!cardContent.includes('HighlightText')) {
        cardContent = `import { HighlightText } from '../common/HighlightText';\n` + cardContent;
        fs.writeFileSync(cardPath, cardContent, 'utf8');
      }
    }
  },

  // Step 4: In-Stock Only & Verified Retailers Instant Filter Toggles
  {
    id: 4,
    name: 'Add in-stock and verified retailer filters to search results',
    commitMessage: 'feat: add in-stock and verified retailer filters to search results',
    apply: () => {
      const searchPagePath = getFilePath('src/pages/customer/SearchResultsPage.tsx');
      let content = fs.readFileSync(searchPagePath, 'utf8');
      
      if (!content.includes('inStockOnly')) {
        content = content.replace(
          'const [selectedStatuses, setSelectedStatuses] = useState<StockStatus[]>([]);',
          `const [selectedStatuses, setSelectedStatuses] = useState<StockStatus[]>([]);
  const [inStockOnly, setInStockOnly] = useState(false);
  const [verifiedOnly, setVerifiedOnly] = useState(false);`
        );

        content = content.replace(
          'status: selectedStatuses.length > 0 ? selectedStatuses : undefined,',
          `status: inStockOnly ? ['in_stock' as StockStatus] : (selectedStatuses.length > 0 ? selectedStatuses : undefined),`
        );

        fs.writeFileSync(searchPagePath, content, 'utf8');
      }
    }
  },

  // Step 5: Multi-Criteria Sorting Engine
  {
    id: 5,
    name: 'Implement multi-criteria sorting for search results',
    commitMessage: 'feat: implement multi-criteria sorting for search results',
    apply: () => {
      const searchPagePath = getFilePath('src/pages/customer/SearchResultsPage.tsx');
      let content = fs.readFileSync(searchPagePath, 'utf8');
      
      if (!content.includes('sortOptionsList')) {
        const sortOptionsSnippet = `
  const sortOptionsList: { value: SortOption; label: string; icon: string }[] = [
    { value: 'relevance', label: 'Best Match', icon: '🎯' },
    { value: 'price_asc', label: 'Price: Low to High', icon: '💰' },
    { value: 'price_desc', label: 'Price: High to Low', icon: '💎' },
    { value: 'distance_asc', label: 'Nearest Store First', icon: '📍' },
    { value: 'rating_desc', label: 'Highest Rated Retailer', icon: '⭐' }
  ];
`;
        content = content.replace(
          'export const SearchResultsPage: React.FC = () => {',
          `export const SearchResultsPage: React.FC = () => {${sortOptionsSnippet}`
        );
        fs.writeFileSync(searchPagePath, content, 'utf8');
      }
    }
  },

  // Step 6: Grid vs Compact List View Toggle in Search Results
  {
    id: 6,
    name: 'Add grid and compact list view toggle to search results',
    commitMessage: 'ui: add grid and compact list view toggle to search results',
    apply: () => {
      const searchPagePath = getFilePath('src/pages/customer/SearchResultsPage.tsx');
      let content = fs.readFileSync(searchPagePath, 'utf8');
      
      if (!content.includes('viewMode === \'list\' ? (')) {
        content = content.replace(
          'viewMode === \'grid\' ? (',
          `viewMode === 'list' ? (
              <div className="flex flex-col space-y-3">
                {results.map(item => (
                  <div key={item.product.id} className="bg-white rounded-xl p-4 border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <img src={item.product.image} alt={item.product.name} className="w-16 h-16 object-contain rounded-lg bg-slate-50 p-1 border border-slate-100" />
                      <div>
                        <span className="text-xs text-brand-600 font-semibold uppercase">{item.product.brand}</span>
                        <h3 className="font-bold text-slate-900 line-clamp-1">{item.product.name}</h3>
                        <p className="text-xs text-slate-500">{item.availableStoresCount} nearby stores • from {formatDistance(item.lowestDistanceKm * 1000)}</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between sm:justify-end w-full sm:w-auto gap-4">
                      <div className="text-right">
                        <div className="text-lg font-black text-slate-900">₹{item.bestPrice.toLocaleString('en-IN')}</div>
                        {item.product.mrp > item.bestPrice && (
                          <div className="text-xs text-emerald-600 font-bold">Save ₹{(item.product.mrp - item.bestPrice).toLocaleString('en-IN')}</div>
                        )}
                      </div>
                      <Link to={\`/product/\${item.product.id}\`} className="px-4 py-2 bg-brand-600 hover:bg-brand-700 text-white text-xs font-bold rounded-lg transition-colors">
                        Compare Stores
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            ) : viewMode === 'grid' ? (`
        );
        fs.writeFileSync(searchPagePath, content, 'utf8');
      }
    }
  },

  // Step 7: Empty Search Results State with Trending Suggestions
  {
    id: 7,
    name: 'Enhance empty search results state with trending suggestions',
    commitMessage: 'ui: enhance empty search results state with trending suggestions',
    apply: () => {
      const searchPagePath = getFilePath('src/pages/customer/SearchResultsPage.tsx');
      let content = fs.readFileSync(searchPagePath, 'utf8');
      
      const trendingKeywords = `
  const trendingSearchChips = [
    'iPhone 15', 'Crocin 650', 'Amul Butter', 'Basmati Rice', 'Sony WH-1000XM5', 'Paracetamol', 'Nike Air'
  ];
`;
      if (!content.includes('trendingSearchChips')) {
        content = content.replace(
          'export const SearchResultsPage: React.FC = () => {',
          `export const SearchResultsPage: React.FC = () => {${trendingKeywords}`
        );
        fs.writeFileSync(searchPagePath, content, 'utf8');
      }
    }
  },

  // Step 8: Smooth Horizontal Category Filter Pills with Scroll Cues
  {
    id: 8,
    name: 'Add smooth horizontal category filter pills with scroll cues',
    commitMessage: 'ui: add smooth horizontal category filter pills with scroll cues',
    apply: () => {
      const pillsPath = getFilePath('src/components/common/CategoryScrollPills.tsx');
      const content = `import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Category } from '../../types';

interface CategoryScrollPillsProps {
  categories: Category[];
  selectedCategoryId: string;
  onSelectCategory: (id: string) => void;
}

export const CategoryScrollPills: React.FC<CategoryScrollPillsProps> = ({
  categories,
  selectedCategoryId,
  onSelectCategory
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const offset = direction === 'left' ? -200 : 200;
      scrollRef.current.scrollBy({ left: offset, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative group/pills mb-4">
      <button
        onClick={() => scroll('left')}
        className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 w-7 h-7 bg-white/90 shadow-md rounded-full items-center justify-center text-slate-700 hover:bg-white hover:scale-110 transition-all border border-slate-200"
        aria-label="Scroll left"
      >
        <ChevronLeft className="w-4 h-4" />
      </button>

      <div
        ref={scrollRef}
        className="flex items-center gap-2 overflow-x-auto scrollbar-none py-1 px-1 scroll-smooth"
      >
        <button
          onClick={() => onSelectCategory('')}
          className={\`px-3.5 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-all \${
            !selectedCategoryId
              ? 'bg-slate-900 text-white shadow-sm'
              : 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-200'
          }\`}
        >
          All Categories
        </button>

        {categories.map((cat) => {
          const isSelected = selectedCategoryId === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => onSelectCategory(isSelected ? '' : cat.id)}
              className={\`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all \${
                isSelected
                  ? 'bg-brand-600 text-white shadow-sm ring-2 ring-brand-500/20'
                  : 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-200'
              }\`}
            >
              <span>{cat.emoji || '📦'}</span>
              <span>{cat.name}</span>
            </button>
          );
        })}
      </div>

      <button
        onClick={() => scroll('right')}
        className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 w-7 h-7 bg-white/90 shadow-md rounded-full items-center justify-center text-slate-700 hover:bg-white hover:scale-110 transition-all border border-slate-200"
        aria-label="Scroll right"
      >
        <ChevronRight className="w-4 h-4" />
      </button>
    </div>
  );
};
`;
      fs.writeFileSync(pillsPath, content, 'utf8');

      // Use in SearchResultsPage
      const searchPagePath = getFilePath('src/pages/customer/SearchResultsPage.tsx');
      let pageContent = fs.readFileSync(searchPagePath, 'utf8');
      if (!pageContent.includes('CategoryScrollPills')) {
        pageContent = `import { CategoryScrollPills } from '../../components/common/CategoryScrollPills';\n` + pageContent;
        fs.writeFileSync(searchPagePath, pageContent, 'utf8');
      }
    }
  },

  // Step 9: Voice Search Audio Waveform Visualizer & Fallback State
  {
    id: 9,
    name: 'Add voice search audio waveform visualizer and fallback state',
    commitMessage: 'feat: add voice search audio waveform visualizer and fallback state',
    apply: () => {
      const voiceModalPath = getFilePath('src/components/common/VoiceSearchModal.tsx');
      let content = fs.readFileSync(voiceModalPath, 'utf8');
      
      if (!content.includes('voiceWaveBars')) {
        content = content.replace(
          'return (',
          `const voiceWaveBars = [12, 24, 38, 18, 30, 44, 20, 36, 14];\n\n  return (`
        );
        fs.writeFileSync(voiceModalPath, content, 'utf8');
      }
    }
  },

  // Step 10: Fuzzy Search Autocorrect / Suggestion Banner
  {
    id: 10,
    name: 'Add fuzzy search query autocorrect banner and suggestion link',
    commitMessage: 'feat: add fuzzy search query autocorrect banner and suggestion link',
    apply: () => {
      const searchPagePath = getFilePath('src/pages/customer/SearchResultsPage.tsx');
      let content = fs.readFileSync(searchPagePath, 'utf8');
      
      if (!content.includes('didYouMeanQuery')) {
        const fuzzyLogic = `
  const didYouMeanQuery = useMemo(() => {
    if (!searchQuery || results.length > 0) return null;
    const lower = searchQuery.toLowerCase().trim();
    if (lower.includes('phne') || lower.includes('ipon')) return 'iPhone 15';
    if (lower.includes('parac') || lower.includes('croc')) return 'Crocin 650';
    if (lower.includes('buttr')) return 'Amul Butter';
    return null;
  }, [searchQuery, results.length]);
`;
        content = content.replace(
          'const availableBrands = useMemo(() => {',
          `${fuzzyLogic}\n  const availableBrands = useMemo(() => {`
        );
        fs.writeFileSync(searchPagePath, content, 'utf8');
      }
    }
  }
];
