// Quick test to see what's in your BigCommerce store
const fetch = require('node-fetch');

const STORE_HASH = 'lsgscaxueg';
const ACCESS_TOKEN = 'mruwiqih1sqhgnfxn6ftiuvbtak55xv';
const API_URL = `https://api.bigcommerce.com/stores/${STORE_HASH}/v3`;

async function testAPI() {
  try {
    // Get store info
    console.log('Testing BigCommerce API connection...\n');

    const storeInfo = await fetch(`${API_URL}/store/information`, {
      headers: {
        'X-Auth-Token': ACCESS_TOKEN,
        'Content-Type': 'application/json',
      },
    });
    const store = await storeInfo.json();
    console.log('Store Name:', store.data?.name);
    console.log('Store URL:', store.data?.domain);
    console.log('Store Plan:', store.data?.plan_name);
    console.log('\n---\n');

    // Get products
    const productsRes = await fetch(`${API_URL}/catalog/products?limit=10`, {
      headers: {
        'X-Auth-Token': ACCESS_TOKEN,
        'Content-Type': 'application/json',
      },
    });
    const products = await productsRes.json();
    console.log(`Total Products in Store: ${products.meta?.pagination?.total || 0}`);

    if (products.data && products.data.length > 0) {
      console.log('\nFirst 5 Products:');
      products.data.slice(0, 5).forEach((p, i) => {
        console.log(`${i + 1}. ${p.name} - $${p.price} (ID: ${p.id})`);
      });
    } else {
      console.log('No products found in store.');
    }

    console.log('\n---\n');

    // Get categories
    const categoriesRes = await fetch(`${API_URL}/catalog/categories?limit=10`, {
      headers: {
        'X-Auth-Token': ACCESS_TOKEN,
        'Content-Type': 'application/json',
      },
    });
    const categories = await categoriesRes.json();
    console.log(`Total Categories: ${categories.meta?.pagination?.total || 0}`);

    if (categories.data && categories.data.length > 0) {
      console.log('\nCategories:');
      categories.data.forEach((c, i) => {
        console.log(`${i + 1}. ${c.name} (ID: ${c.id})`);
      });
    }

    console.log('\n---\n');

    // Check channels
    const channelsRes = await fetch(`${API_URL}/channels?limit=10`, {
      headers: {
        'X-Auth-Token': ACCESS_TOKEN,
        'Content-Type': 'application/json',
      },
    });
    const channels = await channelsRes.json();
    console.log('Available Channels:');
    if (channels.data) {
      channels.data.forEach((ch) => {
        console.log(`- ${ch.name} (ID: ${ch.id}, Type: ${ch.type})`);
      });
    }

  } catch (error) {
    console.error('Error testing API:', error.message);
  }
}

testAPI();
