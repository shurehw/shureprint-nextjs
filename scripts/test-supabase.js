// Test Supabase connection and check custom_products
const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = 'https://jvzswjyflmgenzxsrlwj.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp2enN3anlmbG1nZW56eHNybHdqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTUwMjQyNzcsImV4cCI6MjA3MDYwMDI3N30.7XMaA33LNjFfDHr2Xok_xVuqYPYvkNEoZjLAbBZikKg';

const supabase = createClient(supabaseUrl, supabaseKey);

async function testSupabase() {
  try {
    console.log('Testing Supabase connection to jvzswjyflmgenzxsrlwj...\n');

    // Get all custom products
    const { data: products, error } = await supabase
      .from('custom_products')
      .select('*')
      .limit(5);

    if (error) {
      console.error('Error:', error.message);
      console.error('Full error:', error);
      return;
    }

    console.log(`✓ Found ${products?.length || 0} products\n`);

    if (products && products.length > 0) {
      console.log('First 5 products:');
      products.forEach((p, i) => {
        console.log(`\n${i + 1}. ${p.name || p.title || p.product_name || 'Unnamed'}`);
        console.log(`   ID: ${p.id}`);
        console.log(`   Category: ${p.category || 'N/A'}`);
        console.log(`   Price: ${p.price || p.base_price || 'N/A'}`);
        console.log(`   All fields: ${Object.keys(p).join(', ')}`);
      });

      // Get variants for first product
      const firstProductId = products[0].id;
      console.log(`\n---\nChecking variants for product ${firstProductId}...\n`);

      const { data: variants, error: variantsError } = await supabase
        .from('custom_product_variants')
        .select('*')
        .eq('product_id', firstProductId);

      if (variantsError) {
        console.log('Variants error:', variantsError.message);
      } else if (variants) {
        console.log(`✓ Found ${variants.length} variants`);
        if (variants.length > 0) {
          console.log('\nFirst variant:');
          console.log(JSON.stringify(variants[0], null, 2));
        }
      }
    } else {
      console.log('No products found in custom_products table');
    }

  } catch (error) {
    console.error('Error:', error.message);
  }
}

testSupabase();
