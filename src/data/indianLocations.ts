export interface IndianCityArea {
  area: string;
  city: string; // District Name
  state: string;
  pincode: string;
  lat: number;
  lng: number;
  isPopular?: boolean;
}

export interface IndianDistrict {
  name: string;
  centerCoordinates: {
    lat: number;
    lng: number;
  };
  pincode: string;
  areas: IndianCityArea[];
}

export interface IndianState {
  name: string;
  code: string;
  type: 'state' | 'ut';
  capital: string;
  centerCoordinates: {
    lat: number;
    lng: number;
  };
  districts: IndianDistrict[];
  cities: IndianCityArea[]; // Flattened list
}

export const INDIAN_STATES_DATA: IndianState[] = [
  // ==========================================
  // 📍 1. BIHAR (ALL 38 DISTRICTS COMPLETE)
  // ==========================================
  {
    name: 'Bihar',
    code: 'BR',
    type: 'state',
    capital: 'Patna',
    centerCoordinates: { lat: 25.0961, lng: 85.3131 },
    districts: [
      {
        name: 'Jamui',
        centerCoordinates: { lat: 24.9272, lng: 86.2238 },
        pincode: '811307',
        areas: [
          { area: 'Jamui Main Market / Maharajganj', city: 'Jamui', state: 'Bihar', pincode: '811307', lat: 24.9272, lng: 86.2238, isPopular: true },
          { area: 'Bodhban Talab / Station Road', city: 'Jamui', state: 'Bihar', pincode: '811307', lat: 24.9315, lng: 86.2280, isPopular: true },
          { area: 'Kachhari Road / Court Area', city: 'Jamui', state: 'Bihar', pincode: '811307', lat: 24.9230, lng: 86.2190 },
          { area: 'Jhajha Main Market / Bus Stand', city: 'Jamui', state: 'Bihar', pincode: '811308', lat: 24.7731, lng: 86.3812, isPopular: true },
          { area: 'Gidhaur Town / Raj Darbar Area', city: 'Jamui', state: 'Bihar', pincode: '811305', lat: 24.8580, lng: 86.1950 },
          { area: 'Sono Main Bazaar', city: 'Jamui', state: 'Bihar', pincode: '811314', lat: 24.7080, lng: 86.3800 },
          { area: 'Sikandra Chowk', city: 'Jamui', state: 'Bihar', pincode: '811315', lat: 24.9750, lng: 85.9920 },
          { area: 'Khaira Market', city: 'Jamui', state: 'Bihar', pincode: '811317', lat: 24.8720, lng: 86.1550 },
          { area: 'Chakai Bazaar', city: 'Jamui', state: 'Bihar', pincode: '811303', lat: 24.5420, lng: 86.4250 },
          { area: 'Islamnagar Aliganj', city: 'Jamui', state: 'Bihar', pincode: '811301', lat: 24.9650, lng: 85.8950 },
          { area: 'Barhat Bazaar', city: 'Jamui', state: 'Bihar', pincode: '811313', lat: 24.9120, lng: 86.2950 },
          { area: 'Laxmipur Bazaar', city: 'Jamui', state: 'Bihar', pincode: '811312', lat: 24.9450, lng: 86.4150 }
        ]
      },
      {
        name: 'Patna',
        centerCoordinates: { lat: 25.5941, lng: 85.1376 },
        pincode: '800001',
        areas: [
          { area: 'Boring Road Chauraha', city: 'Patna', state: 'Bihar', pincode: '800001', lat: 25.6174, lng: 85.1189, isPopular: true },
          { area: 'Kankarbagh Colony More', city: 'Patna', state: 'Bihar', pincode: '800020', lat: 25.5975, lng: 85.1587, isPopular: true },
          { area: 'Bailey Road / Saguna More', city: 'Patna', state: 'Bihar', pincode: '801503', lat: 25.6122, lng: 85.0504, isPopular: true },
          { area: 'Fraser Road / Dak Bungalow', city: 'Patna', state: 'Bihar', pincode: '800001', lat: 25.6092, lng: 85.1376, isPopular: true },
          { area: 'Rajendra Nagar / Kadamkuan', city: 'Patna', state: 'Bihar', pincode: '800003', lat: 25.6035, lng: 85.1610 },
          { area: 'Anisabad / Phulwari Sharif', city: 'Patna', state: 'Bihar', pincode: '800002', lat: 25.5750, lng: 85.0880 },
          { area: 'Danapur Cantt Station Road', city: 'Patna', state: 'Bihar', pincode: '801503', lat: 25.6333, lng: 85.0333 },
          { area: 'Patna City / Chowk Shikarpur', city: 'Patna', state: 'Bihar', pincode: '800008', lat: 25.5890, lng: 85.2280 },
          { area: 'Bihta Commercial Hub', city: 'Patna', state: 'Bihar', pincode: '801103', lat: 25.5680, lng: 84.8690 },
          { area: 'Fatuha Market', city: 'Patna', state: 'Bihar', pincode: '803201', lat: 25.5120, lng: 85.3120 }
        ]
      },
      {
        name: 'Gaya',
        centerCoordinates: { lat: 24.7914, lng: 85.0002 },
        pincode: '823001',
        areas: [
          { area: 'GB Road / Tower Chowk', city: 'Gaya', state: 'Bihar', pincode: '823001', lat: 24.7914, lng: 85.0002, isPopular: true },
          { area: 'AP Colony / Medical College Rd', city: 'Gaya', state: 'Bihar', pincode: '823001', lat: 24.7820, lng: 84.9920 },
          { area: 'Bodhgaya Main Temple Road', city: 'Gaya', state: 'Bihar', pincode: '824231', lat: 24.6961, lng: 84.9870, isPopular: true },
          { area: 'Manpur / Sikaria More', city: 'Gaya', state: 'Bihar', pincode: '823003', lat: 24.7990, lng: 85.0250 },
          { area: 'Tekari Main Bazaar', city: 'Gaya', state: 'Bihar', pincode: '824236', lat: 24.9420, lng: 84.8320 },
          { area: 'Sherghati Market', city: 'Gaya', state: 'Bihar', pincode: '824211', lat: 24.5780, lng: 84.7920 }
        ]
      },
      {
        name: 'Muzaffarpur',
        centerCoordinates: { lat: 26.1209, lng: 85.3647 },
        pincode: '842001',
        areas: [
          { area: 'Motijheel Market / Saraiyaganj', city: 'Muzaffarpur', state: 'Bihar', pincode: '842001', lat: 26.1209, lng: 85.3647, isPopular: true },
          { area: 'Sutapatti Wholesale Cloth Market', city: 'Muzaffarpur', state: 'Bihar', pincode: '842001', lat: 26.1245, lng: 85.3720 },
          { area: 'Mithanpura / Club Road', city: 'Muzaffarpur', state: 'Bihar', pincode: '842002', lat: 26.1130, lng: 85.3850 },
          { area: 'Aamgola / Gobarsahi', city: 'Muzaffarpur', state: 'Bihar', pincode: '842002', lat: 26.1070, lng: 85.3520 },
          { area: 'Brahmpura / Damuchak', city: 'Muzaffarpur', state: 'Bihar', pincode: '842003', lat: 26.1310, lng: 85.3580 },
          { area: 'Kanti Main Market', city: 'Muzaffarpur', state: 'Bihar', pincode: '843109', lat: 26.1950, lng: 85.2950 }
        ]
      },
      {
        name: 'Bhagalpur',
        centerCoordinates: { lat: 25.2425, lng: 86.9842 },
        pincode: '812002',
        areas: [
          { area: 'Khalifabag Chowk / Station Rd', city: 'Bhagalpur', state: 'Bihar', pincode: '812002', lat: 25.2425, lng: 86.9842, isPopular: true },
          { area: 'Tilkamanjhi / Hatia Road', city: 'Bhagalpur', state: 'Bihar', pincode: '812001', lat: 25.2510, lng: 87.0030 },
          { area: 'Sujaganj Bazaar', city: 'Bhagalpur', state: 'Bihar', pincode: '812002', lat: 25.2390, lng: 86.9780 },
          { area: 'Aliganj / Nathnagar Silk Market', city: 'Bhagalpur', state: 'Bihar', pincode: '812006', lat: 25.2280, lng: 86.9450 },
          { area: 'Kahalgaon NTPC Town', city: 'Bhagalpur', state: 'Bihar', pincode: '813203', lat: 25.2680, lng: 87.2340 },
          { area: 'Naugachia Main Market', city: 'Bhagalpur', state: 'Bihar', pincode: '853204', lat: 25.3920, lng: 87.0980 }
        ]
      },
      {
        name: 'Munger',
        centerCoordinates: { lat: 25.3750, lng: 86.4740 },
        pincode: '811201',
        areas: [
          { area: 'Rajiv Gandhi Chowk / Sadar Bazaar', city: 'Munger', state: 'Bihar', pincode: '811201', lat: 25.3750, lng: 86.4740, isPopular: true },
          { area: 'Jamalpur Railway Colony & Market', city: 'Munger', state: 'Bihar', pincode: '811214', lat: 25.3130, lng: 86.4910, isPopular: true },
          { area: 'Bari Bazaar / Kasim Bazaar', city: 'Munger', state: 'Bihar', pincode: '811201', lat: 25.3810, lng: 86.4680 },
          { area: 'Haveli Kharagpur Market', city: 'Munger', state: 'Bihar', pincode: '811213', lat: 25.1250, lng: 86.5520 },
          { area: 'Tarapur Main Market', city: 'Munger', state: 'Bihar', pincode: '813221', lat: 25.1120, lng: 86.6450 }
        ]
      },
      {
        name: 'Lakhisarai',
        centerCoordinates: { lat: 25.1780, lng: 86.0940 },
        pincode: '811311',
        areas: [
          { area: 'Purani Bazaar Main Market', city: 'Lakhisarai', state: 'Bihar', pincode: '811311', lat: 25.1780, lng: 86.0940, isPopular: true },
          { area: 'Naya Bazaar / Station Road', city: 'Lakhisarai', state: 'Bihar', pincode: '811311', lat: 25.1850, lng: 86.0880 },
          { area: 'Barahiya Main Market', city: 'Lakhisarai', state: 'Bihar', pincode: '811302', lat: 25.2890, lng: 86.0240, isPopular: true },
          { area: 'Surajgarha Bazaar', city: 'Lakhisarai', state: 'Bihar', pincode: '811106', lat: 25.2340, lng: 86.2340 },
          { area: 'Halsi Chowk', city: 'Lakhisarai', state: 'Bihar', pincode: '811107', lat: 25.0450, lng: 86.0560 }
        ]
      },
      {
        name: 'Begusarai',
        centerCoordinates: { lat: 25.4182, lng: 86.1272 },
        pincode: '851101',
        areas: [
          { area: 'Traffic Chowk / Main Market', city: 'Begusarai', state: 'Bihar', pincode: '851101', lat: 25.4182, lng: 86.1272, isPopular: true },
          { area: 'Power House Chowk / Har-Har Mahadev', city: 'Begusarai', state: 'Bihar', pincode: '851101', lat: 25.4290, lng: 86.1390 },
          { area: 'Barauni Refinery Township', city: 'Begusarai', state: 'Bihar', pincode: '851112', lat: 25.4780, lng: 85.9810, isPopular: true },
          { area: 'Teghra Bazaar', city: 'Begusarai', state: 'Bihar', pincode: '851133', lat: 25.4890, lng: 85.9120 },
          { area: 'Bakhri Bazaar', city: 'Begusarai', state: 'Bihar', pincode: '848201', lat: 25.5920, lng: 86.2230 }
        ]
      },
      {
        name: 'Nalanda (Bihar Sharif)',
        centerCoordinates: { lat: 25.1982, lng: 85.5149 },
        pincode: '803101',
        areas: [
          { area: 'Hospital More / Ramchandrapur', city: 'Nalanda (Bihar Sharif)', state: 'Bihar', pincode: '803101', lat: 25.1982, lng: 85.5149, isPopular: true },
          { area: 'Rajgir Kund & Ropeway Market', city: 'Nalanda (Bihar Sharif)', state: 'Bihar', pincode: '803116', lat: 25.0180, lng: 85.4210, isPopular: true },
          { area: 'Ranchi Road / Bharav Par', city: 'Nalanda (Bihar Sharif)', state: 'Bihar', pincode: '803101', lat: 25.1890, lng: 85.5230 },
          { area: 'Hilsa Main Market', city: 'Nalanda (Bihar Sharif)', state: 'Bihar', pincode: '801302', lat: 25.3210, lng: 85.2890 },
          { area: 'Pawapuri Jal Mandir Market', city: 'Nalanda (Bihar Sharif)', state: 'Bihar', pincode: '803115', lat: 25.0920, lng: 85.5410 }
        ]
      },
      {
        name: 'Darbhanga',
        centerCoordinates: { lat: 26.1542, lng: 85.8918 },
        pincode: '846004',
        areas: [
          { area: 'Darbhanga Tower Chowk', city: 'Darbhanga', state: 'Bihar', pincode: '846004', lat: 26.1542, lng: 85.8918, isPopular: true },
          { area: 'Laheriasarai Main Market', city: 'Darbhanga', state: 'Bihar', pincode: '846001', lat: 26.1180, lng: 85.8970 },
          { area: 'Donar / Benta Chowk', city: 'Darbhanga', state: 'Bihar', pincode: '846003', lat: 26.1420, lng: 85.9080 },
          { area: 'Benipur Market', city: 'Darbhanga', state: 'Bihar', pincode: '847103', lat: 26.1120, lng: 86.1340 }
        ]
      },
      {
        name: 'Purnea',
        centerCoordinates: { lat: 25.7771, lng: 87.4753 },
        pincode: '854301',
        areas: [
          { area: 'Bhatta Bazaar / Line Bazaar', city: 'Purnea', state: 'Bihar', pincode: '854301', lat: 25.7771, lng: 87.4753, isPopular: true },
          { area: 'Gulabbagh Wholesale Mandi', city: 'Purnea', state: 'Bihar', pincode: '854326', lat: 25.7620, lng: 87.5210 },
          { area: 'Kasba Main Market', city: 'Purnea', state: 'Bihar', pincode: '854330', lat: 25.8540, lng: 87.5340 },
          { area: 'Banmankhi Market', city: 'Purnea', state: 'Bihar', pincode: '854202', lat: 25.8940, lng: 87.1230 }
        ]
      },
      {
        name: 'Samastipur',
        centerCoordinates: { lat: 25.8627, lng: 85.7811 },
        pincode: '848101',
        areas: [
          { area: 'Station Road / Marwari Dharmshala', city: 'Samastipur', state: 'Bihar', pincode: '848101', lat: 25.8627, lng: 85.7811, isPopular: true },
          { area: 'Magardahi Ghat / Mohanpur Road', city: 'Samastipur', state: 'Bihar', pincode: '848101', lat: 25.8540, lng: 85.7920 },
          { area: 'Rosera Main Market', city: 'Samastipur', state: 'Bihar', pincode: '848210', lat: 25.7520, lng: 86.0120 },
          { area: 'Dalsinghsarai Market', city: 'Samastipur', state: 'Bihar', pincode: '848114', lat: 25.6680, lng: 85.8340 }
        ]
      },
      {
        name: 'Rohtas (Sasaram)',
        centerCoordinates: { lat: 24.9520, lng: 84.0320 },
        pincode: '821115',
        areas: [
          { area: 'Sasaram GT Road / Dharmshala Chowk', city: 'Rohtas (Sasaram)', state: 'Bihar', pincode: '821115', lat: 24.9520, lng: 84.0320, isPopular: true },
          { area: 'Dehri on Sone / Station Road', city: 'Rohtas (Sasaram)', state: 'Bihar', pincode: '821305', lat: 24.9120, lng: 84.1840 },
          { area: 'Bikramganj Market', city: 'Rohtas (Sasaram)', state: 'Bihar', pincode: '802212', lat: 25.2120, lng: 84.2540 }
        ]
      },
      {
        name: 'Bhojpur (Ara)',
        centerCoordinates: { lat: 25.5560, lng: 84.6603 },
        pincode: '802301',
        areas: [
          { area: 'Gopali Chowk / Station Road', city: 'Bhojpur (Ara)', state: 'Bihar', pincode: '802301', lat: 25.5560, lng: 84.6603, isPopular: true },
          { area: 'Nawada Chowk / Shitala Mandir', city: 'Bhojpur (Ara)', state: 'Bihar', pincode: '802301', lat: 25.5680, lng: 84.6720 },
          { area: 'Jagdishpur Main Bazaar', city: 'Bhojpur (Ara)', state: 'Bihar', pincode: '802158', lat: 25.4780, lng: 84.4210 },
          { area: 'Piro Bazaar', city: 'Bhojpur (Ara)', state: 'Bihar', pincode: '802207', lat: 25.3210, lng: 84.4120 }
        ]
      },
      {
        name: 'Vaishali (Hajipur)',
        centerCoordinates: { lat: 25.6858, lng: 85.2146 },
        pincode: '844101',
        areas: [
          { area: 'Anwarpur Chowk / Cinema Road', city: 'Vaishali (Hajipur)', state: 'Bihar', pincode: '844101', lat: 25.6858, lng: 85.2146, isPopular: true },
          { area: 'Hajipur Industrial Area', city: 'Vaishali (Hajipur)', state: 'Bihar', pincode: '844102', lat: 25.7120, lng: 85.2340 },
          { area: 'Mahua Main Market', city: 'Vaishali (Hajipur)', state: 'Bihar', pincode: '844122', lat: 25.8210, lng: 85.3920 },
          { area: 'Lalganj Bazaar', city: 'Vaishali (Hajipur)', state: 'Bihar', pincode: '844121', lat: 25.8650, lng: 85.1780 }
        ]
      },
      {
        name: 'Saran (Chhapra)',
        centerCoordinates: { lat: 25.7848, lng: 84.7274 },
        pincode: '841301',
        areas: [
          { area: 'Municipality Chowk / Hathua Market', city: 'Saran (Chhapra)', state: 'Bihar', pincode: '841301', lat: 25.7848, lng: 84.7274, isPopular: true },
          { area: 'Thanachowk / Bhagwan Bazaar', city: 'Saran (Chhapra)', state: 'Bihar', pincode: '841301', lat: 25.7790, lng: 84.7410 },
          { area: 'Sonepur Mela Ground & Market', city: 'Saran (Chhapra)', state: 'Bihar', pincode: '841101', lat: 25.6980, lng: 85.1840 },
          { area: 'Marhaura Market', city: 'Saran (Chhapra)', state: 'Bihar', pincode: '841418', lat: 25.9650, lng: 84.8650 }
        ]
      },
      {
        name: 'Siwan',
        centerCoordinates: { lat: 26.2243, lng: 84.3596 },
        pincode: '841226',
        areas: [
          { area: 'Babra Chowk / Hospital Road', city: 'Siwan', state: 'Bihar', pincode: '841226', lat: 26.2243, lng: 84.3596, isPopular: true },
          { area: 'Station Road / Tarwara More', city: 'Siwan', state: 'Bihar', pincode: '841226', lat: 26.2180, lng: 84.3680 },
          { area: 'Maharajganj (Siwan) Market', city: 'Siwan', state: 'Bihar', pincode: '841238', lat: 26.1120, lng: 84.5120 },
          { area: 'Mairwa Main Bazaar', city: 'Siwan', state: 'Bihar', pincode: '841239', lat: 26.2340, lng: 84.1560 }
        ]
      },
      {
        name: 'Gopalganj',
        centerCoordinates: { lat: 26.4678, lng: 84.4444 },
        pincode: '841428',
        areas: [
          { area: 'Ambedkar Chowk / Cinema Road', city: 'Gopalganj', state: 'Bihar', pincode: '841428', lat: 26.4678, lng: 84.4444, isPopular: true },
          { area: 'Mirganj Main Market', city: 'Gopalganj', state: 'Bihar', pincode: '841438', lat: 26.4120, lng: 84.3340 },
          { area: 'Barauli Market', city: 'Gopalganj', state: 'Bihar', pincode: '841407', lat: 26.3890, lng: 84.5820 }
        ]
      },
      {
        name: 'Madhubani',
        centerCoordinates: { lat: 26.3551, lng: 86.0718 },
        pincode: '847211',
        areas: [
          { area: 'Bata Chowk / Station Road', city: 'Madhubani', state: 'Bihar', pincode: '847211', lat: 26.3551, lng: 86.0718, isPopular: true },
          { area: 'Jhanjharpur Main Market', city: 'Madhubani', state: 'Bihar', pincode: '847404', lat: 26.2650, lng: 86.2890 },
          { area: 'Benipatti Market', city: 'Madhubani', state: 'Bihar', pincode: '847223', lat: 26.4520, lng: 85.9120 },
          { area: 'Jaynagar Indo-Nepal Border Hub', city: 'Madhubani', state: 'Bihar', pincode: '847226', lat: 26.5890, lng: 86.1340 }
        ]
      },
      {
        name: 'Sitamarhi',
        centerCoordinates: { lat: 26.5983, lng: 85.4896 },
        pincode: '843302',
        areas: [
          { area: 'Mehsaul Chowk / Main Market', city: 'Sitamarhi', state: 'Bihar', pincode: '843302', lat: 26.5983, lng: 85.4896, isPopular: true },
          { area: 'Janaki Sthan / Court Area', city: 'Sitamarhi', state: 'Bihar', pincode: '843301', lat: 26.6050, lng: 85.4980 },
          { area: 'Bairgania Border Market', city: 'Sitamarhi', state: 'Bihar', pincode: '843313', lat: 26.7450, lng: 85.3120 },
          { area: 'Pupri Bazaar', city: 'Sitamarhi', state: 'Bihar', pincode: '843320', lat: 26.5120, lng: 85.7340 }
        ]
      },
      {
        name: 'East Champaran (Motihari)',
        centerCoordinates: { lat: 26.6469, lng: 84.9089 },
        pincode: '845401',
        areas: [
          { area: 'Chhatauni Bus Stand Market', city: 'East Champaran (Motihari)', state: 'Bihar', pincode: '845401', lat: 26.6469, lng: 84.9089, isPopular: true },
          { area: 'Main Market / Gandhi Chowk', city: 'East Champaran (Motihari)', state: 'Bihar', pincode: '845401', lat: 26.6540, lng: 84.9180 },
          { area: 'Raxaul International Border Town', city: 'East Champaran (Motihari)', state: 'Bihar', pincode: '845305', lat: 26.9780, lng: 84.8560, isPopular: true },
          { area: 'Areraj Temple & Market', city: 'East Champaran (Motihari)', state: 'Bihar', pincode: '845411', lat: 26.5540, lng: 84.6780 },
          { area: 'Chakia Market', city: 'East Champaran (Motihari)', state: 'Bihar', pincode: '845412', lat: 26.4210, lng: 85.0450 }
        ]
      },
      {
        name: 'West Champaran (Bettiah)',
        centerCoordinates: { lat: 26.8028, lng: 84.5028 },
        pincode: '845438',
        areas: [
          { area: 'Lal Bazaar / Suphiya Chowk', city: 'West Champaran (Bettiah)', state: 'Bihar', pincode: '845438', lat: 26.8028, lng: 84.5028, isPopular: true },
          { area: 'Narkatiaganj Railway Hub', city: 'West Champaran (Bettiah)', state: 'Bihar', pincode: '845455', lat: 27.0980, lng: 84.5820 },
          { area: 'Bagaha Main Market', city: 'West Champaran (Bettiah)', state: 'Bihar', pincode: '845101', lat: 27.0890, lng: 84.0920 },
          { area: 'Ramnagar Market', city: 'West Champaran (Bettiah)', state: 'Bihar', pincode: '845106', lat: 27.1650, lng: 84.3210 }
        ]
      },
      {
        name: 'Saharsa',
        centerCoordinates: { lat: 25.8835, lng: 86.5987 },
        pincode: '852201',
        areas: [
          { area: 'DB Road / Shankar Chowk', city: 'Saharsa', state: 'Bihar', pincode: '852201', lat: 25.8835, lng: 86.5987, isPopular: true },
          { area: 'Simri Bakhtiyarpur Market', city: 'Saharsa', state: 'Bihar', pincode: '852127', lat: 25.7560, lng: 86.5890 },
          { area: 'Sonbarsa Raj Market', city: 'Saharsa', state: 'Bihar', pincode: '852129', lat: 25.8120, lng: 86.7450 }
        ]
      },
      {
        name: 'Supaul',
        centerCoordinates: { lat: 26.1260, lng: 86.6050 },
        pincode: '852131',
        areas: [
          { area: 'Station Road / Gandhi Chowk', city: 'Supaul', state: 'Bihar', pincode: '852131', lat: 26.1260, lng: 86.6050, isPopular: true },
          { area: 'Birpur Border Market', city: 'Supaul', state: 'Bihar', pincode: '854340', lat: 26.5120, lng: 87.0120 },
          { area: 'Triveniganj Market', city: 'Supaul', state: 'Bihar', pincode: '852139', lat: 26.1120, lng: 86.8890 }
        ]
      },
      {
        name: 'Madhepura',
        centerCoordinates: { lat: 25.9260, lng: 86.7910 },
        pincode: '852113',
        areas: [
          { area: 'College Chowk / Main Market', city: 'Madhepura', state: 'Bihar', pincode: '852113', lat: 25.9260, lng: 86.7910, isPopular: true },
          { area: 'Murliganj Market', city: 'Madhepura', state: 'Bihar', pincode: '852122', lat: 25.8920, lng: 86.9920 },
          { area: 'Singheshwar Mandir Market', city: 'Madhepura', state: 'Bihar', pincode: '852128', lat: 25.9890, lng: 86.7890 }
        ]
      },
      {
        name: 'Katihar',
        centerCoordinates: { lat: 25.5541, lng: 87.5714 },
        pincode: '854105',
        areas: [
          { area: 'Mirchaibari / Bada Bazaar', city: 'Katihar', state: 'Bihar', pincode: '854105', lat: 25.5541, lng: 87.5714, isPopular: true },
          { area: 'MG Road / Shahid Chowk', city: 'Katihar', state: 'Bihar', pincode: '854105', lat: 25.5450, lng: 87.5810 },
          { area: 'Manihari Ghat Market', city: 'Katihar', state: 'Bihar', pincode: '854113', lat: 25.3450, lng: 87.6230 },
          { area: 'Barsoi Junction Area', city: 'Katihar', state: 'Bihar', pincode: '854317', lat: 25.6450, lng: 87.8920 }
        ]
      },
      {
        name: 'Araria',
        centerCoordinates: { lat: 26.1500, lng: 87.5200 },
        pincode: '854311',
        areas: [
          { area: 'Chandni Chowk / Bus Stand', city: 'Araria', state: 'Bihar', pincode: '854311', lat: 26.1500, lng: 87.5200, isPopular: true },
          { area: 'Forbesganj Main Market', city: 'Araria', state: 'Bihar', pincode: '854318', lat: 26.3120, lng: 87.2560, isPopular: true },
          { area: 'Jogbani Nepal Border Market', city: 'Araria', state: 'Bihar', pincode: '854328', lat: 26.4120, lng: 87.2780 }
        ]
      },
      {
        name: 'Kishanganj',
        centerCoordinates: { lat: 26.1070, lng: 87.9480 },
        pincode: '855107',
        areas: [
          { area: 'Caltex Chowk / Gandhi Ghat', city: 'Kishanganj', state: 'Bihar', pincode: '855107', lat: 26.1070, lng: 87.9480, isPopular: true },
          { area: 'Bahadurganj Market', city: 'Kishanganj', state: 'Bihar', pincode: '855101', lat: 26.2650, lng: 87.8120 },
          { area: 'Thakurganj Bazaar', city: 'Kishanganj', state: 'Bihar', pincode: '855116', lat: 26.4520, lng: 88.1340 }
        ]
      },
      {
        name: 'Banka',
        centerCoordinates: { lat: 24.8847, lng: 86.9221 },
        pincode: '813102',
        areas: [
          { area: 'Shivaji Chowk / Gandhi Chowk', city: 'Banka', state: 'Bihar', pincode: '813102', lat: 24.8847, lng: 86.9221, isPopular: true },
          { area: 'Amarpur Main Market', city: 'Banka', state: 'Bihar', pincode: '813101', lat: 25.0450, lng: 86.9120 },
          { area: 'Katoria Market / Deoghar Rd', city: 'Banka', state: 'Bihar', pincode: '813106', lat: 24.7450, lng: 86.7120 },
          { area: 'Bounsi / Mandar Hill Hub', city: 'Banka', state: 'Bihar', pincode: '813104', lat: 24.8010, lng: 87.0250 }
        ]
      },
      {
        name: 'Nawada',
        centerCoordinates: { lat: 24.8840, lng: 85.5430 },
        pincode: '805110',
        areas: [
          { area: 'Prajatantra Chowk / Main Road', city: 'Nawada', state: 'Bihar', pincode: '805110', lat: 24.8840, lng: 85.5430, isPopular: true },
          { area: 'Hisua Main Market', city: 'Nawada', state: 'Bihar', pincode: '805103', lat: 24.8340, lng: 85.4210 },
          { area: 'Rajauli Bazaar / Jharkhand Border', city: 'Nawada', state: 'Bihar', pincode: '805125', lat: 24.6540, lng: 85.5120 },
          { area: 'Warisaliganj Market', city: 'Nawada', state: 'Bihar', pincode: '805130', lat: 25.0120, lng: 85.6450 }
        ]
      },
      {
        name: 'Aurangabad',
        centerCoordinates: { lat: 24.7540, lng: 84.3730 },
        pincode: '824101',
        areas: [
          { area: 'Ramesh Chowk / GT Road', city: 'Aurangabad', state: 'Bihar', pincode: '824101', lat: 24.7540, lng: 84.3730, isPopular: true },
          { area: 'Daudnagar Main Market', city: 'Aurangabad', state: 'Bihar', pincode: '824143', lat: 25.0340, lng: 84.4020 },
          { area: 'Obra Carpet & Handloom Hub', city: 'Aurangabad', state: 'Bihar', pincode: '824124', lat: 24.9120, lng: 84.3540 },
          { area: 'Deo Sun Temple Market', city: 'Aurangabad', state: 'Bihar', pincode: '824202', lat: 24.6540, lng: 84.4320 }
        ]
      },
      {
        name: 'Jehanabad',
        centerCoordinates: { lat: 25.2130, lng: 84.9870 },
        pincode: '804408',
        areas: [
          { area: 'Court Area / Kargil Chowk', city: 'Jehanabad', state: 'Bihar', pincode: '804408', lat: 25.2130, lng: 84.9870, isPopular: true },
          { area: 'Makhdumpur Market', city: 'Jehanabad', state: 'Bihar', pincode: '804422', lat: 25.0920, lng: 84.9920 },
          { area: 'Kako Bazaar', city: 'Jehanabad', state: 'Bihar', pincode: '804418', lat: 25.2210, lng: 85.0670 }
        ]
      },
      {
        name: 'Arwal',
        centerCoordinates: { lat: 25.2450, lng: 84.6780 },
        pincode: '804401',
        areas: [
          { area: 'Arwal Sipah Chowk / Bus Stand', city: 'Arwal', state: 'Bihar', pincode: '804401', lat: 25.2450, lng: 84.6780, isPopular: true },
          { area: 'Kaler Main Market', city: 'Arwal', state: 'Bihar', pincode: '824127', lat: 25.1340, lng: 84.5890 },
          { area: 'Kurtha Bazaar', city: 'Arwal', state: 'Bihar', pincode: '804421', lat: 25.1980, lng: 84.8230 }
        ]
      },
      {
        name: 'Kaimur (Bhabua)',
        centerCoordinates: { lat: 25.0450, lng: 83.6120 },
        pincode: '821101',
        areas: [
          { area: 'Ekta Chowk / Jai Prakash Chowk', city: 'Kaimur (Bhabua)', state: 'Bihar', pincode: '821101', lat: 25.0450, lng: 83.6120, isPopular: true },
          { area: 'Mohania GT Road Junction', city: 'Kaimur (Bhabua)', state: 'Bihar', pincode: '821109', lat: 25.1780, lng: 83.6230 },
          { area: 'Ramgarh Market', city: 'Kaimur (Bhabua)', state: 'Bihar', pincode: '821110', lat: 25.3210, lng: 83.6780 }
        ]
      },
      {
        name: 'Buxar',
        centerCoordinates: { lat: 25.5640, lng: 83.9770 },
        pincode: '802101',
        areas: [
          { area: 'Station Road / Piprahi Chowk', city: 'Buxar', state: 'Bihar', pincode: '802101', lat: 25.5640, lng: 83.9770, isPopular: true },
          { area: 'Dumraon Main Market', city: 'Buxar', state: 'Bihar', pincode: '802119', lat: 25.5520, lng: 84.1540 },
          { area: 'Brahampur Mandir Market', city: 'Buxar', state: 'Bihar', pincode: '802112', lat: 25.6010, lng: 84.3010 }
        ]
      },
      {
        name: 'Sheikhpura',
        centerCoordinates: { lat: 25.1410, lng: 85.8640 },
        pincode: '811105',
        areas: [
          { area: 'Khandpar / Chandni Chowk', city: 'Sheikhpura', state: 'Bihar', pincode: '811105', lat: 25.1410, lng: 85.8640, isPopular: true },
          { area: 'Barbigha Main Market', city: 'Sheikhpura', state: 'Bihar', pincode: '811101', lat: 25.2340, lng: 85.7890, isPopular: true },
          { area: 'Ariari Bazaar', city: 'Sheikhpura', state: 'Bihar', pincode: '811105', lat: 25.0780, lng: 85.8920 }
        ]
      },
      {
        name: 'Khagaria',
        centerCoordinates: { lat: 25.5030, lng: 86.4820 },
        pincode: '851204',
        areas: [
          { area: 'Rajendra Chowk / Station Road', city: 'Khagaria', state: 'Bihar', pincode: '851204', lat: 25.5030, lng: 86.4820, isPopular: true },
          { area: 'Gogri Jamalpur Market', city: 'Khagaria', state: 'Bihar', pincode: '851203', lat: 25.4320, lng: 86.6010 },
          { area: 'Mansi Junction Area', city: 'Khagaria', state: 'Bihar', pincode: '851214', lat: 25.5120, lng: 86.5890 }
        ]
      },
      {
        name: 'Sheohar',
        centerCoordinates: { lat: 26.5180, lng: 85.2950 },
        pincode: '843329',
        areas: [
          { area: 'Sheohar Main Chowk / Court Rd', city: 'Sheohar', state: 'Bihar', pincode: '843329', lat: 26.5180, lng: 85.2950, isPopular: true },
          { area: 'Piprahi Market', city: 'Sheohar', state: 'Bihar', pincode: '843334', lat: 26.5890, lng: 85.2780 }
        ]
      }
    ],
    cities: []
  },

  // ==========================================
  // 📍 2. UTTAR PRADESH (MAJOR DIVISIONS & DISTRICTS)
  // ==========================================
  {
    name: 'Uttar Pradesh',
    code: 'UP',
    type: 'state',
    capital: 'Lucknow',
    centerCoordinates: { lat: 26.8467, lng: 80.9462 },
    districts: [
      {
        name: 'Lucknow',
        centerCoordinates: { lat: 26.8467, lng: 80.9462 },
        pincode: '226001',
        areas: [
          { area: 'Hazratganj / MG Marg', city: 'Lucknow', state: 'Uttar Pradesh', pincode: '226001', lat: 26.8530, lng: 80.9462, isPopular: true },
          { area: 'Gomti Nagar (Patrakarpuram)', city: 'Lucknow', state: 'Uttar Pradesh', pincode: '226010', lat: 26.8569, lng: 80.9985, isPopular: true },
          { area: 'Alambagh / Phoenix Mall Area', city: 'Lucknow', state: 'Uttar Pradesh', pincode: '226005', lat: 26.8150, lng: 80.9020 },
          { area: 'Indira Nagar / Munshipulia', city: 'Lucknow', state: 'Uttar Pradesh', pincode: '226016', lat: 26.8850, lng: 80.9850 },
          { area: 'Aminabad Cloth & Book Market', city: 'Lucknow', state: 'Uttar Pradesh', pincode: '226018', lat: 26.8450, lng: 80.9250 },
          { area: 'Chowk / Old Lucknow', city: 'Lucknow', state: 'Uttar Pradesh', pincode: '226003', lat: 26.8680, lng: 80.9050 }
        ]
      },
      {
        name: 'Gautam Buddha Nagar (Noida)',
        centerCoordinates: { lat: 28.5708, lng: 77.3271 },
        pincode: '201301',
        areas: [
          { area: 'Sector 18 Atta Market', city: 'Noida', state: 'Uttar Pradesh', pincode: '201301', lat: 28.5708, lng: 77.3271, isPopular: true },
          { area: 'Sector 62 Electronic City', city: 'Noida', state: 'Uttar Pradesh', pincode: '201309', lat: 28.6280, lng: 77.3670, isPopular: true },
          { area: 'Greater Noida West / Gaur City', city: 'Greater Noida', state: 'Uttar Pradesh', pincode: '201009', lat: 28.6080, lng: 77.4280, isPopular: true },
          { area: 'Pari Chowk Commercial Hub', city: 'Greater Noida', state: 'Uttar Pradesh', pincode: '201310', lat: 28.4680, lng: 77.5030 },
          { area: 'Sector 137 / Advant Navis', city: 'Noida', state: 'Uttar Pradesh', pincode: '201305', lat: 28.5020, lng: 77.4080 }
        ]
      },
      {
        name: 'Ghaziabad',
        centerCoordinates: { lat: 28.6692, lng: 77.4538 },
        pincode: '201001',
        areas: [
          { area: 'Indirapuram (Shipra Mall Area)', city: 'Ghaziabad', state: 'Uttar Pradesh', pincode: '201014', lat: 28.6410, lng: 77.3690, isPopular: true },
          { area: 'Vaishali Sector 4', city: 'Ghaziabad', state: 'Uttar Pradesh', pincode: '201010', lat: 28.6480, lng: 77.3420 },
          { area: 'Raj Nagar Extension', city: 'Ghaziabad', state: 'Uttar Pradesh', pincode: '201017', lat: 28.7050, lng: 77.4280 }
        ]
      },
      {
        name: 'Varanasi',
        centerCoordinates: { lat: 25.3109, lng: 83.0076 },
        pincode: '221001',
        areas: [
          { area: 'Godowlia / Dashashwamedh', city: 'Varanasi', state: 'Uttar Pradesh', pincode: '221001', lat: 25.3109, lng: 83.0076, isPopular: true },
          { area: 'Sigra / Mahmoorganj', city: 'Varanasi', state: 'Uttar Pradesh', pincode: '221010', lat: 25.3080, lng: 82.9850 },
          { area: 'Lanka / BHU Gate', city: 'Varanasi', state: 'Uttar Pradesh', pincode: '221005', lat: 25.2790, lng: 82.9990 },
          { area: 'Cantonment / Orderly Bazar', city: 'Varanasi', state: 'Uttar Pradesh', pincode: '221002', lat: 25.3420, lng: 82.9810 }
        ]
      },
      {
        name: 'Kanpur Nagar',
        centerCoordinates: { lat: 26.4719, lng: 80.3475 },
        pincode: '208001',
        areas: [
          { area: 'Mall Road / Naveen Market', city: 'Kanpur', state: 'Uttar Pradesh', pincode: '208001', lat: 26.4719, lng: 80.3475, isPopular: true },
          { area: 'Gumti No 5 / Govind Nagar', city: 'Kanpur', state: 'Uttar Pradesh', pincode: '208006', lat: 26.4520, lng: 80.3150 },
          { area: 'Kakadeo / Coaching Hub', city: 'Kanpur', state: 'Uttar Pradesh', pincode: '208025', lat: 26.4890, lng: 80.2980 }
        ]
      },
      {
        name: 'Agra',
        centerCoordinates: { lat: 27.2038, lng: 78.0069 },
        pincode: '282002',
        areas: [
          { area: 'Sanjay Place Commercial Hub', city: 'Agra', state: 'Uttar Pradesh', pincode: '282002', lat: 27.2038, lng: 78.0069, isPopular: true },
          { area: 'Tajganj / Fatehabad Road', city: 'Agra', state: 'Uttar Pradesh', pincode: '282001', lat: 27.1650, lng: 78.0450 },
          { area: 'Sadarbazar Cantonment', city: 'Agra', state: 'Uttar Pradesh', pincode: '282001', lat: 27.1580, lng: 78.0120 }
        ]
      },
      {
        name: 'Prayagraj (Allahabad)',
        centerCoordinates: { lat: 25.4526, lng: 81.8349 },
        pincode: '211001',
        areas: [
          { area: 'Civil Lines (Subhash Chauraha)', city: 'Prayagraj (Allahabad)', state: 'Uttar Pradesh', pincode: '211001', lat: 25.4526, lng: 81.8349, isPopular: true },
          { area: 'Katra / University Road', city: 'Prayagraj (Allahabad)', state: 'Uttar Pradesh', pincode: '211002', lat: 25.4680, lng: 81.8550 },
          { area: 'Chowk / Loknath Bazaar', city: 'Prayagraj (Allahabad)', state: 'Uttar Pradesh', pincode: '211003', lat: 25.4350, lng: 81.8410 }
        ]
      },
      {
        name: 'Gorakhpur',
        centerCoordinates: { lat: 26.7606, lng: 83.3732 },
        pincode: '273001',
        areas: [
          { area: 'Golghar / City Mall Area', city: 'Gorakhpur', state: 'Uttar Pradesh', pincode: '273001', lat: 26.7606, lng: 83.3732, isPopular: true },
          { area: 'Gorakhnath Temple Market', city: 'Gorakhpur', state: 'Uttar Pradesh', pincode: '273015', lat: 26.7890, lng: 83.3540 },
          { area: 'Mohaddipur / Medical College Rd', city: 'Gorakhpur', state: 'Uttar Pradesh', pincode: '273008', lat: 26.7540, lng: 83.3980 }
        ]
      },
      {
        name: 'Ayodhya (Faizabad)',
        centerCoordinates: { lat: 26.7922, lng: 82.1998 },
        pincode: '224123',
        areas: [
          { area: 'Ram Mandir Complex / Ram Path', city: 'Ayodhya', state: 'Uttar Pradesh', pincode: '224123', lat: 26.7922, lng: 82.1998, isPopular: true },
          { area: 'Faizabad Chowk / Rikabganj', city: 'Ayodhya', state: 'Uttar Pradesh', pincode: '224001', lat: 26.7780, lng: 82.1450 }
        ]
      },
      {
        name: 'Meerut',
        centerCoordinates: { lat: 28.9845, lng: 77.7064 },
        pincode: '250001',
        areas: [
          { area: 'Abu Lane / Begum Bridge', city: 'Meerut', state: 'Uttar Pradesh', pincode: '250001', lat: 28.9845, lng: 77.7064, isPopular: true },
          { area: 'Shastri Nagar / Garh Road', city: 'Meerut', state: 'Uttar Pradesh', pincode: '250004', lat: 28.9720, lng: 77.7340 }
        ]
      },
      {
        name: 'Bareilly',
        centerCoordinates: { lat: 28.3670, lng: 79.4304 },
        pincode: '243001',
        areas: [
          { area: 'Civil Lines / Ayub Khan Chowk', city: 'Bareilly', state: 'Uttar Pradesh', pincode: '243001', lat: 28.3670, lng: 79.4304, isPopular: true },
          { area: 'DD Puram / Rajendra Nagar', city: 'Bareilly', state: 'Uttar Pradesh', pincode: '243122', lat: 28.3840, lng: 79.4180 }
        ]
      },
      {
        name: 'Aligarh',
        centerCoordinates: { lat: 27.8974, lng: 78.0880 },
        pincode: '202001',
        areas: [
          { area: 'Centre Point / Marris Road', city: 'Aligarh', state: 'Uttar Pradesh', pincode: '202001', lat: 27.8974, lng: 78.0880, isPopular: true },
          { area: 'AMU Circle / Dodhpur', city: 'Aligarh', state: 'Uttar Pradesh', pincode: '202002', lat: 27.9120, lng: 78.0750 }
        ]
      },
      {
        name: 'Jhansi',
        centerCoordinates: { lat: 25.4484, lng: 78.5685 },
        pincode: '284001',
        areas: [
          { area: 'Sadar Bazar / Elite Chauraha', city: 'Jhansi', state: 'Uttar Pradesh', pincode: '284001', lat: 25.4484, lng: 78.5685, isPopular: true },
          { area: 'Manik Chowk / Sipri Bazar', city: 'Jhansi', state: 'Uttar Pradesh', pincode: '284002', lat: 25.4350, lng: 78.5520 }
        ]
      },
      {
        name: 'Mathura',
        centerCoordinates: { lat: 27.4924, lng: 77.6737 },
        pincode: '281001',
        areas: [
          { area: 'Krishna Janmabhoomi / Holi Gate', city: 'Mathura', state: 'Uttar Pradesh', pincode: '281001', lat: 27.4924, lng: 77.6737, isPopular: true },
          { area: 'Vrindavan Banke Bihari Market', city: 'Mathura', state: 'Uttar Pradesh', pincode: '281121', lat: 27.5810, lng: 77.7020, isPopular: true }
        ]
      },
      {
        name: 'Moradabad',
        centerCoordinates: { lat: 28.8386, lng: 78.7733 },
        pincode: '244001',
        areas: [
          { area: 'Civil Lines / Peetal Nagri Brass Market', city: 'Moradabad', state: 'Uttar Pradesh', pincode: '244001', lat: 28.8386, lng: 78.7733, isPopular: true }
        ]
      },
      {
        name: 'Saharanpur',
        centerCoordinates: { lat: 29.9679, lng: 77.5452 },
        pincode: '247001',
        areas: [
          { area: 'Court Road / Nehru Market', city: 'Saharanpur', state: 'Uttar Pradesh', pincode: '247001', lat: 29.9679, lng: 77.5452, isPopular: true }
        ]
      }
    ],
    cities: []
  },

  // ==========================================
  // 📍 3. DELHI (NCR) - ALL DISTRICTS
  // ==========================================
  {
    name: 'Delhi (NCR)',
    code: 'DL',
    type: 'ut',
    capital: 'New Delhi',
    centerCoordinates: { lat: 28.6139, lng: 77.2090 },
    districts: [
      {
        name: 'Central Delhi',
        centerCoordinates: { lat: 28.6315, lng: 77.2167 },
        pincode: '110001',
        areas: [
          { area: 'Connaught Place (CP)', city: 'New Delhi', state: 'Delhi (NCR)', pincode: '110001', lat: 28.6315, lng: 77.2167, isPopular: true },
          { area: 'Karol Bagh (Ghaffar Market)', city: 'New Delhi', state: 'Delhi (NCR)', pincode: '110005', lat: 28.6517, lng: 77.1906, isPopular: true },
          { area: 'Chandni Chowk / Nai Sarak', city: 'Old Delhi', state: 'Delhi (NCR)', pincode: '110006', lat: 28.6506, lng: 77.2303, isPopular: true },
          { area: 'Daryaganj / Golcha Cinema', city: 'New Delhi', state: 'Delhi (NCR)', pincode: '110002', lat: 28.6410, lng: 77.2410 }
        ]
      },
      {
        name: 'South Delhi',
        centerCoordinates: { lat: 28.5694, lng: 77.2435 },
        pincode: '110024',
        areas: [
          { area: 'Lajpat Nagar Central Market', city: 'South Delhi', state: 'Delhi (NCR)', pincode: '110024', lat: 28.5694, lng: 77.2435, isPopular: true },
          { area: 'South Extension Part 1 & 2', city: 'South Delhi', state: 'Delhi (NCR)', pincode: '110049', lat: 28.5724, lng: 77.2201, isPopular: true },
          { area: 'Hauz Khas / SDA Market', city: 'South Delhi', state: 'Delhi (NCR)', pincode: '110016', lat: 28.5494, lng: 77.2001, isPopular: true },
          { area: 'Saket District Centre & Select Citywalk', city: 'South Delhi', state: 'Delhi (NCR)', pincode: '110017', lat: 28.5284, lng: 77.2185, isPopular: true },
          { area: 'Greater Kailash (M-Block GK 1 & 2)', city: 'South Delhi', state: 'Delhi (NCR)', pincode: '110048', lat: 28.5530, lng: 77.2380 }
        ]
      },
      {
        name: 'South West Delhi (Dwarka)',
        centerCoordinates: { lat: 28.5921, lng: 77.0460 },
        pincode: '110075',
        areas: [
          { area: 'Dwarka Sector 12 Market', city: 'South West Delhi', state: 'Delhi (NCR)', pincode: '110075', lat: 28.5921, lng: 77.0460, isPopular: true },
          { area: 'Dwarka Sector 6 & 10 Hub', city: 'South West Delhi', state: 'Delhi (NCR)', pincode: '110075', lat: 28.5850, lng: 77.0620 },
          { area: 'Vasant Kunj Promenade Area', city: 'South West Delhi', state: 'Delhi (NCR)', pincode: '110070', lat: 28.5390, lng: 77.1560 }
        ]
      },
      {
        name: 'West Delhi',
        centerCoordinates: { lat: 28.6470, lng: 77.1230 },
        pincode: '110027',
        areas: [
          { area: 'Rajouri Garden Main Market', city: 'West Delhi', state: 'Delhi (NCR)', pincode: '110027', lat: 28.6470, lng: 77.1230, isPopular: true },
          { area: 'Janakpuri District Centre', city: 'West Delhi', state: 'Delhi (NCR)', pincode: '110058', lat: 28.6290, lng: 77.0810 },
          { area: 'Punjabi Bagh Club Road', city: 'West Delhi', state: 'Delhi (NCR)', pincode: '110026', lat: 28.6680, lng: 77.1290 }
        ]
      },
      {
        name: 'North Delhi',
        centerCoordinates: { lat: 28.6940, lng: 77.2060 },
        pincode: '110007',
        areas: [
          { area: 'Kamla Nagar (Bungalow Road / North Campus)', city: 'North Delhi', state: 'Delhi (NCR)', pincode: '110007', lat: 28.6810, lng: 77.2040, isPopular: true },
          { area: 'Model Town 2 & 3', city: 'North Delhi', state: 'Delhi (NCR)', pincode: '110009', lat: 28.7050, lng: 77.1940 },
          { area: 'Pitampura Netaji Subhash Place (NSP)', city: 'North West Delhi', state: 'Delhi (NCR)', pincode: '110034', lat: 28.6960, lng: 77.1510, isPopular: true },
          { area: 'Rohini Sector 7 & 8 Market', city: 'North West Delhi', state: 'Delhi (NCR)', pincode: '110085', lat: 28.7120, lng: 77.1180 }
        ]
      },
      {
        name: 'East Delhi',
        centerCoordinates: { lat: 28.6310, lng: 77.2890 },
        pincode: '110092',
        areas: [
          { area: 'Laxmi Nagar Vikas Marg', city: 'East Delhi', state: 'Delhi (NCR)', pincode: '110092', lat: 28.6310, lng: 77.2790, isPopular: true },
          { area: 'Preet Vihar Commercial Complex', city: 'East Delhi', state: 'Delhi (NCR)', pincode: '110092', lat: 28.6410, lng: 77.2950 },
          { area: 'Mayur Vihar Phase 1 & 2', city: 'East Delhi', state: 'Delhi (NCR)', pincode: '110091', lat: 28.6080, lng: 77.2990 }
        ]
      }
    ],
    cities: []
  },

  // ==========================================
  // 📍 4. MAHARASHTRA (ALL MAJOR DISTRICTS)
  // ==========================================
  {
    name: 'Maharashtra',
    code: 'MH',
    type: 'state',
    capital: 'Mumbai',
    centerCoordinates: { lat: 19.7515, lng: 75.7139 },
    districts: [
      {
        name: 'Mumbai Suburban',
        centerCoordinates: { lat: 19.0596, lng: 72.8295 },
        pincode: '400050',
        areas: [
          { area: 'Bandra West (Linking Road / Hill Road)', city: 'Mumbai', state: 'Maharashtra', pincode: '400050', lat: 19.0596, lng: 72.8295, isPopular: true },
          { area: 'Andheri West (Lokhandwala / Infinity)', city: 'Mumbai', state: 'Maharashtra', pincode: '400053', lat: 19.1415, lng: 72.8267, isPopular: true },
          { area: 'Borivali West / IC Colony', city: 'Mumbai', state: 'Maharashtra', pincode: '400092', lat: 19.2307, lng: 72.8567 },
          { area: 'Colaba Causeway & Fort', city: 'Mumbai', state: 'Maharashtra', pincode: '400005', lat: 18.9187, lng: 72.8298, isPopular: true },
          { area: 'Dadar West (Shivaji Park / Ranade Road)', city: 'Mumbai', state: 'Maharashtra', pincode: '400028', lat: 19.0269, lng: 72.8373 },
          { area: 'Juhu Tara Road / JVPD Scheme', city: 'Mumbai', state: 'Maharashtra', pincode: '400049', lat: 19.1020, lng: 72.8280 },
          { area: 'Ghatkopar East (Khau Galli)', city: 'Mumbai', state: 'Maharashtra', pincode: '400077', lat: 19.0860, lng: 72.9080 }
        ]
      },
      {
        name: 'Pune',
        centerCoordinates: { lat: 18.5204, lng: 73.8427 },
        pincode: '411004',
        areas: [
          { area: 'FC Road / Deccan Gymkhana', city: 'Pune', state: 'Maharashtra', pincode: '411004', lat: 18.5204, lng: 73.8427, isPopular: true },
          { area: 'Koregaon Park / Kalyani Nagar', city: 'Pune', state: 'Maharashtra', pincode: '411001', lat: 18.5362, lng: 73.8940, isPopular: true },
          { area: 'Baner High Street / Balewadi', city: 'Pune', state: 'Maharashtra', pincode: '411045', lat: 18.5590, lng: 73.7868 },
          { area: 'Viman Nagar / Phoenix Mall', city: 'Pune', state: 'Maharashtra', pincode: '411014', lat: 18.5679, lng: 73.9143 },
          { area: 'Hinjawadi IT Park Phase 1 & 2', city: 'Pune', state: 'Maharashtra', pincode: '411057', lat: 18.5910, lng: 73.7380, isPopular: true },
          { area: 'Kothrud / Karve Road', city: 'Pune', state: 'Maharashtra', pincode: '411038', lat: 18.5070, lng: 73.8050 },
          { area: 'Hadapsar (Magarpatta City)', city: 'Pune', state: 'Maharashtra', pincode: '411028', lat: 18.5130, lng: 73.9340 }
        ]
      },
      {
        name: 'Thane',
        centerCoordinates: { lat: 19.2183, lng: 72.9781 },
        pincode: '400601',
        areas: [
          { area: 'Ghodbunder Road / Viviana Mall', city: 'Thane', state: 'Maharashtra', pincode: '400601', lat: 19.2183, lng: 72.9781, isPopular: true },
          { area: 'Naupada / Ram Maruti Road', city: 'Thane', state: 'Maharashtra', pincode: '400602', lat: 19.1890, lng: 72.9720 },
          { area: 'Kalyan West Station Area', city: 'Thane', state: 'Maharashtra', pincode: '421301', lat: 19.2430, lng: 73.1350 },
          { area: 'Dombivli East (Manpada)', city: 'Thane', state: 'Maharashtra', pincode: '421201', lat: 19.2180, lng: 73.0870 }
        ]
      },
      {
        name: 'Navi Mumbai',
        centerCoordinates: { lat: 19.0771, lng: 72.9986 },
        pincode: '400703',
        areas: [
          { area: 'Vashi Sector 17', city: 'Navi Mumbai', state: 'Maharashtra', pincode: '400703', lat: 19.0771, lng: 72.9986, isPopular: true },
          { area: 'Nerul Palm Beach Road', city: 'Navi Mumbai', state: 'Maharashtra', pincode: '400706', lat: 19.0340, lng: 73.0180 },
          { area: 'Kharghar Sector 20 / Central Park', city: 'Navi Mumbai', state: 'Maharashtra', pincode: '410210', lat: 19.0470, lng: 73.0690 }
        ]
      },
      {
        name: 'Nagpur',
        centerCoordinates: { lat: 21.1458, lng: 79.0882 },
        pincode: '440010',
        areas: [
          { area: 'Sitabuldi / Dharampeth', city: 'Nagpur', state: 'Maharashtra', pincode: '440010', lat: 21.1458, lng: 79.0882, isPopular: true },
          { area: 'Sadar Main Market / Residency Rd', city: 'Nagpur', state: 'Maharashtra', pincode: '440001', lat: 21.1610, lng: 79.0810 },
          { area: 'Wardha Road / MIHAN SEZ', city: 'Nagpur', state: 'Maharashtra', pincode: '441108', lat: 21.0540, lng: 79.0520 }
        ]
      },
      {
        name: 'Nashik',
        centerCoordinates: { lat: 19.9975, lng: 73.7898 },
        pincode: '422001',
        areas: [
          { area: 'College Road / MG Road', city: 'Nashik', state: 'Maharashtra', pincode: '422005', lat: 19.9975, lng: 73.7898, isPopular: true },
          { area: 'Panchavati / Ramkund', city: 'Nashik', state: 'Maharashtra', pincode: '422003', lat: 20.0090, lng: 73.7950 }
        ]
      },
      {
        name: 'Aurangabad (Chhatrapati Sambhajinagar)',
        centerCoordinates: { lat: 19.8762, lng: 75.3433 },
        pincode: '431001',
        areas: [
          { area: 'Cannaught Place (CIDCO)', city: 'Aurangabad', state: 'Maharashtra', pincode: '431003', lat: 19.8762, lng: 75.3433, isPopular: true },
          { area: 'Kranti Chowk / Samarth Nagar', city: 'Aurangabad', state: 'Maharashtra', pincode: '431001', lat: 19.8650, lng: 75.3210 }
        ]
      },
      {
        name: 'Kolhapur',
        centerCoordinates: { lat: 16.7050, lng: 74.2433 },
        pincode: '416001',
        areas: [
          { area: 'Mahalaxmi Temple Market / Rajarampuri', city: 'Kolhapur', state: 'Maharashtra', pincode: '416001', lat: 16.7050, lng: 74.2433, isPopular: true }
        ]
      },
      {
        name: 'Solapur',
        centerCoordinates: { lat: 17.6599, lng: 75.9064 },
        pincode: '413001',
        areas: [
          { area: 'Navi Peth / Saat Rasta', city: 'Solapur', state: 'Maharashtra', pincode: '413001', lat: 17.6599, lng: 75.9064, isPopular: true }
        ]
      }
    ],
    cities: []
  },

  // ==========================================
  // 📍 5. KARNATAKA (ALL MAJOR DISTRICTS)
  // ==========================================
  {
    name: 'Karnataka',
    code: 'KA',
    type: 'state',
    capital: 'Bengaluru',
    centerCoordinates: { lat: 12.9716, lng: 77.5946 },
    districts: [
      {
        name: 'Bengaluru Urban',
        centerCoordinates: { lat: 12.9716, lng: 77.5946 },
        pincode: '560001',
        areas: [
          { area: 'Koramangala 4th Block', city: 'Bengaluru', state: 'Karnataka', pincode: '560034', lat: 12.9352, lng: 77.6245, isPopular: true },
          { area: 'HSR Layout Sector 6', city: 'Bengaluru', state: 'Karnataka', pincode: '560102', lat: 12.9142, lng: 77.6385, isPopular: true },
          { area: 'Indiranagar 100ft Road', city: 'Bengaluru', state: 'Karnataka', pincode: '560038', lat: 12.9719, lng: 77.6412, isPopular: true },
          { area: 'BTM Layout 2nd Stage', city: 'Bengaluru', state: 'Karnataka', pincode: '560076', lat: 12.9165, lng: 77.6102, isPopular: true },
          { area: 'Jayanagar 4th Block', city: 'Bengaluru', state: 'Karnataka', pincode: '560011', lat: 12.9298, lng: 77.5841, isPopular: true },
          { area: 'Whitefield Main Road', city: 'Bengaluru', state: 'Karnataka', pincode: '560066', lat: 12.9698, lng: 77.7499, isPopular: true },
          { area: 'Electronic City Phase 1', city: 'Bengaluru', state: 'Karnataka', pincode: '560100', lat: 12.8450, lng: 77.6630, isPopular: true },
          { area: 'Malleshwaram 8th Cross', city: 'Bengaluru', state: 'Karnataka', pincode: '560003', lat: 13.0030, lng: 77.5710 }
        ]
      },
      {
        name: 'Mysuru',
        centerCoordinates: { lat: 12.3086, lng: 76.6496 },
        pincode: '570001',
        areas: [
          { area: 'Devaraja Urs Road', city: 'Mysuru', state: 'Karnataka', pincode: '570001', lat: 12.3086, lng: 76.6496, isPopular: true },
          { area: 'Jayalakshmipuram / Saraswathipuram', city: 'Mysuru', state: 'Karnataka', pincode: '570012', lat: 12.3210, lng: 76.6340 },
          { area: 'Gokulam 3rd Stage', city: 'Mysuru', state: 'Karnataka', pincode: '570002', lat: 12.3340, lng: 76.6210 }
        ]
      },
      {
        name: 'Dakshina Kannada (Mangaluru)',
        centerCoordinates: { lat: 12.8703, lng: 74.8431 },
        pincode: '575001',
        areas: [
          { area: 'Hampankatta / KS Rao Rd', city: 'Mangaluru', state: 'Karnataka', pincode: '575001', lat: 12.8703, lng: 74.8431, isPopular: true },
          { area: 'Kadri / MG Road', city: 'Mangaluru', state: 'Karnataka', pincode: '575002', lat: 12.8840, lng: 74.8560 }
        ]
      },
      {
        name: 'Hubballi-Dharwad',
        centerCoordinates: { lat: 15.3647, lng: 75.1240 },
        pincode: '580020',
        areas: [
          { area: 'CBT / Koppikar Road', city: 'Hubballi', state: 'Karnataka', pincode: '580020', lat: 15.3647, lng: 75.1240, isPopular: true },
          { area: 'Vidyanagar / Gokul Road', city: 'Hubballi', state: 'Karnataka', pincode: '580030', lat: 15.3780, lng: 75.1120 }
        ]
      },
      {
        name: 'Belagavi (Belgaum)',
        centerCoordinates: { lat: 15.8497, lng: 74.4977 },
        pincode: '590001',
        areas: [
          { area: 'Khade Bazar / College Road', city: 'Belagavi', state: 'Karnataka', pincode: '590001', lat: 15.8497, lng: 74.4977, isPopular: true }
        ]
      }
    ],
    cities: []
  },

  // ==========================================
  // 📍 6. WEST BENGAL
  // ==========================================
  {
    name: 'West Bengal',
    code: 'WB',
    type: 'state',
    capital: 'Kolkata',
    centerCoordinates: { lat: 22.9868, lng: 87.8550 },
    districts: [
      {
        name: 'Kolkata',
        centerCoordinates: { lat: 22.5726, lng: 88.3639 },
        pincode: '700001',
        areas: [
          { area: 'Park Street / Camac St', city: 'Kolkata', state: 'West Bengal', pincode: '700016', lat: 22.5511, lng: 88.3524, isPopular: true },
          { area: 'Salt Lake Sector 5 / City Centre', city: 'Kolkata', state: 'West Bengal', pincode: '700091', lat: 22.5768, lng: 88.4319, isPopular: true },
          { area: 'Gariahat Market / South City', city: 'Kolkata', state: 'West Bengal', pincode: '700019', lat: 22.5186, lng: 88.3653, isPopular: true },
          { area: 'New Town Action Area 1 & 2', city: 'Kolkata', state: 'West Bengal', pincode: '700156', lat: 22.5892, lng: 88.4732, isPopular: true },
          { area: 'Shyambazar Five Point Crossing', city: 'Kolkata', state: 'West Bengal', pincode: '700004', lat: 22.6040, lng: 88.3720 }
        ]
      },
      {
        name: 'Howrah',
        centerCoordinates: { lat: 22.5958, lng: 88.2636 },
        pincode: '711101',
        areas: [
          { area: 'Howrah Station / Mandirtala', city: 'Howrah', state: 'West Bengal', pincode: '711101', lat: 22.5890, lng: 88.3410, isPopular: true },
          { area: 'Kadamtala / Shibpur', city: 'Howrah', state: 'West Bengal', pincode: '711102', lat: 22.5750, lng: 88.3210 }
        ]
      },
      {
        name: 'Darjeeling (Siliguri)',
        centerCoordinates: { lat: 26.7271, lng: 88.4239 },
        pincode: '734001',
        areas: [
          { area: 'Hill Cart Road / Sevoke Rd', city: 'Siliguri', state: 'West Bengal', pincode: '734001', lat: 26.7271, lng: 88.4239, isPopular: true },
          { area: 'The Mall / Chowrasta', city: 'Darjeeling', state: 'West Bengal', pincode: '734101', lat: 27.0420, lng: 88.2660, isPopular: true }
        ]
      },
      {
        name: 'Paschim Bardhaman (Asansol / Durgapur)',
        centerCoordinates: { lat: 23.6889, lng: 86.9661 },
        pincode: '713301',
        areas: [
          { area: 'City Centre Durgapur', city: 'Durgapur', state: 'West Bengal', pincode: '713216', lat: 23.5350, lng: 87.2940, isPopular: true },
          { area: 'Hutton Road Asansol', city: 'Asansol', state: 'West Bengal', pincode: '713301', lat: 23.6889, lng: 86.9661, isPopular: true }
        ]
      }
    ],
    cities: []
  },

  // ==========================================
  // 📍 7. RAJASTHAN
  // ==========================================
  {
    name: 'Rajasthan',
    code: 'RJ',
    type: 'state',
    capital: 'Jaipur',
    centerCoordinates: { lat: 26.9124, lng: 75.7873 },
    districts: [
      {
        name: 'Jaipur',
        centerCoordinates: { lat: 26.9124, lng: 75.7873 },
        pincode: '302001',
        areas: [
          { area: 'MI Road / C-Scheme', city: 'Jaipur', state: 'Rajasthan', pincode: '302001', lat: 26.9124, lng: 75.7873, isPopular: true },
          { area: 'Malviya Nagar / Gaurav Tower', city: 'Jaipur', state: 'Rajasthan', pincode: '302017', lat: 26.8530, lng: 75.8052, isPopular: true },
          { area: 'Vaishali Nagar Amrapali Circle', city: 'Jaipur', state: 'Rajasthan', pincode: '302021', lat: 26.9068, lng: 75.7397, isPopular: true },
          { area: 'Mansarovar Metro Station Area', city: 'Jaipur', state: 'Rajasthan', pincode: '302020', lat: 26.8680, lng: 75.7650 }
        ]
      },
      {
        name: 'Jodhpur',
        centerCoordinates: { lat: 26.2389, lng: 73.0243 },
        pincode: '342001',
        areas: [
          { area: 'Sardarpura / C Road', city: 'Jodhpur', state: 'Rajasthan', pincode: '342003', lat: 26.2759, lng: 73.0135, isPopular: true },
          { area: 'Ratanada / Circuit House', city: 'Jodhpur', state: 'Rajasthan', pincode: '342011', lat: 26.2650, lng: 73.0420 }
        ]
      },
      {
        name: 'Udaipur',
        centerCoordinates: { lat: 24.5854, lng: 73.7125 },
        pincode: '313001',
        areas: [
          { area: 'Bapu Bazaar / Surajpole', city: 'Udaipur', state: 'Rajasthan', pincode: '313001', lat: 24.5854, lng: 73.7125, isPopular: true },
          { area: 'Fateh Sagar / Saheli Nagar', city: 'Udaipur', state: 'Rajasthan', pincode: '313004', lat: 24.6010, lng: 73.6820 }
        ]
      },
      {
        name: 'Kota',
        centerCoordinates: { lat: 25.2138, lng: 75.8648 },
        pincode: '324005',
        areas: [
          { area: 'Vigyan Nagar / Talwandi Coaching Hub', city: 'Kota', state: 'Rajasthan', pincode: '324005', lat: 25.1480, lng: 75.8340, isPopular: true },
          { area: 'Gumanpura / Shopping Centre', city: 'Kota', state: 'Rajasthan', pincode: '324007', lat: 25.1780, lng: 75.8450 }
        ]
      }
    ],
    cities: []
  },

  // ==========================================
  // 📍 8. GUJARAT
  // ==========================================
  {
    name: 'Gujarat',
    code: 'GJ',
    type: 'state',
    capital: 'Gandhinagar',
    centerCoordinates: { lat: 23.0225, lng: 72.5714 },
    districts: [
      {
        name: 'Ahmedabad',
        centerCoordinates: { lat: 23.0225, lng: 72.5714 },
        pincode: '380001',
        areas: [
          { area: 'SG Highway / Bodakdev', city: 'Ahmedabad', state: 'Gujarat', pincode: '380054', lat: 23.0373, lng: 72.5118, isPopular: true },
          { area: 'CG Road / Navrangpura', city: 'Ahmedabad', state: 'Gujarat', pincode: '380009', lat: 23.0338, lng: 72.5562, isPopular: true },
          { area: 'Prahlad Nagar / Satellite', city: 'Ahmedabad', state: 'Gujarat', pincode: '380015', lat: 23.0120, lng: 72.5080 },
          { area: 'Maninagar / Kankaria Lake', city: 'Ahmedabad', state: 'Gujarat', pincode: '380008', lat: 22.9980, lng: 72.6020 }
        ]
      },
      {
        name: 'Surat',
        centerCoordinates: { lat: 21.1702, lng: 72.8311 },
        pincode: '395001',
        areas: [
          { area: 'Ghod Dod Road / Athwa Lines', city: 'Surat', state: 'Gujarat', pincode: '395007', lat: 21.1738, lng: 72.8028, isPopular: true },
          { area: 'Varachha Diamond & Textile Hub', city: 'Surat', state: 'Gujarat', pincode: '395006', lat: 21.2180, lng: 72.8590, isPopular: true },
          { area: 'Vesu VIP Road', city: 'Surat', state: 'Gujarat', pincode: '395007', lat: 21.1340, lng: 72.7780 }
        ]
      },
      {
        name: 'Vadodara (Baroda)',
        centerCoordinates: { lat: 22.3072, lng: 73.1812 },
        pincode: '390001',
        areas: [
          { area: 'Alkapuri / RC Dutt Road', city: 'Vadodara', state: 'Gujarat', pincode: '390007', lat: 22.3072, lng: 73.1812, isPopular: true },
          { area: 'Sayajigunj / Mandvi Bazaar', city: 'Vadodara', state: 'Gujarat', pincode: '390005', lat: 22.3120, lng: 73.1950 }
        ]
      },
      {
        name: 'Rajkot',
        centerCoordinates: { lat: 22.3039, lng: 70.8022 },
        pincode: '360001',
        areas: [
          { area: 'Yagnik Road / Kalawad Road', city: 'Rajkot', state: 'Gujarat', pincode: '360001', lat: 22.3039, lng: 70.8022, isPopular: true }
        ]
      }
    ],
    cities: []
  },

  // ==========================================
  // 📍 9. MADHYA PRADESH
  // ==========================================
  {
    name: 'Madhya Pradesh',
    code: 'MP',
    type: 'state',
    capital: 'Bhopal',
    centerCoordinates: { lat: 23.2599, lng: 77.4126 },
    districts: [
      {
        name: 'Indore',
        centerCoordinates: { lat: 22.7196, lng: 75.8577 },
        pincode: '452001',
        areas: [
          { area: '56 Dukan / New Palasia', city: 'Indore', state: 'Madhya Pradesh', pincode: '452001', lat: 22.7244, lng: 75.8839, isPopular: true },
          { area: 'Vijay Nagar / Scheme 54', city: 'Indore', state: 'Madhya Pradesh', pincode: '452010', lat: 22.7533, lng: 75.8937, isPopular: true },
          { area: 'Sarafa Bazaar / Rajwada', city: 'Indore', state: 'Madhya Pradesh', pincode: '452002', lat: 22.7180, lng: 75.8520 }
        ]
      },
      {
        name: 'Bhopal',
        centerCoordinates: { lat: 23.2599, lng: 77.4126 },
        pincode: '462001',
        areas: [
          { area: 'MP Nagar Zone 1 & 2', city: 'Bhopal', state: 'Madhya Pradesh', pincode: '462011', lat: 23.2332, lng: 77.4343, isPopular: true },
          { area: 'New Market / TT Nagar', city: 'Bhopal', state: 'Madhya Pradesh', pincode: '462003', lat: 23.2376, lng: 77.4011, isPopular: true },
          { area: 'Arera Colony / Bittan Market', city: 'Bhopal', state: 'Madhya Pradesh', pincode: '462016', lat: 23.2120, lng: 77.4280 }
        ]
      },
      {
        name: 'Jabalpur',
        centerCoordinates: { lat: 23.1815, lng: 79.9864 },
        pincode: '482001',
        areas: [
          { area: 'Civic Centre / Russell Chowk', city: 'Jabalpur', state: 'Madhya Pradesh', pincode: '482002', lat: 23.1815, lng: 79.9864, isPopular: true }
        ]
      },
      {
        name: 'Gwalior',
        centerCoordinates: { lat: 26.2183, lng: 78.1828 },
        pincode: '474001',
        areas: [
          { area: 'Lashkar / Maharaj Bada', city: 'Gwalior', state: 'Madhya Pradesh', pincode: '474001', lat: 26.2183, lng: 78.1828, isPopular: true }
        ]
      }
    ],
    cities: []
  },

  // ==========================================
  // 📍 10. JHARKHAND (ALL MAJOR DISTRICTS)
  // ==========================================
  {
    name: 'Jharkhand',
    code: 'JH',
    type: 'state',
    capital: 'Ranchi',
    centerCoordinates: { lat: 23.3441, lng: 85.3096 },
    districts: [
      {
        name: 'Ranchi',
        centerCoordinates: { lat: 23.3441, lng: 85.3096 },
        pincode: '834001',
        areas: [
          { area: 'Main Road / Albert Ekka Chowk', city: 'Ranchi', state: 'Jharkhand', pincode: '834001', lat: 23.3700, lng: 85.3250, isPopular: true },
          { area: 'Lalpur Chowk / Circular Road', city: 'Ranchi', state: 'Jharkhand', pincode: '834001', lat: 23.3761, lng: 85.3353, isPopular: true },
          { area: 'Doranda / Hinoo', city: 'Ranchi', state: 'Jharkhand', pincode: '834002', lat: 23.3320, lng: 85.3180 },
          { area: 'Kanke Road / Morabadi Ground', city: 'Ranchi', state: 'Jharkhand', pincode: '834008', lat: 23.3980, lng: 85.3150 }
        ]
      },
      {
        name: 'East Singhbhum (Jamshedpur)',
        centerCoordinates: { lat: 22.8046, lng: 86.2029 },
        pincode: '831001',
        areas: [
          { area: 'Bistupur Main Market', city: 'Jamshedpur', state: 'Jharkhand', pincode: '831001', lat: 22.7925, lng: 86.1764, isPopular: true },
          { area: 'Sakchi Market / Jubilee Park Area', city: 'Jamshedpur', state: 'Jharkhand', pincode: '831001', lat: 22.8120, lng: 86.2040, isPopular: true },
          { area: 'Telco Colony / Golmuri', city: 'Jamshedpur', state: 'Jharkhand', pincode: '831004', lat: 22.7780, lng: 86.2540 }
        ]
      },
      {
        name: 'Dhanbad',
        centerCoordinates: { lat: 23.7957, lng: 86.4304 },
        pincode: '826001',
        areas: [
          { area: 'Bank More / Hirapur', city: 'Dhanbad', state: 'Jharkhand', pincode: '826001', lat: 23.7957, lng: 86.4304, isPopular: true },
          { area: 'Saraidhela / Steel Gate', city: 'Dhanbad', state: 'Jharkhand', pincode: '828127', lat: 23.8120, lng: 86.4520 }
        ]
      },
      {
        name: 'Bokaro',
        centerCoordinates: { lat: 23.6693, lng: 86.1511 },
        pincode: '827001',
        areas: [
          { area: 'City Centre Sector 4', city: 'Bokaro', state: 'Jharkhand', pincode: '827004', lat: 23.6693, lng: 86.1511, isPopular: true }
        ]
      },
      {
        name: 'Deoghar',
        centerCoordinates: { lat: 24.4826, lng: 86.7000 },
        pincode: '814112',
        areas: [
          { area: 'Baba Baidyanath Dham Market', city: 'Deoghar', state: 'Jharkhand', pincode: '814112', lat: 24.4826, lng: 86.7000, isPopular: true },
          { area: 'Tower Chowk / Jasidih Station', city: 'Deoghar', state: 'Jharkhand', pincode: '814142', lat: 24.5180, lng: 86.6450 }
        ]
      }
    ],
    cities: []
  },

  // ==========================================
  // 📍 11. TELANGANA
  // ==========================================
  {
    name: 'Telangana',
    code: 'TS',
    type: 'state',
    capital: 'Hyderabad',
    centerCoordinates: { lat: 17.3850, lng: 78.4867 },
    districts: [
      {
        name: 'Hyderabad',
        centerCoordinates: { lat: 17.3850, lng: 78.4867 },
        pincode: '500001',
        areas: [
          { area: 'Banjara Hills Road No 12', city: 'Hyderabad', state: 'Telangana', pincode: '500034', lat: 17.4156, lng: 78.4357, isPopular: true },
          { area: 'Hitec City / Madhapur', city: 'Hyderabad', state: 'Telangana', pincode: '500081', lat: 17.4483, lng: 78.3915, isPopular: true },
          { area: 'Jubilee Hills Road No 36', city: 'Hyderabad', state: 'Telangana', pincode: '500033', lat: 17.4319, lng: 78.4073, isPopular: true },
          { area: 'Kukatpally / KPHB Colony', city: 'Hyderabad', state: 'Telangana', pincode: '500072', lat: 17.4938, lng: 78.3995, isPopular: true },
          { area: 'Secunderabad / MG Road', city: 'Hyderabad', state: 'Telangana', pincode: '500003', lat: 17.4399, lng: 78.4983 },
          { area: 'Gachibowli Financial District', city: 'Hyderabad', state: 'Telangana', pincode: '500032', lat: 17.4400, lng: 78.3480 }
        ]
      },
      {
        name: 'Warangal',
        centerCoordinates: { lat: 17.9689, lng: 79.5941 },
        pincode: '506002',
        areas: [
          { area: 'Hanamkonda / Nakkalagutta', city: 'Warangal', state: 'Telangana', pincode: '506001', lat: 17.9980, lng: 79.5680, isPopular: true }
        ]
      }
    ],
    cities: []
  },

  // ==========================================
  // 📍 12. TAMIL NADU
  // ==========================================
  {
    name: 'Tamil Nadu',
    code: 'TN',
    type: 'state',
    capital: 'Chennai',
    centerCoordinates: { lat: 13.0827, lng: 80.2707 },
    districts: [
      {
        name: 'Chennai',
        centerCoordinates: { lat: 13.0827, lng: 80.2707 },
        pincode: '600001',
        areas: [
          { area: 'T. Nagar (Pondy Bazaar)', city: 'Chennai', state: 'Tamil Nadu', pincode: '600017', lat: 13.0418, lng: 80.2341, isPopular: true },
          { area: 'Anna Nagar (2nd Avenue)', city: 'Chennai', state: 'Tamil Nadu', pincode: '600040', lat: 13.0850, lng: 80.2101, isPopular: true },
          { area: 'Velachery 100ft Road', city: 'Chennai', state: 'Tamil Nadu', pincode: '600042', lat: 12.9756, lng: 80.2206, isPopular: true },
          { area: 'Adyar / Besant Nagar Beach', city: 'Chennai', state: 'Tamil Nadu', pincode: '600020', lat: 13.0012, lng: 80.2565 }
        ]
      },
      {
        name: 'Coimbatore',
        centerCoordinates: { lat: 11.0168, lng: 76.9558 },
        pincode: '641001',
        areas: [
          { area: 'RS Puram (DB Road)', city: 'Coimbatore', state: 'Tamil Nadu', pincode: '641002', lat: 11.0118, lng: 76.9458, isPopular: true },
          { area: 'Gandhipuram Cross Cut Road', city: 'Coimbatore', state: 'Tamil Nadu', pincode: '641012', lat: 11.0180, lng: 76.9680 }
        ]
      },
      {
        name: 'Madurai',
        centerCoordinates: { lat: 9.9252, lng: 78.1198 },
        pincode: '625001',
        areas: [
          { area: 'Meenakshi Amman Temple / West Tower St', city: 'Madurai', state: 'Tamil Nadu', pincode: '625001', lat: 9.9252, lng: 78.1198, isPopular: true }
        ]
      }
    ],
    cities: []
  },

  // ==========================================
  // 📍 13. PUNJAB
  // ==========================================
  {
    name: 'Punjab',
    code: 'PB',
    type: 'state',
    capital: 'Chandigarh',
    centerCoordinates: { lat: 31.1471, lng: 75.3412 },
    districts: [
      {
        name: 'Ludhiana',
        centerCoordinates: { lat: 30.9010, lng: 75.8573 },
        pincode: '141001',
        areas: [
          { area: 'Model Town / Ghumar Mandi', city: 'Ludhiana', state: 'Punjab', pincode: '141002', lat: 30.8987, lng: 75.8278, isPopular: true },
          { area: 'Ferozepur Road (MBD Mall)', city: 'Ludhiana', state: 'Punjab', pincode: '141012', lat: 30.8920, lng: 75.8120 }
        ]
      },
      {
        name: 'Amritsar',
        centerCoordinates: { lat: 31.6340, lng: 74.8723 },
        pincode: '143001',
        areas: [
          { area: 'Golden Temple Heritage Street', city: 'Amritsar', state: 'Punjab', pincode: '143001', lat: 31.6200, lng: 74.8765, isPopular: true },
          { area: 'Mall Road / Lawrence Road', city: 'Amritsar', state: 'Punjab', pincode: '143001', lat: 31.6340, lng: 74.8723, isPopular: true }
        ]
      },
      {
        name: 'Jalandhar',
        centerCoordinates: { lat: 31.3260, lng: 75.5762 },
        pincode: '144001',
        areas: [
          { area: 'Model Town Market / BMC Chowk', city: 'Jalandhar', state: 'Punjab', pincode: '144003', lat: 31.3260, lng: 75.5762, isPopular: true }
        ]
      }
    ],
    cities: []
  },

  // ==========================================
  // 📍 14. HARYANA
  // ==========================================
  {
    name: 'Haryana',
    code: 'HR',
    type: 'state',
    capital: 'Chandigarh',
    centerCoordinates: { lat: 29.0588, lng: 76.0856 },
    districts: [
      {
        name: 'Gurugram',
        centerCoordinates: { lat: 28.4595, lng: 77.0266 },
        pincode: '122001',
        areas: [
          { area: 'Cyber City / DLF Phase 2', city: 'Gurugram', state: 'Haryana', pincode: '122002', lat: 28.4907, lng: 77.0882, isPopular: true },
          { area: 'Golf Course Road / Sector 54', city: 'Gurugram', state: 'Haryana', pincode: '122011', lat: 28.4412, lng: 77.1065, isPopular: true },
          { area: 'Sector 29 Market & Leisure Valley', city: 'Gurugram', state: 'Haryana', pincode: '122001', lat: 28.4680, lng: 77.0630, isPopular: true },
          { area: 'Sohna Road / Subhash Chowk', city: 'Gurugram', state: 'Haryana', pincode: '122018', lat: 28.4230, lng: 77.0390 }
        ]
      },
      {
        name: 'Faridabad',
        centerCoordinates: { lat: 28.4089, lng: 77.3178 },
        pincode: '121001',
        areas: [
          { area: 'Sector 15 / Crown Plaza Market', city: 'Faridabad', state: 'Haryana', pincode: '121007', lat: 28.4089, lng: 77.3178, isPopular: true }
        ]
      }
    ],
    cities: []
  },

  // ==========================================
  // 📍 15. CHANDIGARH (UT)
  // ==========================================
  {
    name: 'Chandigarh',
    code: 'CH',
    type: 'ut',
    capital: 'Chandigarh',
    centerCoordinates: { lat: 30.7333, lng: 76.7794 },
    districts: [
      {
        name: 'Chandigarh',
        centerCoordinates: { lat: 30.7333, lng: 76.7794 },
        pincode: '160017',
        areas: [
          { area: 'Sector 17 Plaza', city: 'Chandigarh', state: 'Chandigarh', pincode: '160017', lat: 30.7398, lng: 76.7827, isPopular: true },
          { area: 'Sector 35 Inner Market', city: 'Chandigarh', state: 'Chandigarh', pincode: '160035', lat: 30.7229, lng: 76.7644, isPopular: true },
          { area: 'Elante Mall / Industrial Area Phase 1', city: 'Chandigarh', state: 'Chandigarh', pincode: '160002', lat: 30.7050, lng: 76.8010, isPopular: true }
        ]
      }
    ],
    cities: []
  },

  // ==========================================
  // 📍 16. ODISHA
  // ==========================================
  {
    name: 'Odisha',
    code: 'OD',
    type: 'state',
    capital: 'Bhubaneswar',
    centerCoordinates: { lat: 20.9517, lng: 85.0985 },
    districts: [
      {
        name: 'Khordha (Bhubaneswar)',
        centerCoordinates: { lat: 20.2961, lng: 85.8245 },
        pincode: '751001',
        areas: [
          { area: 'Janpath / Saheed Nagar', city: 'Bhubaneswar', state: 'Odisha', pincode: '751007', lat: 20.2961, lng: 85.8428, isPopular: true },
          { area: 'Patia / Infocity', city: 'Bhubaneswar', state: 'Odisha', pincode: '751024', lat: 20.3541, lng: 85.8190, isPopular: true }
        ]
      },
      {
        name: 'Cuttack',
        centerCoordinates: { lat: 20.4625, lng: 85.8828 },
        pincode: '753001',
        areas: [
          { area: 'Choudhury Bazar / Buxi Bazar', city: 'Cuttack', state: 'Odisha', pincode: '753001', lat: 20.4625, lng: 85.8828, isPopular: true }
        ]
      },
      {
        name: 'Puri',
        centerCoordinates: { lat: 19.8135, lng: 85.8312 },
        pincode: '752001',
        areas: [
          { area: 'Grand Road (Bada Danda) / Jagannath Temple', city: 'Puri', state: 'Odisha', pincode: '752001', lat: 19.8135, lng: 85.8312, isPopular: true }
        ]
      }
    ],
    cities: []
  },

  // ==========================================
  // 📍 17. ASSAM
  // ==========================================
  {
    name: 'Assam',
    code: 'AS',
    type: 'state',
    capital: 'Dispur',
    centerCoordinates: { lat: 26.1445, lng: 91.7362 },
    districts: [
      {
        name: 'Kamrup Metropolitan (Guwahati)',
        centerCoordinates: { lat: 26.1445, lng: 91.7362 },
        pincode: '781001',
        areas: [
          { area: 'GS Road / Christian Basti', city: 'Guwahati', state: 'Assam', pincode: '781005', lat: 26.1584, lng: 91.7770, isPopular: true },
          { area: 'Fancy Bazaar', city: 'Guwahati', state: 'Assam', pincode: '781001', lat: 26.1834, lng: 91.7428, isPopular: true },
          { area: 'Paltan Bazaar / Station Road', city: 'Guwahati', state: 'Assam', pincode: '781008', lat: 26.1780, lng: 71.7490 }
        ]
      },
      {
        name: 'Dibrugarh',
        centerCoordinates: { lat: 27.4728, lng: 94.9120 },
        pincode: '786001',
        areas: [
          { area: 'Thana Chariali / RKB Path', city: 'Dibrugarh', state: 'Assam', pincode: '786001', lat: 27.4728, lng: 94.9120, isPopular: true }
        ]
      }
    ],
    cities: []
  },

  // ==========================================
  // 📍 18. KERALA
  // ==========================================
  {
    name: 'Kerala',
    code: 'KL',
    type: 'state',
    capital: 'Thiruvananthapuram',
    centerCoordinates: { lat: 10.8505, lng: 76.2711 },
    districts: [
      {
        name: 'Ernakulam (Kochi)',
        centerCoordinates: { lat: 9.9816, lng: 76.2764 },
        pincode: '682011',
        areas: [
          { area: 'MG Road / Marine Drive', city: 'Kochi (Cochin)', state: 'Kerala', pincode: '682011', lat: 9.9816, lng: 76.2764, isPopular: true },
          { area: 'Edappally / Lulu Mall Hub', city: 'Kochi (Cochin)', state: 'Kerala', pincode: '682024', lat: 10.0261, lng: 76.3125, isPopular: true }
        ]
      },
      {
        name: 'Thiruvananthapuram (Trivandrum)',
        centerCoordinates: { lat: 8.5241, lng: 76.9366 },
        pincode: '695001',
        areas: [
          { area: 'MG Road / Statue Junction', city: 'Thiruvananthapuram', state: 'Kerala', pincode: '695001', lat: 8.5241, lng: 76.9366, isPopular: true }
        ]
      }
    ],
    cities: []
  },

  // ==========================================
  // 📍 19. UTTARAKHAND
  // ==========================================
  {
    name: 'Uttarakhand',
    code: 'UK',
    type: 'state',
    capital: 'Dehradun',
    centerCoordinates: { lat: 30.0668, lng: 79.0193 },
    districts: [
      {
        name: 'Dehradun',
        centerCoordinates: { lat: 30.3165, lng: 78.0322 },
        pincode: '248001',
        areas: [
          { area: 'Rajpur Road / Astley Hall', city: 'Dehradun', state: 'Uttarakhand', pincode: '248001', lat: 30.3256, lng: 78.0437, isPopular: true },
          { area: 'Paltan Bazaar / Clock Tower', city: 'Dehradun', state: 'Uttarakhand', pincode: '248001', lat: 30.3210, lng: 78.0390 }
        ]
      },
      {
        name: 'Haridwar',
        centerCoordinates: { lat: 29.9457, lng: 78.1642 },
        pincode: '249401',
        areas: [
          { area: 'Har Ki Pauri / Bada Bazar', city: 'Haridwar', state: 'Uttarakhand', pincode: '249401', lat: 29.9567, lng: 78.1700, isPopular: true }
        ]
      },
      {
        name: 'Nainital (Haldwani)',
        centerCoordinates: { lat: 29.2183, lng: 79.5130 },
        pincode: '263139',
        areas: [
          { area: 'Nainital Road / Tikonia Chowk', city: 'Haldwani', state: 'Uttarakhand', pincode: '263139', lat: 29.2183, lng: 79.5130, isPopular: true }
        ]
      }
    ],
    cities: []
  },

  // ==========================================
  // 📍 20. HIMACHAL PRADESH
  // ==========================================
  {
    name: 'Himachal Pradesh',
    code: 'HP',
    type: 'state',
    capital: 'Shimla',
    centerCoordinates: { lat: 31.1048, lng: 77.1734 },
    districts: [
      {
        name: 'Shimla',
        centerCoordinates: { lat: 31.1048, lng: 77.1734 },
        pincode: '171001',
        areas: [
          { area: 'The Mall Road / Ridge', city: 'Shimla', state: 'Himachal Pradesh', pincode: '171001', lat: 31.1048, lng: 77.1734, isPopular: true }
        ]
      },
      {
        name: 'Kangra (Dharamshala)',
        centerCoordinates: { lat: 32.2190, lng: 76.3234 },
        pincode: '176215',
        areas: [
          { area: 'McLeod Ganj Main Square', city: 'Dharamshala', state: 'Himachal Pradesh', pincode: '176219', lat: 32.2426, lng: 76.3213, isPopular: true }
        ]
      }
    ],
    cities: []
  },

  // ==========================================
  // 📍 21. CHHATTISGARH
  // ==========================================
  {
    name: 'Chhattisgarh',
    code: 'CG',
    type: 'state',
    capital: 'Raipur',
    centerCoordinates: { lat: 21.2514, lng: 81.6296 },
    districts: [
      {
        name: 'Raipur',
        centerCoordinates: { lat: 21.2514, lng: 81.6296 },
        pincode: '492001',
        areas: [
          { area: 'Pandri Cloth Market', city: 'Raipur', state: 'Chhattisgarh', pincode: '492004', lat: 21.2566, lng: 81.6441, isPopular: true },
          { area: 'Telibandha / Marine Drive', city: 'Raipur', state: 'Chhattisgarh', pincode: '492006', lat: 21.2372, lng: 81.6667, isPopular: true }
        ]
      },
      {
        name: 'Durg (Bhilai)',
        centerCoordinates: { lat: 21.1938, lng: 81.3509 },
        pincode: '490006',
        areas: [
          { area: 'Civic Centre Sector 6', city: 'Bhilai', state: 'Chhattisgarh', pincode: '490006', lat: 21.1938, lng: 81.3509, isPopular: true }
        ]
      },
      {
        name: 'Bilaspur',
        centerCoordinates: { lat: 22.0797, lng: 82.1409 },
        pincode: '495001',
        areas: [
          { area: 'Vyapar Vihar / Link Road', city: 'Bilaspur', state: 'Chhattisgarh', pincode: '495001', lat: 22.0797, lng: 82.1409, isPopular: true }
        ]
      }
    ],
    cities: []
  },

  // ==========================================
  // 📍 22. JAMMU & KASHMIR
  // ==========================================
  {
    name: 'Jammu & Kashmir',
    code: 'JK',
    type: 'ut',
    capital: 'Srinagar / Jammu',
    centerCoordinates: { lat: 33.7782, lng: 76.5762 },
    districts: [
      {
        name: 'Srinagar',
        centerCoordinates: { lat: 34.0837, lng: 74.7973 },
        pincode: '190001',
        areas: [
          { area: 'Lal Chowk / Residency Road', city: 'Srinagar', state: 'Jammu & Kashmir', pincode: '190001', lat: 34.0725, lng: 74.8086, isPopular: true }
        ]
      },
      {
        name: 'Jammu',
        centerCoordinates: { lat: 32.7266, lng: 74.8570 },
        pincode: '180001',
        areas: [
          { area: 'Raghunath Bazaar / Gandhi Nagar', city: 'Jammu', state: 'Jammu & Kashmir', pincode: '180001', lat: 32.7326, lng: 74.8643, isPopular: true }
        ]
      }
    ],
    cities: []
  },

  // ==========================================
  // 📍 23. GOA
  // ==========================================
  {
    name: 'Goa',
    code: 'GA',
    type: 'state',
    capital: 'Panaji',
    centerCoordinates: { lat: 15.2993, lng: 74.1240 },
    districts: [
      {
        name: 'North Goa',
        centerCoordinates: { lat: 15.4989, lng: 73.8278 },
        pincode: '403001',
        areas: [
          { area: 'MG Road / Fontainhas', city: 'Panaji', state: 'Goa', pincode: '403001', lat: 15.4989, lng: 73.8278, isPopular: true },
          { area: 'Calangute Market Square', city: 'North Goa', state: 'Goa', pincode: '403516', lat: 15.5439, lng: 73.7553, isPopular: true }
        ]
      },
      {
        name: 'South Goa',
        centerCoordinates: { lat: 15.2736, lng: 73.9582 },
        pincode: '403601',
        areas: [
          { area: 'Margao Municipal Garden & Market', city: 'Margao', state: 'Goa', pincode: '403601', lat: 15.2736, lng: 73.9582, isPopular: true }
        ]
      }
    ],
    cities: []
  },

  // ==========================================
  // 📍 24. ANDHRA PRADESH
  // ==========================================
  {
    name: 'Andhra Pradesh',
    code: 'AP',
    type: 'state',
    capital: 'Amaravati',
    centerCoordinates: { lat: 15.9129, lng: 79.7400 },
    districts: [
      {
        name: 'NTR (Vijayawada)',
        centerCoordinates: { lat: 16.5062, lng: 80.6480 },
        pincode: '520001',
        areas: [
          { area: 'Benz Circle / MG Road', city: 'Vijayawada', state: 'Andhra Pradesh', pincode: '520010', lat: 16.5062, lng: 80.6480, isPopular: true }
        ]
      },
      {
        name: 'Visakhapatnam',
        centerCoordinates: { lat: 17.6868, lng: 83.2185 },
        pincode: '530001',
        areas: [
          { area: 'Dwaraka Nagar / Jagadamba', city: 'Visakhapatnam', state: 'Andhra Pradesh', pincode: '530016', lat: 17.7289, lng: 83.3086, isPopular: true }
        ]
      },
      {
        name: 'Tirupati',
        centerCoordinates: { lat: 13.6288, lng: 79.4192 },
        pincode: '517501',
        areas: [
          { area: 'Alipiri Road / Gandhi Road', city: 'Tirupati', state: 'Andhra Pradesh', pincode: '517501', lat: 13.6288, lng: 79.4192, isPopular: true }
        ]
      }
    ],
    cities: []
  }
];

// Automatically populate the flattened cities array for every state
INDIAN_STATES_DATA.forEach(state => {
  const allAreas: IndianCityArea[] = [];
  state.districts.forEach(d => {
    d.areas.forEach(a => allAreas.push(a));
  });
  state.cities = allAreas;
});

// Flat list of popular locations for fast select
export const POPULAR_INDIAN_HUBS: IndianCityArea[] = [
  { area: 'Jamui Main Market / Maharajganj', city: 'Jamui', state: 'Bihar', pincode: '811307', lat: 24.9272, lng: 86.2238, isPopular: true },
  { area: 'Bodhban Talab / Station Road', city: 'Jamui', state: 'Bihar', pincode: '811307', lat: 24.9315, lng: 86.2280, isPopular: true },
  { area: 'Jhajha Main Market', city: 'Jamui', state: 'Bihar', pincode: '811308', lat: 24.7731, lng: 86.3812, isPopular: true },
  { area: 'Boring Road Chauraha', city: 'Patna', state: 'Bihar', pincode: '800001', lat: 25.6174, lng: 85.1189, isPopular: true },
  { area: 'GB Road / Tower Chowk', city: 'Gaya', state: 'Bihar', pincode: '823001', lat: 24.7914, lng: 85.0002, isPopular: true },
  { area: 'Motijheel Market', city: 'Muzaffarpur', state: 'Bihar', pincode: '842001', lat: 26.1209, lng: 85.3647, isPopular: true },
  { area: 'Purani Bazaar Main Market', city: 'Lakhisarai', state: 'Bihar', pincode: '811311', lat: 25.1780, lng: 86.0940, isPopular: true },
  { area: 'Rajiv Gandhi Chowk', city: 'Munger', state: 'Bihar', pincode: '811201', lat: 25.3750, lng: 86.4740, isPopular: true },
  { area: 'Traffic Chowk', city: 'Begusarai', state: 'Bihar', pincode: '851101', lat: 25.4182, lng: 86.1272, isPopular: true },
  { area: 'Connaught Place (CP)', city: 'New Delhi', state: 'Delhi (NCR)', pincode: '110001', lat: 28.6315, lng: 77.2167, isPopular: true },
  { area: 'Bandra West (Linking Rd)', city: 'Mumbai', state: 'Maharashtra', pincode: '400050', lat: 19.0596, lng: 72.8295, isPopular: true },
  { area: 'Koramangala 4th Block', city: 'Bengaluru', state: 'Karnataka', pincode: '560034', lat: 12.9352, lng: 77.6245, isPopular: true },
  { area: 'Hazratganj / MG Marg', city: 'Lucknow', state: 'Uttar Pradesh', pincode: '226001', lat: 26.8530, lng: 80.9462, isPopular: true },
  { area: 'Banjara Hills / Hitec City', city: 'Hyderabad', state: 'Telangana', pincode: '500034', lat: 17.4156, lng: 78.4357, isPopular: true },
  { area: 'Park Street / Camac St', city: 'Kolkata', state: 'West Bengal', pincode: '700016', lat: 22.5511, lng: 88.3524, isPopular: true },
  { area: 'SG Highway / Bodakdev', city: 'Ahmedabad', state: 'Gujarat', pincode: '380054', lat: 23.0373, lng: 72.5118, isPopular: true },
  { area: 'FC Road / Deccan', city: 'Pune', state: 'Maharashtra', pincode: '411004', lat: 18.5204, lng: 73.8427, isPopular: true },
  { area: 'MI Road / C-Scheme', city: 'Jaipur', state: 'Rajasthan', pincode: '302001', lat: 26.9124, lng: 75.7873, isPopular: true }
];

// Helper: Get all states sorted
export const getAllIndianStates = (): IndianState[] => {
  return [...INDIAN_STATES_DATA].sort((a, b) => a.name.localeCompare(b.name));
};

// Helper: Get districts for a given state
export const getDistrictsForState = (stateName: string): IndianDistrict[] => {
  const st = INDIAN_STATES_DATA.find(
    s => s.name.toLowerCase() === stateName.toLowerCase() || s.code.toLowerCase() === stateName.toLowerCase()
  );
  return st ? st.districts : [];
};

// Helper: Get areas for a given district
export const getAreasForDistrict = (stateName: string, districtName: string): IndianCityArea[] => {
  const districts = getDistrictsForState(stateName);
  const dist = districts.find(d => d.name.toLowerCase() === districtName.toLowerCase());
  return dist ? dist.areas : [];
};

// Helper: Get cities by state
export const getCitiesByState = (stateName: string): IndianCityArea[] => {
  const st = INDIAN_STATES_DATA.find(
    s => s.name.toLowerCase() === stateName.toLowerCase() || s.code.toLowerCase() === stateName.toLowerCase()
  );
  return st ? st.cities : [];
};

// Helper: Search across states, districts, cities, areas, and pincodes
export const searchIndianLocations = (query: string): IndianCityArea[] => {
  if (!query || query.trim().length === 0) return POPULAR_INDIAN_HUBS;
  const q = query.toLowerCase().trim();

  const results: IndianCityArea[] = [];

  for (const state of INDIAN_STATES_DATA) {
    const isStateMatch = state.name.toLowerCase().includes(q) || state.code.toLowerCase() === q;
    
    for (const district of state.districts) {
      const isDistrictMatch = district.name.toLowerCase().includes(q);

      for (const cityArea of district.areas) {
        if (
          isStateMatch ||
          isDistrictMatch ||
          cityArea.area.toLowerCase().includes(q) ||
          cityArea.city.toLowerCase().includes(q) ||
          cityArea.state.toLowerCase().includes(q) ||
          cityArea.pincode.includes(q)
        ) {
          results.push(cityArea);
        }
      }
    }
  }

  return results.slice(0, 40);
};

// Helper: Calculate Haversine distance in KM
const haversineDistKm = (lat1: number, lon1: number, lat2: number, lon2: number): number => {
  const R = 6371;
  const dLat = (lat2 - lat1) * (Math.PI / 180);
  const dLon = (lon2 - lon1) * (Math.PI / 180);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1 * (Math.PI / 180)) *
      Math.cos(lat2 * (Math.PI / 180)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
};

// Helper: Find closest Indian city from lat, lng coordinates
export const findNearestIndianCity = (lat: number, lng: number): IndianCityArea => {
  let closest = POPULAR_INDIAN_HUBS[0];
  let minDistance = Infinity;

  for (const state of INDIAN_STATES_DATA) {
    for (const city of state.cities) {
      const dist = haversineDistKm(lat, lng, city.lat, city.lng);
      if (dist < minDistance) {
        minDistance = dist;
        closest = city;
      }
    }
  }

  return closest;
};
