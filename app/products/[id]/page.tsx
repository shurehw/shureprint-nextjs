'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Head from 'next/head';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { getCustomProduct } from '@/lib/supabase';

export default function ProductPage() {
  const params = useParams();
  const router = useRouter();
  const [product, setProduct] = useState<any>(null);
  const [selectedVariant, setSelectedVariant] = useState<any>(null);
  const [selectedQuantityTier, setSelectedQuantityTier] = useState<any>(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProduct() {
      try {
        const productData = await getCustomProduct(params.id as string);
        setProduct(productData);

        // Set default variant
        const defaultVariant = productData.custom_variants?.find((v: any) => v.is_default) || productData.custom_variants?.[0];
        if (defaultVariant) {
          setSelectedVariant(defaultVariant);
          setSelectedQuantityTier(defaultVariant.specifications?.volume_pricing?.[0]);
        }
      } catch (error) {
        console.error('Error fetching product:', error);
      } finally {
        setLoading(false);
      }
    }

    if (params.id) {
      fetchProduct();
    }
  }, [params.id]);

  if (loading) {
    return (
      <div className="page-wrap">
        <Navigation />
        <main className="main-wrap" style={{ padding: '100px 20px', textAlign: 'center' }}>
          <div>Loading product...</div>
        </main>
        <Footer />
      </div>
    );
  }

  if (!product) {
    return (
      <div className="page-wrap">
        <Navigation />
        <main className="main-wrap" style={{ padding: '100px 20px', textAlign: 'center' }}>
          <h1>Product not found</h1>
          <button onClick={() => router.push('/')} className="button w-button">
            ← Back to Home
          </button>
        </main>
        <Footer />
      </div>
    );
  }

  const variants = product.custom_variants || [];
  const volumePricing = selectedVariant?.specifications?.volume_pricing || [];
  const commonPrintColors = selectedVariant?.option_values?.print_colors?.toUpperCase() || '';
  const commonFinish = selectedVariant?.specifications?.finish || '';

  // Build image gallery
  const allImages = [
    product.primary_image_url,
    ...(product.gallery_images || [])
  ].filter(Boolean);

  return (
    <>
      <Head>
        <title>{product.meta_title || `${product.name} | Shureprint`}</title>
        <meta name="description" content={product.meta_description || product.description || `Custom ${product.name} for restaurants, cafes, and hospitality brands.`} />
        <meta property="og:title" content={product.name} />
        <meta property="og:description" content={product.description || ''} />
        <meta property="og:image" content={product.primary_image_url || ''} />
        <meta property="og:type" content="product" />
      </Head>

      <div className="page-wrap">
        <Navigation />
        <main className="main-wrap" style={{ padding: '100px 20px' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

            {/* Breadcrumbs */}
            <div style={{ marginBottom: '30px', fontSize: '14px', color: '#999' }}>
              <a href="/" style={{ color: '#999' }}>Home</a>
              {' → '}
              <span>{product.name}</span>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px' }}>

              {/* Product Images */}
              <div>
                {allImages.length > 0 ? (
                  <>
                    <div style={{ marginBottom: '20px' }}>
                      <img
                        src={allImages[selectedImageIndex]}
                        alt={product.name}
                        style={{ width: '100%', borderRadius: '8px' }}
                      />
                    </div>
                    {allImages.length > 1 && (
                      <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                        {allImages.map((img: string, idx: number) => (
                          <img
                            key={idx}
                            src={img}
                            alt={`${product.name} - ${idx + 1}`}
                            onClick={() => setSelectedImageIndex(idx)}
                            style={{
                              width: '80px',
                              height: '80px',
                              objectFit: 'cover',
                              borderRadius: '4px',
                              cursor: 'pointer',
                              border: selectedImageIndex === idx ? '2px solid #000' : '1px solid #ddd',
                            }}
                          />
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <div style={{
                    width: '100%',
                    paddingTop: '100%',
                    background: '#f0f0f0',
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    No image available
                  </div>
                )}
              </div>

              {/* Product Info */}
              <div>
                <h1 className="heading-large" style={{ marginBottom: '20px' }}>
                  {product.name}
                </h1>

                {/* Print Type & Finish Badge */}
                {(commonPrintColors || commonFinish) && (
                  <div style={{
                    marginBottom: '20px',
                    padding: '12px 16px',
                    background: '#f9f9f9',
                    borderRadius: '6px',
                    display: 'inline-block'
                  }}>
                    {commonPrintColors && (
                      <span style={{ fontWeight: 'bold', marginRight: '12px' }}>
                        {commonPrintColors}
                      </span>
                    )}
                    {commonFinish && (
                      <span style={{ color: '#666' }}>
                        {commonFinish} Finish
                      </span>
                    )}
                  </div>
                )}

                {/* Description */}
                {product.description && (
                  <p style={{ marginBottom: '30px', lineHeight: '1.6', color: '#666' }}>
                    {product.description}
                  </p>
                )}

                {/* Features (FDA, Recyclable, etc) */}
                <div style={{ marginBottom: '30px', display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                  {product.product_type === 'food_safe' && (
                    <span style={{ padding: '6px 12px', background: '#f0f0f0', borderRadius: '4px', fontSize: '13px' }}>
                      FDA Approved
                    </span>
                  )}
                  <span style={{ padding: '6px 12px', background: '#f0f0f0', borderRadius: '4px', fontSize: '13px' }}>
                    Custom Printing
                  </span>
                  {product.is_customizable && (
                    <span style={{ padding: '6px 12px', background: '#f0f0f0', borderRadius: '4px', fontSize: '13px' }}>
                      Fully Customizable
                    </span>
                  )}
                </div>

                {/* Size Selection */}
                {variants.length > 0 && (
                  <div style={{ marginBottom: '30px' }}>
                    <label style={{ display: 'block', marginBottom: '10px', fontWeight: 'bold' }}>
                      Select Size
                    </label>
                    <select
                      value={selectedVariant?.id || ''}
                      onChange={(e) => {
                        const variant = variants.find((v: any) => v.id === e.target.value);
                        setSelectedVariant(variant);
                        setSelectedQuantityTier(variant?.specifications?.volume_pricing?.[0]);
                      }}
                      style={{
                        width: '100%',
                        padding: '12px',
                        border: '1px solid #ddd',
                        borderRadius: '4px',
                        fontSize: '16px'
                      }}
                    >
                      {variants.map((variant: any) => (
                        <option key={variant.id} value={variant.id}>
                          {variant.option_values?.size || variant.name}
                        </option>
                      ))}
                    </select>
                  </div>
                )}

                {/* Volume Pricing */}
                {volumePricing.length > 0 && (
                  <div style={{ marginBottom: '30px' }}>
                    <label style={{ display: 'block', marginBottom: '10px', fontWeight: 'bold' }}>
                      Select Quantity
                    </label>
                    <select
                      value={selectedQuantityTier?.min_quantity || ''}
                      onChange={(e) => {
                        const tier = volumePricing.find((p: any) => p.min_quantity === parseInt(e.target.value));
                        setSelectedQuantityTier(tier);
                      }}
                      style={{
                        width: '100%',
                        padding: '12px',
                        border: '1px solid #ddd',
                        borderRadius: '4px',
                        fontSize: '16px'
                      }}
                    >
                      {volumePricing.map((pricing: any, idx: number) => (
                        <option key={idx} value={pricing.min_quantity}>
                          {pricing.qty_label} - ${pricing.unit_price.toFixed(2)}
                        </option>
                      ))}
                    </select>
                  </div>
                )}

                {/* Price Display */}
                {selectedQuantityTier && (
                  <div style={{
                    background: '#f5f5f5',
                    padding: '20px',
                    borderRadius: '8px',
                    marginBottom: '30px'
                  }}>
                    <div style={{ fontSize: '14px', color: '#666', marginBottom: '5px' }}>
                      Total Price
                    </div>
                    <div style={{ fontSize: '36px', fontWeight: 'bold' }}>
                      ${selectedQuantityTier.unit_price.toFixed(2)}
                    </div>
                    <div style={{ fontSize: '14px', color: '#666', marginTop: '5px' }}>
                      for {selectedQuantityTier.min_quantity.toLocaleString()} units
                    </div>
                    {selectedVariant?.moq && (
                      <div style={{ fontSize: '12px', color: '#999', marginTop: '10px' }}>
                        MOQ: {selectedVariant.moq.toLocaleString()} units
                      </div>
                    )}
                  </div>
                )}

                {/* Lead Time & Case Info */}
                <div style={{ marginBottom: '20px', fontSize: '14px', color: '#666' }}>
                  {product.default_lead_time_days && (
                    <div style={{ marginBottom: '8px' }}>
                      Lead Time: {product.default_lead_time_days} days
                    </div>
                  )}
                  {product.case_quantity && (
                    <div style={{ marginBottom: '8px' }}>
                      Case Quantity: {product.case_quantity} units/case
                    </div>
                  )}
                  {selectedVariant?.sku && (
                    <div>SKU: {selectedVariant.sku}</div>
                  )}
                </div>

                {/* Setup Fee */}
                {product.setup_fee > 0 && (
                  <div style={{ marginBottom: '20px', padding: '12px', background: '#fffbf0', borderRadius: '4px', fontSize: '14px' }}>
                    One-time setup fee: ${product.setup_fee.toFixed(2)}
                  </div>
                )}

                {/* Request Quote Button */}
                <button
                  onClick={() => router.push('/contact-page')}
                  className="button w-button"
                  style={{
                    width: '100%',
                    padding: '20px',
                    fontSize: '18px',
                  }}
                >
                  Request Quote →
                </button>

                {/* Product Details */}
                {product.specifications && Object.keys(product.specifications).length > 0 && (
                  <div style={{ marginTop: '40px', paddingTop: '40px', borderTop: '1px solid #ddd' }}>
                    <h3 style={{ marginBottom: '20px' }}>Details</h3>
                    <div style={{ fontSize: '14px', lineHeight: '1.8' }}>
                      {Object.entries(product.specifications)
                        .filter(([key]) => !['volume_pricing', 'finish', 'case_count'].includes(key))
                        .map(([key, value]) => (
                          <div key={key} style={{ marginBottom: '8px', display: 'flex' }}>
                            <strong style={{ textTransform: 'capitalize', minWidth: '140px' }}>
                              {key.replace(/_/g, ' ')}:
                            </strong>
                            <span style={{ color: '#666' }}>
                              {typeof value === 'object' ? JSON.stringify(value) : String(value)}
                            </span>
                          </div>
                        ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
