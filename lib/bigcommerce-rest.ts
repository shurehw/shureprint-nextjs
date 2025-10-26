// BigCommerce REST API Client (fallback until we get Storefront token)
const BIGCOMMERCE_API_URL = process.env.BIGCOMMERCE_API_URL || 'https://api.bigcommerce.com';
const STORE_HASH = process.env.BIGCOMMERCE_STORE_HASH;
const ACCESS_TOKEN = process.env.BIGCOMMERCE_ACCESS_TOKEN;

async function bigCommerceREST(endpoint: string, options: RequestInit = {}) {
  const url = `${BIGCOMMERCE_API_URL}/stores/${STORE_HASH}/v3${endpoint}`;

  const res = await fetch(url, {
    ...options,
    headers: {
      'X-Auth-Token': ACCESS_TOKEN!,
      'Content-Type': 'application/json',
      ...options.headers,
    },
  });

  if (!res.ok) {
    throw new Error(`BigCommerce API error: ${res.status} ${res.statusText}`);
  }

  return res.json();
}

// Get all products
export async function getAllProducts(limit = 50, page = 1) {
  const data = await bigCommerceREST(`/catalog/products?limit=${limit}&page=${page}&include=images,variants`);
  return data.data;
}

// Get single product by ID
export async function getProduct(productId: number) {
  const data = await bigCommerceREST(`/catalog/products/${productId}?include=images,variants,custom_fields`);
  return data.data;
}

// Get products by category
export async function getProductsByCategory(categoryId: number, limit = 50) {
  const data = await bigCommerceREST(`/catalog/products?categories:in=${categoryId}&limit=${limit}&include=images`);
  return data.data;
}

// Get all categories
export async function getCategories() {
  const data = await bigCommerceREST('/catalog/categories');
  return data.data;
}

// Get featured products
export async function getFeaturedProducts(limit = 10) {
  const data = await bigCommerceREST(`/catalog/products?is_featured=true&limit=${limit}&include=images`);
  return data.data;
}

// Search products
export async function searchProducts(keyword: string, limit = 20) {
  const data = await bigCommerceREST(`/catalog/products?keyword=${encodeURIComponent(keyword)}&limit=${limit}&include=images`);
  return data.data;
}

// Create cart
export async function createCart(lineItems: any[]) {
  const data = await bigCommerceREST('/carts', {
    method: 'POST',
    body: JSON.stringify({
      line_items: lineItems,
    }),
  });
  return data.data;
}

// Add to cart
export async function addToCart(cartId: string, lineItems: any[]) {
  const data = await bigCommerceREST(`/carts/${cartId}/items`, {
    method: 'POST',
    body: JSON.stringify({
      line_items: lineItems,
    }),
  });
  return data.data;
}

// Get cart
export async function getCart(cartId: string) {
  const data = await bigCommerceREST(`/carts/${cartId}`);
  return data.data;
}

// Delete cart item
export async function deleteCartItem(cartId: string, itemId: string) {
  await bigCommerceREST(`/carts/${cartId}/items/${itemId}`, {
    method: 'DELETE',
  });
}

// Update cart item
export async function updateCartItem(cartId: string, itemId: string, quantity: number) {
  const data = await bigCommerceREST(`/carts/${cartId}/items/${itemId}`, {
    method: 'PUT',
    body: JSON.stringify({
      line_item: {
        quantity,
      },
    }),
  });
  return data.data;
}

// Get checkout URL (redirect to BigCommerce checkout)
export async function getCheckoutUrl(cartId: string) {
  const data = await bigCommerceREST(`/carts/${cartId}/redirect_urls`, {
    method: 'POST',
  });
  return data.data.checkout_url;
}

export default {
  getAllProducts,
  getProduct,
  getProductsByCategory,
  getCategories,
  getFeaturedProducts,
  searchProducts,
  createCart,
  addToCart,
  getCart,
  deleteCartItem,
  updateCartItem,
  getCheckoutUrl,
};
