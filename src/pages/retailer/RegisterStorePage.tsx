import React, { useState } from 'react';
import { useNavigate, Link, useSearchParams } from 'react-router-dom';
import { 
  Store, 
  Check, 
  ArrowRight, 
  ShieldCheck, 
  MapPin, 
  Phone, 
  Sparkles, 
  Building,
  Lock,
  Mail,
  KeyRound,
  CheckCircle2,
  ArrowLeft
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { StoreLocationPicker } from '../../components/retailer/StoreLocationPicker';

export const RegisterStorePage: React.FC = () => {
  const { categories, registerNewStore, user, setUserRole } = useApp();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  // If user is already in retailer role, they are signed in.
  const isMerchantSignedIn = user.role === 'retailer';

  // Merchant Sign In State (Step 1)
  const [merchantPhoneOrEmail, setMerchantPhoneOrEmail] = useState('+91 98450 12345');
  const [merchantPassword, setMerchantPassword] = useState('sharma123');

  // Store Registration State (Step 2)
  const [name, setName] = useState('');
  const [ownerName, setOwnerName] = useState(user.name || '');
  const [phone, setPhone] = useState(user.phone || '+91 ');
  const [whatsapp, setWhatsapp] = useState(user.phone || '+91 ');
  const [email, setEmail] = useState(user.email || '');
  const [categoryIds, setCategoryIds] = useState<string[]>(['cat-automobile']);
  const [address, setAddress] = useState('');
  const [area, setArea] = useState('Koramangala 4th Block');
  const [city, setCity] = useState('Bengaluru');
  const [pincode, setPincode] = useState('560034');
  const [coordinates, setCoordinates] = useState<{ lat: number; lng: number }>({ lat: 12.9352, lng: 77.6245 });
  const [openingHours, setOpeningHours] = useState('9:00 AM - 9:30 PM');
  const [about, setAbout] = useState('');
  const [facilities, setFacilities] = useState<string[]>(['UPI Accepted', 'Counter Billing', 'Home Delivery']);

  // Handle Step 1 Merchant Sign In
  const handleMerchantSignIn = (e: React.FormEvent) => {
    e.preventDefault();
    setUserRole('retailer', 'store-sharma-auto');
  };

  const handleQuickDemoMerchant = () => {
    setUserRole('retailer', 'store-sharma-auto');
  };

  // Handle Step 2 Store Registration Submission
  const handleStoreRegister = (e: React.FormEvent) => {
    e.preventDefault();
    const newStoreId = registerNewStore({
      name: name || 'Neighborhood Store',
      ownerName: ownerName || 'Proprietor',
      phone: phone.replace(/[^0-9]/g, '') || '9845012345',
      whatsapp: whatsapp.replace(/[^0-9]/g, '') || phone.replace(/[^0-9]/g, '') || '9845012345',
      email: email || `${(name || 'store').toLowerCase().replace(/\s+/g, '')}@gmail.com`,
      categoryIds,
      verified: true, // auto-verified demo
      address: address || 'Shop #14, Main Bazaar',
      area: area || 'Koramangala',
      city: city || 'Bengaluru',
      pincode: pincode || '560034',
      coordinates: coordinates,
      openingHours,
      isOpen: true,
      image: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=600&q=80',
      bannerImage: 'https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&w=1200&q=80',
      facilities,
      about: about || `${name} is a verified local retailer on Dhoondo.`
    });

    setUserRole('retailer', newStoreId);
    navigate('/retailer/dashboard');
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto space-y-8">
        
        {/* Top Pitch Hero */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-500/20 text-brand-300 text-xs font-extrabold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Retailer Empowerment</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Take Your Local Store Online with Dhoondo
          </h1>
          <p className="text-sm text-slate-400 max-w-xl mx-auto leading-relaxed">
            Digitally list your store, manage counter prices, receive direct customer WhatsApp enquiries, and discover unmet local demand.
          </p>
        </div>

        {/* ------------------------------------------------------------- */}
        {/* STEP 1: MERCHANT SIGN IN REQUIRED (If not signed in) */}
        {/* ------------------------------------------------------------- */}
        {!isMerchantSignedIn ? (
          <div className="bg-slate-950 rounded-3xl p-6 sm:p-8 border border-slate-800 shadow-2xl space-y-6">
            
            <div className="flex items-center justify-between pb-4 border-b border-slate-800">
              <div className="flex items-center gap-2 text-brand-400 font-bold text-sm">
                <KeyRound className="w-5 h-5" />
                <span>Step 1: Merchant Account Sign In</span>
              </div>
              <span className="text-[11px] px-2.5 py-1 rounded-full bg-brand-500/20 text-brand-300 font-bold">
                Sign In Required
              </span>
            </div>

            <p className="text-xs text-slate-300">
              Apni dukaan register karne ke liye pehle apne <strong>Merchant Account me Sign In</strong> karein. Sign in karne ke baad aapka store registration form open ho jayega.
            </p>

            <form onSubmit={handleMerchantSignIn} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1.5">
                  Merchant Mobile Number / Email *
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                  <input
                    type="text"
                    required
                    value={merchantPhoneOrEmail}
                    onChange={(e) => setMerchantPhoneOrEmail(e.target.value)}
                    placeholder="+91 98450 12345 or store@sharmaauto.in"
                    className="w-full pl-10 pr-4 py-2.5 bg-slate-900 border border-slate-800 rounded-xl text-xs text-white placeholder:text-slate-500 focus:border-brand-500 outline-none"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label className="block text-xs font-bold text-slate-300">
                    Merchant Password *
                  </label>
                  <Link
                    to="/retailer/forgot-password"
                    className="text-xs text-brand-400 hover:underline font-semibold"
                  >
                    Forgot Password?
                  </Link>
                </div>
                <div className="relative">
                  <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                  <input
                    type="password"
                    required
                    value={merchantPassword}
                    onChange={(e) => setMerchantPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full pl-10 pr-4 py-2.5 bg-slate-900 border border-slate-800 rounded-xl text-xs text-white placeholder:text-slate-500 focus:border-brand-500 outline-none"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-brand-500 to-teal-400 hover:from-brand-400 hover:to-teal-300 text-slate-950 font-black text-sm shadow-xl shadow-brand-500/25 flex items-center justify-center gap-2 transition-all hover:scale-[1.01]"
              >
                <span>Sign In & Open Store Registration</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>

            <div className="pt-4 border-t border-slate-800 space-y-3">
              <div className="text-[11px] text-slate-400 font-bold uppercase tracking-wider text-center">
                Quick Demo Merchant Access
              </div>
              <button
                type="button"
                onClick={handleQuickDemoMerchant}
                className="w-full py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-brand-300 border border-brand-500/30 text-xs font-bold flex items-center justify-center gap-2 transition-colors"
              >
                <Sparkles className="w-4 h-4 text-brand-400" />
                <span>1-Click Merchant Login (Sharma Auto Parts)</span>
              </button>
            </div>

          </div>
        ) : (
          /* ------------------------------------------------------------- */
          /* STEP 2: STORE REGISTRATION FORM (When Merchant is Signed In) */
          /* ------------------------------------------------------------- */
          <form onSubmit={handleStoreRegister} className="bg-slate-950 rounded-3xl p-6 sm:p-8 border border-slate-800 shadow-2xl space-y-6">
            
            {/* Merchant Identity Badge */}
            <div className="p-3 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span className="text-slate-400">Authenticated Merchant:</span>
                <strong className="text-white font-bold">{user.name || 'Merchant User'}</strong>
              </div>
              <span className="text-xs text-brand-400 font-bold">
                ✓ Ready to Onboard Store
              </span>
            </div>

            <div className="flex items-center gap-2 pb-4 border-b border-slate-800 text-brand-400 font-bold text-sm">
              <Store className="w-5 h-5" />
              <span>Step 2: Store & Proprietor Details</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-400 mb-1">Store / Business Name *</label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Mahalakshmi Auto Spares & Parts"
                  className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-800 rounded-xl text-xs text-white focus:border-brand-500 outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-400 mb-1">Owner / Manager Name *</label>
                <input
                  type="text"
                  required
                  value={ownerName}
                  onChange={(e) => setOwnerName(e.target.value)}
                  placeholder="e.g. Ramesh Chandra"
                  className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-800 rounded-xl text-xs text-white focus:border-brand-500 outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-400 mb-1">Store Calling Phone *</label>
                <input
                  type="text"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+91 98450 12345"
                  className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-800 rounded-xl text-xs text-white focus:border-brand-500 outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-400 mb-1">WhatsApp Number (For customer enquiries) *</label>
                <input
                  type="text"
                  required
                  value={whatsapp}
                  onChange={(e) => setWhatsapp(e.target.value)}
                  placeholder="+91 98450 12345"
                  className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-800 rounded-xl text-xs text-white focus:border-brand-500 outline-none"
                />
              </div>
            </div>

            {/* Categories */}
            <div className="space-y-2 pt-2 border-t border-slate-800">
              <label className="block text-xs font-bold text-slate-400">Primary Product Categories *</label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {categories.map((cat) => {
                  const isSelected = categoryIds.includes(cat.id);
                  return (
                    <button
                      type="button"
                      key={cat.id}
                      onClick={() => {
                        if (isSelected) {
                          if (categoryIds.length > 1) {
                            setCategoryIds(categoryIds.filter(id => id !== cat.id));
                          }
                        } else {
                          setCategoryIds([...categoryIds, cat.id]);
                        }
                      }}
                      className={`p-2.5 rounded-xl border text-left text-xs flex items-center gap-2 transition-all ${
                        isSelected
                          ? 'bg-brand-500/20 border-brand-500 text-brand-300 font-bold'
                          : 'bg-slate-900 border-slate-800 text-slate-400 hover:border-slate-700'
                      }`}
                    >
                      <span className="text-base">{cat.emoji}</span>
                      <span className="truncate">{cat.name}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Address & Google Maps Location Picker */}
            <div className="space-y-4 pt-2 border-t border-slate-800">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-brand-400 font-bold text-sm">
                  <MapPin className="w-5 h-5" />
                  <span>Exact Store Location (Google Maps & Places)</span>
                </div>
                <span className="text-[11px] text-slate-400">Search place or drag pin</span>
              </div>

              {/* Interactive Places & Draggable Pin Location Picker */}
              <StoreLocationPicker
                initialLat={coordinates.lat}
                initialLng={coordinates.lng}
                initialAddress={address}
                onLocationSelect={(data) => {
                  setAddress(data.address);
                  setArea(data.area);
                  setCity(data.city);
                  setPincode(data.pincode);
                  setCoordinates({ lat: data.lat, lng: data.lng });
                }}
              />

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
                <div>
                  <label className="block text-xs font-bold text-slate-400 mb-1">Neighborhood Area</label>
                  <input
                    type="text"
                    required
                    value={area}
                    onChange={(e) => setArea(e.target.value)}
                    placeholder="Koramangala 4th Block"
                    className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-800 rounded-xl text-xs text-white focus:border-brand-500 outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-400 mb-1">City</label>
                  <input
                    type="text"
                    required
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="Bengaluru"
                    className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-800 rounded-xl text-xs text-white focus:border-brand-500 outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-400 mb-1">Pincode</label>
                  <input
                    type="text"
                    required
                    value={pincode}
                    onChange={(e) => setPincode(e.target.value)}
                    placeholder="560034"
                    className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-800 rounded-xl text-xs text-white focus:border-brand-500 outline-none"
                  />
                </div>
              </div>
            </div>

            {/* Operating Hours */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-slate-800">
              <div>
                <label className="block text-xs font-bold text-slate-400 mb-1">Counter Operating Hours *</label>
                <input
                  type="text"
                  required
                  value={openingHours}
                  onChange={(e) => setOpeningHours(e.target.value)}
                  placeholder="e.g. 9:00 AM - 9:30 PM (Mon-Sat)"
                  className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-800 rounded-xl text-xs text-white focus:border-brand-500 outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-400 mb-1">Store Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="store@sharmaauto.in"
                  className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-800 rounded-xl text-xs text-white focus:border-brand-500 outline-none"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-4 rounded-2xl bg-gradient-to-r from-brand-500 to-teal-400 hover:from-brand-400 hover:to-teal-300 text-slate-950 font-black text-sm shadow-xl shadow-brand-500/25 flex items-center justify-center gap-2 transition-all hover:scale-[1.01]"
            >
              <span>Submit Registration & Activate Storefront</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        )}

      </div>
    </div>
  );
};
