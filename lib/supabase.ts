import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Get all custom products
export async function getAllCustomProducts() {
  const { data, error } = await supabase
    .from('custom_products')
    .select('*')
    .eq('is_active', true)
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Error fetching custom products:', error);
    throw error;
  }

  return data;
}

// Get single custom product by ID with variants
export async function getCustomProduct(productId: string) {
  const { data, error } = await supabase
    .from('custom_products')
    .select('*, custom_variants(*)')
    .eq('id', productId)
    .single();

  if (error) {
    console.error('Error fetching custom product:', error);
    throw error;
  }

  return data;
}

// Get products by category
export async function getCustomProductsByCategory(categoryId: string) {
  const { data, error } = await supabase
    .from('custom_products')
    .select('*')
    .eq('category_id', categoryId)
    .eq('is_active', true)
    .order('created_at', { ascending: false});

  if (error) {
    console.error('Error fetching products by category:', error);
    throw error;
  }

  return data;
}

// Get featured products
export async function getFeaturedCustomProducts(limit = 10) {
  const { data, error } = await supabase
    .from('custom_products')
    .select('*')
    .eq('is_featured', true)
    .eq('is_active', true)
    .limit(limit);

  if (error) {
    console.error('Error fetching featured products:', error);
    throw error;
  }

  return data;
}

// Get product variants
export async function getProductVariants(productId: string) {
  const { data, error } = await supabase
    .from('custom_variants')
    .select('*')
    .eq('product_id', productId)
    .eq('is_active', true)
    .order('base_price', { ascending: true });

  if (error) {
    console.error('Error fetching product variants:', error);
    throw error;
  }

  return data;
}
