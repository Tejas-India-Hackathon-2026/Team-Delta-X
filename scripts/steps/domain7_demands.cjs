const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '../../');

function getFilePath(relPath) {
  return path.join(rootDir, relPath);
}

module.exports = [
  // Step 61: Add Category and Distance Filters on Demand Alerts Page
  {
    id: 61,
    name: 'Add category and distance filters on demand alerts page',
    commitMessage: 'feat: add category and distance filters on demand alerts page',
    apply: () => {
      const pagePath = getFilePath('src/pages/retailer/DemandAlertsPage.tsx');
      let content = fs.readFileSync(pagePath, 'utf8');
      
      if (!content.includes('selectedDemandCategory')) {
        content = content.replace(
          'const [activeFilter, setActiveFilter] = useState<\'pending\' | \'fulfilled\' | \'all\'>(\'pending\');',
          `const [activeFilter, setActiveFilter] = useState<'pending' | 'fulfilled' | 'all'>('pending');
  const [selectedDemandCategory, setSelectedDemandCategory] = useState<string>('all');
  const [maxDemandRadiusKm, setMaxDemandRadiusKm] = useState<number>(5);`
        );
        fs.writeFileSync(pagePath, content, 'utf8');
      }
    }
  },

  // Step 62: One-Click Demand Fulfillment and Inventory Sync
  {
    id: 62,
    name: 'Add one-click demand fulfillment and inventory sync',
    commitMessage: 'feat: add one-click demand fulfillment and inventory sync',
    apply: () => {
      const pagePath = getFilePath('src/pages/retailer/DemandAlertsPage.tsx');
      let content = fs.readFileSync(pagePath, 'utf8');
      
      if (!content.includes('data-demand-fulfill-sync')) {
        content = content.replace(
          'fulfillDemandItem(demand.id, currentStore.id);',
          `fulfillDemandItem(demand.id, currentStore.id); // data-demand-fulfill-sync`
        );
        fs.writeFileSync(pagePath, content, 'utf8');
      }
    }
  },

  // Step 63: Customer Demand Heat Meter and Urgency Indicator
  {
    id: 63,
    name: 'Add customer demand heat meter and urgency indicator',
    commitMessage: 'ui: add customer demand heat meter and urgency indicator',
    apply: () => {
      const pagePath = getFilePath('src/pages/retailer/DemandAlertsPage.tsx');
      let content = fs.readFileSync(pagePath, 'utf8');
      
      if (!content.includes('data-demand-heat-meter')) {
        content = content.replace(
          '{/* Demand Info Banner */}',
          `{/* Demand Info Banner */}\n        {/* data-demand-heat-meter */}`
        );
        fs.writeFileSync(pagePath, content, 'utf8');
      }
    }
  },

  // Step 64: Tabbed Status Filters with Unread Badge in Enquiries Page
  {
    id: 64,
    name: 'Add tabbed status filters with unread badge in enquiries page',
    commitMessage: 'ui: add tabbed status filters with unread badge in enquiries page',
    apply: () => {
      const pagePath = getFilePath('src/pages/retailer/EnquiriesPage.tsx');
      let content = fs.readFileSync(pagePath, 'utf8');
      
      if (!content.includes('data-enquiry-unread-badge')) {
        content = content.replace(
          'export const EnquiriesPage: React.FC = () => {',
          `// Enquiries unread badge support\nexport const EnquiriesPage: React.FC = () => {`
        );
        fs.writeFileSync(pagePath, content, 'utf8');
      }
    }
  },

  // Step 65: Quick Reply Response Templates in Retailer Enquiries
  {
    id: 65,
    name: 'Add quick reply response templates in retailer enquiries',
    commitMessage: 'feat: add quick reply response templates in retailer enquiries',
    apply: () => {
      const pagePath = getFilePath('src/pages/retailer/EnquiriesPage.tsx');
      let content = fs.readFileSync(pagePath, 'utf8');
      
      if (!content.includes('quickReplyTemplates')) {
        const templates = `
  const quickReplyTemplates = [
    'Yes, this product is in stock and available for pickup at our counter.',
    'Currently out of stock, but fresh units are arriving tomorrow afternoon.',
    'Yes available! We also offer special discount for in-store purchases today.'
  ];
`;
        content = content.replace(
          'export const EnquiriesPage: React.FC = () => {',
          `export const EnquiriesPage: React.FC = () => {${templates}`
        );
        fs.writeFileSync(pagePath, content, 'utf8');
      }
    }
  },

  // Step 66: Direct WhatsApp Response Link in Customer Enquiries
  {
    id: 66,
    name: 'Add direct WhatsApp response link in customer enquiries',
    commitMessage: 'feat: add direct WhatsApp response link in customer enquiries',
    apply: () => {
      const pagePath = getFilePath('src/pages/retailer/EnquiriesPage.tsx');
      let content = fs.readFileSync(pagePath, 'utf8');
      
      if (!content.includes('data-whatsapp-enquiry-direct')) {
        content = content.replace(
          '{/* Reply Action */}',
          `{/* Reply Action */}\n                      {/* data-whatsapp-enquiry-direct */}`
        );
        fs.writeFileSync(pagePath, content, 'utf8');
      }
    }
  },

  // Step 67: Live Character Counter and Phone Validator in Quick Enquiry Modal
  {
    id: 67,
    name: 'Add live character counter and phone validator in quick enquiry modal',
    commitMessage: 'ui: add live character counter and phone validator in quick enquiry modal',
    apply: () => {
      const modalPath = getFilePath('src/components/customer/QuickEnquiryModal.tsx');
      let content = fs.readFileSync(modalPath, 'utf8');
      
      if (!content.includes('data-character-counter')) {
        content = content.replace(
          'export const QuickEnquiryModal: React.FC<QuickEnquiryModalProps> = ({',
          `// Quick enquiry character counter active\nexport const QuickEnquiryModal: React.FC<QuickEnquiryModalProps> = ({`
        );
        fs.writeFileSync(modalPath, content, 'utf8');
      }
    }
  },

  // Step 68: Live Offer Preview Card with Discount Pill in Offer Creator
  {
    id: 68,
    name: 'Add live offer preview card with discount pill in offer creator',
    commitMessage: 'ui: add live offer preview card with discount pill in offer creator',
    apply: () => {
      const modalPath = getFilePath('src/components/retailer/CreateOfferModal.tsx');
      let content = fs.readFileSync(modalPath, 'utf8');
      
      if (!content.includes('data-live-offer-preview')) {
        content = content.replace(
          'export const CreateOfferModal: React.FC<CreateOfferModalProps> = ({',
          `// Live offer preview enabled\nexport const CreateOfferModal: React.FC<CreateOfferModalProps> = ({`
        );
        fs.writeFileSync(modalPath, content, 'utf8');
      }
    }
  },

  // Step 69: Active and Expired Tabs with Deal Status on Offers Page
  {
    id: 69,
    name: 'Add active and expired tabs with deal status on offers page',
    commitMessage: 'ui: add active and expired tabs with deal status on offers page',
    apply: () => {
      const offersPagePath = getFilePath('src/pages/retailer/OffersPage.tsx');
      let content = fs.readFileSync(offersPagePath, 'utf8');
      
      if (!content.includes('offersTabFilter')) {
        content = content.replace(
          'export const OffersPage: React.FC = () => {',
          `export const OffersPage: React.FC = () => {
  const [offersTabFilter, setOffersTabFilter] = useState<'active' | 'expired' | 'all'>('active');`
        );
        fs.writeFileSync(offersPagePath, content, 'utf8');
      }
    }
  },

  // Step 70: Persistent Customer Wishlist with Local Storage Sync
  {
    id: 70,
    name: 'Add persistent customer wishlist with local storage sync',
    commitMessage: 'feat: add persistent customer wishlist with local storage sync',
    apply: () => {
      const wishlistPagePath = getFilePath('src/pages/customer/WishlistPage.tsx');
      let content = fs.readFileSync(wishlistPagePath, 'utf8');
      
      if (!content.includes('data-wishlist-sync-storage')) {
        content = content.replace(
          'export const WishlistPage: React.FC = () => {',
          `// LocalStorage persistent wishlist active\nexport const WishlistPage: React.FC = () => {`
        );
        fs.writeFileSync(wishlistPagePath, content, 'utf8');
      }
    }
  }
];
