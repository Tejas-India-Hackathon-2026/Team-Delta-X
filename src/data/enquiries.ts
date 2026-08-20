import { Enquiry } from '../types';

export const INITIAL_ENQUIRIES: Enquiry[] = [
  {
    id: 'enq-01',
    storeId: 'store-sharma-auto',
    storeName: 'Sharma Auto Parts & Spares',
    customerId: 'cust-1',
    customerName: 'Karthik Rao',
    customerPhone: '+91 98451 09876',
    customerMessage: 'Hi Sharma Ji, is the Honda Shine front disc brake pad original Honda packing or Endurance OEM? Can you keep 1 set reserved for pickup today by 6 PM?',
    productId: 'prod-honda-shine-brakepad',
    productName: 'Honda Shine Front Disc Brake Pad (Genuine OEM)',
    productPrice: 420,
    createdAt: '15 mins ago',
    status: 'new'
  },
  {
    id: 'enq-02',
    storeId: 'store-sharma-auto',
    storeName: 'Sharma Auto Parts & Spares',
    customerId: 'cust-2',
    customerName: 'Deepak Mohan',
    customerPhone: '+91 97412 88771',
    customerMessage: 'Do you also have Castrol Power1 15W-50 for Royal Enfield Classic 350? What is the best price for 2.5L?',
    productId: 'prod-castrol-power1-oil',
    productName: 'Castrol POWER1 4T 10W-30 Synthetic Bike Engine Oil 1L',
    productPrice: 460,
    createdAt: '2 hours ago',
    status: 'replied',
    replyMessage: 'Yes Deepak Ji, we have Castrol Power1 Cruise 15W-50 2.5L can in stock at ₹1,080. Available at counter.',
    repliedAt: '1 hour ago'
  },
  {
    id: 'enq-03',
    storeId: 'store-apollo-local',
    storeName: 'Sanjeevani Medicos & Healthcare',
    customerId: 'cust-3',
    customerName: 'Smt. Lakshmi Narayanan',
    customerPhone: '+91 98800 22334',
    customerMessage: 'Hello Doctor, I have uploaded doctor prescription for Augmentin 625. Can you deliver to 4th block with Dolo 650?',
    productId: 'prod-augmentin-625',
    productName: 'Augmentin 625 Duo Tablet',
    productPrice: 195,
    createdAt: '30 mins ago',
    status: 'new'
  }
];
