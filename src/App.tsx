import { KeyboardShortcutsModal } from './components/common/KeyboardShortcutsModal';
import { NetworkStatusBanner } from './components/common/NetworkStatusBanner';
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AppProvider, useApp } from './context/AppContext';
import { Header } from './components/common/Header';
import { Footer } from './components/common/Footer';
import { BottomNav } from './components/common/BottomNav';
import { LocationModal } from './components/common/LocationModal';
import { VoiceSearchModal } from './components/common/VoiceSearchModal';
import { AuthModal } from './components/common/AuthModal';

// Customer Pages
import { HomePage } from './pages/customer/HomePage';
import { SearchResultsPage } from './pages/customer/SearchResultsPage';
import { ProductDetailsPage } from './pages/customer/ProductDetailsPage';
import { ComparePage } from './pages/customer/ComparePage';
import { StorePage } from './pages/customer/StorePage';
import { MapPage } from './pages/customer/MapPage';
import { CategoriesPage } from './pages/customer/CategoriesPage';
import { WishlistPage } from './pages/customer/WishlistPage';
import { NotificationsPage } from './pages/customer/NotificationsPage';
import { ProfilePage } from './pages/customer/ProfilePage';
import { LandingPage } from './pages/LandingPage';
import { ExplainerPage } from './pages/customer/ExplainerPage';

// Retailer SaaS & Auth Pages
import { RetailerAuthPage } from './pages/retailer/RetailerAuthPage';
import { RetailerDashboardPage } from './pages/retailer/RetailerDashboardPage';
import { InventoryPage } from './pages/retailer/InventoryPage';
import { DemandAlertsPage } from './pages/retailer/DemandAlertsPage';
import { OffersPage } from './pages/retailer/OffersPage';
import { EnquiriesPage } from './pages/retailer/EnquiriesPage';
import { StoreSettingsPage } from './pages/retailer/StoreSettingsPage';
import { SubscriptionPage } from './pages/retailer/SubscriptionPage';
import { AnalyticsPage } from './pages/retailer/AnalyticsPage';
import { RegisterStorePage } from './pages/retailer/RegisterStorePage';

// Complete Admin Control Suite & Auth Pages
import { AdminAuthPage } from './pages/admin/AdminAuthPage';
import { AdminDashboardPage } from './pages/admin/AdminDashboardPage';
import { UsersManagementPage } from './pages/admin/UsersManagementPage';
import { RetailersManagementPage } from './pages/admin/RetailersManagementPage';
import { ProductsManagementPage } from './pages/admin/ProductsManagementPage';
import { StoreVerificationPage } from './pages/admin/StoreVerificationPage';
import { CategoryManagerPage } from './pages/admin/CategoryManagerPage';
import { ReportsManagementPage } from './pages/admin/ReportsManagementPage';
import { PlatformAnalyticsPage } from './pages/admin/PlatformAnalyticsPage';
import { BroadcastNotificationsPage } from './pages/admin/BroadcastNotificationsPage';
import { AdminSettingsPage } from './pages/admin/AdminSettingsPage';
import { AppIntroSplashScreen } from './components/motion/AppIntroSplashScreen';
import { SubscriptionModal } from './components/retailer/SubscriptionModal';
import { CompareModal } from './components/customer/CompareModal';
import { CompareTray } from './components/customer/CompareTray';

const AppContent: React.FC = () => {
  const { 
    isUpgradeModalOpen, 
    closeUpgradeModal,
    isCompareModalOpen,
    activeCompareProduct,
    closeCompareModal 
  } = useApp();
  const [showSplash, setShowSplash] = useState(true);
  const [locationModalOpen, setLocationModalOpen] = useState(false);
  const [voiceModalOpen, setVoiceModalOpen] = useState(false);
  const [authModalOpen, setAuthModalOpen] = useState(false);

  const location = useLocation();
  const isRetailerRoute = location.pathname.startsWith('/retailer') && !['/retailer/login', '/retailer/signup', '/retailer/forgot-password'].includes(location.pathname);
  const isAdminRoute = location.pathname.startsWith('/admin') && !['/admin/login', '/admin/signup', '/admin/register', '/admin/forgot-password'].includes(location.pathname);

  // Dedicated SaaS Layout for Retailer / Admin without Customer Header & Footer
  const isDedicatedPortal = isRetailerRoute || isAdminRoute;

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 text-slate-900 font-sans">
      <NetworkStatusBanner />
      <KeyboardShortcutsModal />
      {/* 🎬 2D Anti-Gravity Motion Graphics Intro Splash Screen */}
      {showSplash && (
        <AppIntroSplashScreen onComplete={() => setShowSplash(false)} />
      )}

      {!isDedicatedPortal && (
        <Header
          onOpenLocationModal={() => setLocationModalOpen(true)}
          onOpenVoiceModal={() => setVoiceModalOpen(true)}
          onOpenAuthModal={() => setAuthModalOpen(true)}
        />
      )}

      <main className="flex-1">
        <Routes>
          {/* Customer Routes */}
          <Route
            path="/"
            element={
              <HomePage
                onOpenVoiceModal={() => setVoiceModalOpen(true)}
                onOpenLocationModal={() => setLocationModalOpen(true)}
              />
            }
          />
          <Route path="/landing" element={<LandingPage />} />
          <Route path="/search" element={<SearchResultsPage />} />
          <Route path="/product/:productId" element={<ProductDetailsPage />} />
          <Route path="/compare" element={<ComparePage />} />
          <Route path="/store/:storeId" element={<StorePage />} />
          <Route path="/map" element={<MapPage />} />
          <Route path="/categories" element={<CategoriesPage />} />
          <Route path="/wishlist" element={<WishlistPage />} />
          <Route path="/notifications" element={<NotificationsPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/explainer" element={<ExplainerPage />} />

          {/* Retailer Auth & Onboarding Routes */}
          <Route path="/retailer/login" element={<RetailerAuthPage />} />
          <Route path="/retailer/signup" element={<RetailerAuthPage />} />
          <Route path="/retailer/forgot-password" element={<RetailerAuthPage />} />
          <Route path="/retailer/register" element={<RegisterStorePage />} />
          
          {/* Retailer Dashboard Routes */}
          <Route path="/retailer/dashboard" element={<RetailerDashboardPage />} />
          <Route path="/retailer/inventory" element={<InventoryPage />} />
          <Route path="/retailer/subscription" element={<SubscriptionPage />} />
          <Route path="/retailer/demand-alerts" element={<DemandAlertsPage />} />
          <Route path="/retailer/offers" element={<OffersPage />} />
          <Route path="/retailer/enquiries" element={<EnquiriesPage />} />
          <Route path="/retailer/analytics" element={<AnalyticsPage />} />
          <Route path="/retailer/settings" element={<StoreSettingsPage />} />

          {/* Admin Auth & Control Suite Routes */}
          <Route path="/admin/login" element={<AdminAuthPage />} />
          <Route path="/admin/signup" element={<AdminAuthPage />} />
          <Route path="/admin/register" element={<AdminAuthPage />} />
          <Route path="/admin/forgot-password" element={<AdminAuthPage />} />
          <Route path="/admin/dashboard" element={<AdminDashboardPage />} />
          <Route path="/admin/users" element={<UsersManagementPage />} />
          <Route path="/admin/retailers" element={<RetailersManagementPage />} />
          <Route path="/admin/products" element={<ProductsManagementPage />} />
          <Route path="/admin/verification" element={<StoreVerificationPage />} />
          <Route path="/admin/categories" element={<CategoryManagerPage />} />
          <Route path="/admin/reports" element={<ReportsManagementPage />} />
          <Route path="/admin/analytics" element={<PlatformAnalyticsPage />} />
          <Route path="/admin/notifications" element={<BroadcastNotificationsPage />} />
          <Route path="/admin/settings" element={<AdminSettingsPage />} />

          {/* Fallback */}
          <Route
            path="*"
            element={
              <HomePage
                onOpenVoiceModal={() => setVoiceModalOpen(true)}
                onOpenLocationModal={() => setLocationModalOpen(true)}
              />
            }
          />
        </Routes>
      </main>

      {!isDedicatedPortal && <Footer />}
      {!isDedicatedPortal && <BottomNav />}

      {/* Global Modals */}
      <LocationModal
        isOpen={locationModalOpen}
        onClose={() => setLocationModalOpen(false)}
      />

      <VoiceSearchModal
        isOpen={voiceModalOpen}
        onClose={() => setVoiceModalOpen(false)}
      />

      <AuthModal
        isOpen={authModalOpen}
        onClose={() => setAuthModalOpen(false)}
      />

      <SubscriptionModal
        isOpen={isUpgradeModalOpen}
        onClose={closeUpgradeModal}
      />

      {/* ⚖️ Hyperlocal Product Comparison Modal & Tray */}
      <CompareModal
        isOpen={isCompareModalOpen}
        item={activeCompareProduct}
        onClose={closeCompareModal}
      />

      <CompareTray />
    </div>
  );
};

export function App() {
  return (
    <AppProvider>
      <Router>
        <AppContent />
      </Router>
    </AppProvider>
  );
}

export default App;
