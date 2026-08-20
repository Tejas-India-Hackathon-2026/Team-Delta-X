/**
 * Dhoondo Backend API Integration Service
 * Connects React frontend seamlessly with Express backend
 */

const API_BASE = '/api';

interface ApiResponse<T> {
  success: boolean;
  data: T;
  message?: string;
  count?: number;
}

async function request<T>(endpoint: string, options?: RequestInit): Promise<T> {
  const token = localStorage.getItem('dhoondo_auth_token');
  const headers: HeadersInit = {
    'Content-Type': 'application/json',
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
    ...(options?.headers || {}),
  };

  try {
    const res = await fetch(`${API_BASE}${endpoint}`, {
      ...options,
      headers,
    });

    const data: ApiResponse<T> = await res.json();
    if (!res.ok) {
      throw new Error(data.message || `API Error: ${res.statusText}`);
    }
    return data.data;
  } catch (error) {
    console.warn(`[API Connection Note] ${endpoint}:`, error);
    throw error;
  }
}

export const api = {
  // Health
  checkHealth: () => request<{ status: string; message: string }>('/health'),

  // Auth
  login: (credentials: { email?: string; identifier?: string; password: string }) =>
    request<any>('/auth/login', { method: 'POST', body: JSON.stringify(credentials) }),
  register: (userData: any) =>
    request<any>('/auth/register', { method: 'POST', body: JSON.stringify(userData) }),
  getMe: () => request<any>('/auth/me'),

  // Categories
  getCategories: () => request<any[]>('/categories'),
  createCategory: (data: any) =>
    request<any>('/categories', { method: 'POST', body: JSON.stringify(data) }),

  // Stores
  getStores: (params?: { lat?: number; lng?: number; radiusKm?: number; city?: string }) => {
    const query = new URLSearchParams(params as any).toString();
    return request<any[]>(`/stores${query ? `?${query}` : ''}`);
  },
  getStoreById: (id: string) => request<any>(`/stores/${id}`),
  registerStore: (storeData: any) =>
    request<any>('/stores', { method: 'POST', body: JSON.stringify(storeData) }),
  updateStore: (id: string, updates: any) =>
    request<any>(`/stores/${id}`, { method: 'PUT', body: JSON.stringify(updates) }),

  // Products
  getProducts: (params?: { categoryId?: string; q?: string; brand?: string }) => {
    const query = new URLSearchParams(params as any).toString();
    return request<any[]>(`/products${query ? `?${query}` : ''}`);
  },
  getProductById: (id: string) => request<any>(`/products/${id}`),
  createProduct: (productData: any) =>
    request<any>('/products', { method: 'POST', body: JSON.stringify(productData) }),

  // Inventory (Retailer live counter stock)
  getInventory: () => request<any[]>('/inventory'),
  getStoreInventory: (storeId: string) => request<any[]>(`/inventory/store/${storeId}`),
  upsertInventory: (item: { storeId: string; productId: string; price: number; mrp?: number; stockQuantity: number; status?: string }) =>
    request<any>('/inventory', { method: 'POST', body: JSON.stringify(item) }),
  deleteInventoryItem: (storeId: string, productId: string) =>
    request<any>(`/inventory/${storeId}/${productId}`, { method: 'DELETE' }),

  // Demands
  getDemands: (params?: { categoryId?: string; status?: string }) => {
    const query = new URLSearchParams(params as any).toString();
    return request<any[]>(`/demands${query ? `?${query}` : ''}`);
  },
  createDemand: (demandData: any) =>
    request<any>('/demands', { method: 'POST', body: JSON.stringify(demandData) }),
  fulfillDemand: (demandId: string, storeId: string) =>
    request<any>(`/demands/${demandId}/fulfill`, { method: 'PATCH', body: JSON.stringify({ storeId }) }),

  // Offers
  getOffers: (storeId?: string) =>
    request<any[]>(`/offers${storeId ? `?storeId=${storeId}` : ''}`),
  createOffer: (offerData: any) =>
    request<any>('/offers', { method: 'POST', body: JSON.stringify(offerData) }),
  deleteOffer: (id: string) =>
    request<any>(`/offers/${id}`, { method: 'DELETE' }),

  // Enquiries
  getStoreEnquiries: (storeId: string) =>
    request<any[]>(`/enquiries/store/${storeId}`),
  createEnquiry: (enquiryData: any) =>
    request<any>('/enquiries', { method: 'POST', body: JSON.stringify(enquiryData) }),
  replyEnquiry: (enquiryId: string, replyMessage: string) =>
    request<any>(`/enquiries/${enquiryId}/reply`, { method: 'PATCH', body: JSON.stringify({ replyMessage }) }),

  // Reviews
  getStoreReviews: (storeId: string) =>
    request<any[]>(`/reviews/store/${storeId}`),
  createReview: (reviewData: any) =>
    request<any>('/reviews', { method: 'POST', body: JSON.stringify(reviewData) }),
};
