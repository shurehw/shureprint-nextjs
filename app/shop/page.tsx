'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { getAllCustomProducts } from '@/lib/supabase';

interface Product {
  id: string;
  name: string;
  slug: string;
  description: string;
  primary_image_url: string;
  product_type: string;
  category: string;
  moq: number;
  default_lead_time_days: number;
  base_price: number;
  is_active: boolean;
  is_featured: boolean;
}

type SortOption = 'newest' | 'price-low' | 'price-high' | 'lead-time';
type ProductType = 'all' | 'cups' | 'bags' | 'containers' | 'boxes';

export default function ShopPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [showQuoteModal, setShowQuoteModal] = useState(false);
  const [showSampleModal, setShowSampleModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // Filter states
  const [selectedType, setSelectedType] = useState<ProductType>('all');
  const [selectedSort, setSelectedSort] = useState<SortOption>('newest');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedMaterial, setSelectedMaterial] = useState<string>('all');
  const [selectedIndustry, setSelectedIndustry] = useState<string>('all');
  const [priceRange, setPriceRange] = useState<string>('all');

  useEffect(() => {
    loadProducts();
  }, []);

  useEffect(() => {
    applyFiltersAndSort();
  }, [products, selectedType, selectedSort, searchQuery, selectedMaterial, selectedIndustry, priceRange]);

  const loadProducts = async () => {
    try {
      const data = await getAllCustomProducts();
      setProducts(data || []);
    } catch (error) {
      console.error('Error loading products:', error);
    } finally {
      setLoading(false);
    }
  };

  const applyFiltersAndSort = () => {
    let filtered = [...products];

    // Apply type filter
    if (selectedType !== 'all') {
      filtered = filtered.filter((p) => {
        const productName = p.name.toLowerCase();
        switch (selectedType) {
          case 'cups':
            return productName.includes('cup');
          case 'bags':
            return productName.includes('bag');
          case 'containers':
            return productName.includes('container');
          case 'boxes':
            return productName.includes('box');
          default:
            return true;
        }
      });
    }

    // Apply search filter
    if (searchQuery) {
      filtered = filtered.filter((p) =>
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.description?.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Apply material filter
    if (selectedMaterial !== 'all') {
      filtered = filtered.filter((p) => {
        const name = p.name.toLowerCase();
        const desc = p.description?.toLowerCase() || '';
        return name.includes(selectedMaterial) || desc.includes(selectedMaterial);
      });
    }

    // Apply industry filter
    if (selectedIndustry !== 'all') {
      // This would ideally come from product metadata
      // For now, filter by product type relevance
      filtered = filtered.filter((p) => {
        const name = p.name.toLowerCase();
        if (selectedIndustry === 'food-service' && (name.includes('food') || name.includes('container') || name.includes('cup'))) return true;
        if (selectedIndustry === 'retail' && (name.includes('bag') || name.includes('box'))) return true;
        if (selectedIndustry === 'hospitality') return true; // all products relevant
        return selectedIndustry === 'all';
      });
    }

    // Apply price range filter
    if (priceRange !== 'all') {
      filtered = filtered.filter((p) => {
        const price = p.base_price || 0;
        switch (priceRange) {
          case 'under-100': return price < 100;
          case '100-300': return price >= 100 && price < 300;
          case '300-500': return price >= 300 && price < 500;
          case '500-plus': return price >= 500;
          default: return true;
        }
      });
    }

    // Apply sorting
    switch (selectedSort) {
      case 'price-low':
        filtered.sort((a, b) => (a.base_price || 0) - (b.base_price || 0));
        break;
      case 'price-high':
        filtered.sort((a, b) => (b.base_price || 0) - (a.base_price || 0));
        break;
      case 'lead-time':
        filtered.sort((a, b) => (a.default_lead_time_days || 99) - (b.default_lead_time_days || 99));
        break;
      case 'newest':
      default:
        // Already sorted by created_at desc from DB
        break;
    }

    setFilteredProducts(filtered);
  };

  const getStartingPrice = (product: Product) => {
    if (product.base_price) {
      return `$${product.base_price.toFixed(2)}`;
    }
    return 'Contact for pricing';
  };

  const handleQuoteClick = (e: React.MouseEvent, product: Product) => {
    e.preventDefault();
    e.stopPropagation();
    setSelectedProduct(product);
    setShowQuoteModal(true);
  };

  const handleSampleClick = (e: React.MouseEvent, product: Product) => {
    e.preventDefault();
    e.stopPropagation();
    setSelectedProduct(product);
    setShowSampleModal(true);
  };

  if (loading) {
    return (
      <div className="page-wrap">
        <Navigation />
        <main className="main-wrap" style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ fontSize: '1.5rem' }}>Loading products...</div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="page-wrap">
      <Navigation />
      <main className="main-wrap">
        {/* Hero Section */}
        <section style={{
          padding: '4vw 2vw 2vw',
          background: '#f5efe5',
          textAlign: 'center'
        }}>
          <h1 style={{
            fontSize: '3vw',
            marginBottom: '1vw',
            fontWeight: '400'
          }}>
            Shop Custom Packaging
          </h1>
          <p style={{
            fontSize: '1.2vw',
            maxWidth: '600px',
            margin: '0 auto',
            color: '#666'
          }}>
            Premium custom packaging for hospitality, retail, and food service
          </p>
        </section>

        {/* Filters & Search */}
        <section style={{
          padding: '2vw',
          background: '#f6efe8',
          borderBottom: '1px solid #ccc'
        }}>
          <div style={{
            maxWidth: '1400px',
            margin: '0 auto',
            display: 'flex',
            gap: '2vw',
            flexWrap: 'wrap',
            alignItems: 'center'
          }}>
            {/* Search */}
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                flex: '1 1 300px',
                padding: '0.8vw 1.5vw',
                fontSize: '1vw',
                border: '1px solid #000',
                borderRadius: '50px',
                background: '#fff'
              }}
            />

            {/* Type Filter Pills */}
            <div style={{ display: 'flex', gap: '0.5vw', flexWrap: 'wrap', alignItems: 'center' }}>
              {(['all', 'cups', 'bags', 'containers', 'boxes'] as ProductType[]).map((type) => (
                <button
                  key={type}
                  onClick={() => setSelectedType(type)}
                  className="filter-pill"
                  style={{
                    padding: '0.6vw 1.2vw',
                    fontSize: '0.9vw',
                    border: selectedType === type ? '2px solid #000' : '2px solid transparent',
                    borderRadius: '50px',
                    background: selectedType === type ? '#e3fc02' : '#fff',
                    cursor: 'pointer',
                    fontWeight: selectedType === type ? 'bold' : 'normal',
                    transition: 'all 0.3s ease',
                    textTransform: 'capitalize'
                  }}
                >
                  {type === 'all' ? 'All Products' : type}
                </button>
              ))}
            </div>

            {/* Material Filter */}
            <select
              value={selectedMaterial}
              onChange={(e) => setSelectedMaterial(e.target.value)}
              style={{
                padding: '0.8vw 1.5vw',
                fontSize: '0.9vw',
                border: '1px solid #000',
                borderRadius: '50px',
                background: '#fff',
                cursor: 'pointer'
              }}
            >
              <option value="all">All Materials</option>
              <option value="paper">Paper</option>
              <option value="gloss">Gloss</option>
              <option value="matte">Matte</option>
              <option value="kraft">Kraft</option>
            </select>

            {/* Industry Filter */}
            <select
              value={selectedIndustry}
              onChange={(e) => setSelectedIndustry(e.target.value)}
              style={{
                padding: '0.8vw 1.5vw',
                fontSize: '0.9vw',
                border: '1px solid #000',
                borderRadius: '50px',
                background: '#fff',
                cursor: 'pointer'
              }}
            >
              <option value="all">All Industries</option>
              <option value="hospitality">Hospitality</option>
              <option value="food-service">Food Service</option>
              <option value="retail">Retail</option>
            </select>

            {/* Price Range Filter */}
            <select
              value={priceRange}
              onChange={(e) => setPriceRange(e.target.value)}
              style={{
                padding: '0.8vw 1.5vw',
                fontSize: '0.9vw',
                border: '1px solid #000',
                borderRadius: '50px',
                background: '#fff',
                cursor: 'pointer'
              }}
            >
              <option value="all">All Prices</option>
              <option value="under-100">Under $100</option>
              <option value="100-300">$100 - $300</option>
              <option value="300-500">$300 - $500</option>
              <option value="500-plus">$500+</option>
            </select>

            {/* Sort */}
            <select
              value={selectedSort}
              onChange={(e) => setSelectedSort(e.target.value as SortOption)}
              style={{
                padding: '0.8vw 1.5vw',
                fontSize: '0.9vw',
                border: '1px solid #000',
                borderRadius: '50px',
                background: '#fff',
                cursor: 'pointer'
              }}
            >
              <option value="newest">Newest</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="lead-time">Fastest Lead Time</option>
            </select>
          </div>

          {/* Results Count with Clear Filters */}
          <div style={{
            maxWidth: '1400px',
            margin: '1vw auto 0',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
            <div style={{ fontSize: '0.9vw', color: '#666' }}>
              {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'} found
            </div>
            {(selectedType !== 'all' || selectedMaterial !== 'all' || selectedIndustry !== 'all' || priceRange !== 'all' || searchQuery) && (
              <button
                onClick={() => {
                  setSelectedType('all');
                  setSelectedMaterial('all');
                  setSelectedIndustry('all');
                  setPriceRange('all');
                  setSearchQuery('');
                }}
                style={{
                  padding: '0.5vw 1vw',
                  fontSize: '0.9vw',
                  background: 'transparent',
                  border: '1px solid #999',
                  borderRadius: '50px',
                  cursor: 'pointer',
                  color: '#666',
                  transition: 'all 0.3s ease'
                }}
                className="clear-filters-btn"
              >
                Clear all filters
              </button>
            )}
          </div>
        </section>

        {/* Product Grid */}
        <section style={{
          padding: '4vw 2vw',
          background: '#f6efe8'
        }}>
          <div style={{
            maxWidth: '1400px',
            margin: '0 auto'
          }}>
            {filteredProducts.length === 0 ? (
              <div style={{
                textAlign: 'center',
                padding: '4vw',
                fontSize: '1.2vw',
                color: '#666'
              }}>
                No products found. Try adjusting your filters.
              </div>
            ) : (
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                gap: '2vw'
              }}>
                {filteredProducts.map((product) => (
                  <div
                    key={product.id}
                    style={{
                      background: '#fff',
                      borderRadius: '1vw',
                      overflow: 'hidden',
                      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                      display: 'block',
                      color: 'inherit'
                    }}
                    className="product-card"
                  >
                    {/* Product Image */}
                    <Link href={`/products/${product.id}`}>
                      <div
                        className="product-image-container"
                        style={{
                          width: '100%',
                          paddingTop: '100%',
                          position: 'relative',
                          background: '#f5f5f5',
                          cursor: 'pointer',
                          overflow: 'hidden'
                        }}
                      >
                        {product.primary_image_url && (
                          <>
                            <img
                              src={product.primary_image_url}
                              alt={product.name}
                              className="product-main-image"
                              style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                                transition: 'opacity 0.3s ease'
                              }}
                            />
                            {/* Secondary hover image - using same image with filter for demo */}
                            <img
                              src={product.primary_image_url}
                              alt={product.name}
                              className="product-secondary-image"
                              style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                                opacity: 0,
                                transition: 'opacity 0.3s ease',
                                filter: 'brightness(1.1) saturate(1.2)'
                              }}
                            />
                          </>
                        )}
                        {/* View More Spinner */}
                        <img
                          src="https://cdn.prod.website-files.com/622fa56ecc9274a545158f70/6246704c3f1bf146ebf857fe_viewmore.png"
                          alt=""
                          className="buy-spinner"
                          style={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            width: '80px',
                            height: '80px',
                            opacity: 0,
                            transition: 'opacity 0.3s ease'
                          }}
                        />
                      </div>
                    </Link>

                    {/* Product Info */}
                    <div style={{ padding: '1.5vw' }}>
                      <Link href={`/products/${product.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                        <h3 style={{
                          fontSize: '1.2vw',
                          marginBottom: '0.5vw',
                          fontWeight: '500'
                        }}>
                          {product.name}
                        </h3>

                        {product.description && (
                          <p style={{
                            fontSize: '0.9vw',
                            color: '#666',
                            marginBottom: '1vw',
                            lineHeight: '1.4',
                            display: '-webkit-box',
                            WebkitLineClamp: 2,
                            WebkitBoxOrient: 'vertical',
                            overflow: 'hidden'
                          }}>
                            {product.description}
                          </p>
                        )}

                        {/* Pricing & Details */}
                        <div style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                          marginTop: '1vw',
                          paddingTop: '1vw',
                          borderTop: '1px solid #eee'
                        }}>
                          <div>
                            <div style={{
                              fontSize: '1.3vw',
                              fontWeight: 'bold'
                            }}>
                              {getStartingPrice(product)}
                            </div>
                            {product.moq && (
                              <div style={{
                                fontSize: '0.8vw',
                                color: '#999'
                              }}>
                                MOQ: {product.moq}
                              </div>
                            )}
                          </div>

                          {product.default_lead_time_days && (
                            <div style={{
                              fontSize: '0.8vw',
                              color: '#666',
                              background: '#f5efe5',
                              padding: '0.5vw 1vw',
                              borderRadius: '20px'
                            }}>
                              {product.default_lead_time_days} days
                            </div>
                          )}
                        </div>
                      </Link>

                      {/* Trust Badges */}
                      <div style={{
                        display: 'flex',
                        gap: '0.5vw',
                        marginTop: '0.8vw',
                        flexWrap: 'wrap'
                      }}>
                        {product.product_type === 'food_safe' && (
                          <span style={{
                            padding: '0.3vw 0.8vw',
                            background: '#f0f0f0',
                            borderRadius: '12px',
                            fontSize: '0.7vw',
                            color: '#666',
                            fontWeight: '500'
                          }}>
                            ✓ FDA Approved
                          </span>
                        )}
                        <span style={{
                          padding: '0.3vw 0.8vw',
                          background: '#f0f0f0',
                          borderRadius: '12px',
                          fontSize: '0.7vw',
                          color: '#666',
                          fontWeight: '500'
                        }}>
                          ✓ Custom Printing
                        </span>
                        {product.moq && product.moq <= 500 && (
                          <span style={{
                            padding: '0.3vw 0.8vw',
                            background: '#e3fc02',
                            borderRadius: '12px',
                            fontSize: '0.7vw',
                            color: '#000',
                            fontWeight: '500'
                          }}>
                            Low MOQ
                          </span>
                        )}
                      </div>

                      {/* Action Buttons */}
                      <div style={{
                        display: 'grid',
                        gridTemplateColumns: '1fr 1fr 1fr',
                        gap: '0.5vw',
                        marginTop: '1vw'
                      }}>
                        <button
                          onClick={(e) => handleSampleClick(e, product)}
                          style={{
                            padding: '0.8vw',
                            background: '#fff',
                            color: '#000',
                            border: '1px solid #000',
                            borderRadius: '50px',
                            fontSize: '0.85vw',
                            cursor: 'pointer',
                            transition: 'all 0.3s ease',
                            fontWeight: '400'
                          }}
                          className="sample-btn"
                        >
                          📦 Sample
                        </button>
                        <button
                          onClick={(e) => handleQuoteClick(e, product)}
                          style={{
                            padding: '0.8vw',
                            background: '#e3fc02',
                            color: '#000',
                            border: '1px solid #000',
                            borderRadius: '50px',
                            fontSize: '0.85vw',
                            cursor: 'pointer',
                            transition: 'all 0.3s ease',
                            fontWeight: '500'
                          }}
                          className="quote-btn"
                        >
                          Get Quote
                        </button>
                        <Link
                          href={`/products/${product.id}`}
                          style={{
                            padding: '0.8vw',
                            background: '#000',
                            color: '#fff',
                            border: 'none',
                            borderRadius: '50px',
                            fontSize: '0.85vw',
                            cursor: 'pointer',
                            transition: 'background 0.3s ease',
                            textAlign: 'center',
                            textDecoration: 'none',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                          }}
                          className="view-product-btn"
                        >
                          Details →
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section style={{
          padding: '4vw 2vw',
          background: '#f5efe5',
          textAlign: 'center'
        }}>
          <h2 style={{ fontSize: '2vw', marginBottom: '1vw' }}>
            Need Help Choosing?
          </h2>
          <p style={{ fontSize: '1.2vw', color: '#666', marginBottom: '2vw' }}>
            Talk to our packaging experts
          </p>
          <Link href="/contact-page" className="button" style={{
            display: 'inline-block',
            background: '#000',
            color: '#fff',
            padding: '1vw 2vw',
            borderRadius: '50px',
            textDecoration: 'none',
            fontSize: '1vw'
          }}>
            → Contact Us
          </Link>
        </section>

        {/* Client Examples Section */}
        <section className="contact-section" style={{ padding: '4vw 2vw', background: '#fff' }}>
          <h2 className="company-heading" style={{ fontSize: '2.5vw', marginBottom: '2vw', textAlign: 'left', maxWidth: '1400px', margin: '0 auto 2vw' }}>
            <Link href="/client-list" className="company-link" style={{ textDecoration: 'none', color: '#000' }}>
              → Client Examples
            </Link>
          </h2>
          <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2vw' }}>
              {[
                { name: 'Show Me Your Mumu', image: 'https://cdn.prod.website-files.com/62453a78ddc3de39ad34b9a2/629fa92e4d65b26ca3ff3c5a_Screen%20Shot%202022-06-03%20at%2010.13.25%20AM.png' },
                { name: 'Butchers Daughter', image: 'https://cdn.prod.website-files.com/62453a78ddc3de39ad34b9a2/6248dc42c98b78d7f095c08e_Screen%20Shot%202022-04-02%20at%205.24.42%20PM.png' },
                { name: 'Private Suite', image: 'https://cdn.prod.website-files.com/62453a78ddc3de39ad34b9a2/6248dc6ba10a34c0e8ceca8a_Screen%20Shot%202022-04-02%20at%205.26.55%20PM.png' },
                { name: 'Ggiata', image: 'https://cdn.prod.website-files.com/62453a78ddc3de39ad34b9a2/6248dc819f3a25bd16854a74_Screen%20Shot%202022-04-02%20at%205.27.53%20PM.png' },
                { name: 'The Nice Guy', image: 'https://cdn.prod.website-files.com/62453a78ddc3de39ad34b9a2/6248dca4c1f89d19ee0e78e2_Screen%20Shot%202022-04-02%20at%205.29.24%20PM.png' },
                { name: 'Delilah', image: 'https://cdn.prod.website-files.com/62453a78ddc3de39ad34b9a2/6248dcb99d2cf8e39d60a5bb_Screen%20Shot%202022-04-02%20at%205.30.05%20PM.png' }
              ].map((client) => (
                <Link
                  key={client.name}
                  href="/client-list"
                  className="client-tile"
                  style={{
                    position: 'relative',
                    aspectRatio: '1',
                    overflow: 'hidden',
                    borderRadius: '0.5vw',
                    textDecoration: 'none',
                    color: '#fff',
                    display: 'block',
                    transition: 'transform 0.3s ease'
                  }}
                >
                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    backgroundImage: `url(${client.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    transition: 'transform 0.3s ease'
                  }} className="client-tile-bg" />
                  <div style={{
                    position: 'absolute',
                    bottom: '1.5vw',
                    left: '1.5vw',
                    right: '1.5vw',
                    fontSize: '1.5vw',
                    fontWeight: '600',
                    zIndex: 1,
                    textShadow: '0 2px 10px rgba(0,0,0,0.3)'
                  }}>
                    {client.name}
                  </div>
                </Link>
              ))}
            </div>
            <div style={{ textAlign: 'center', marginTop: '3vw' }}>
              <Link href="/client-list" className="footer-button w-button" style={{
                display: 'inline-block',
                background: '#000',
                color: '#fff',
                padding: '1vw 2vw',
                borderRadius: '50px',
                textDecoration: 'none',
                fontSize: '1vw'
              }}>
                View all cases →
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Quote Modal */}
      {showQuoteModal && selectedProduct && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0,0,0,0.7)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 10000,
            padding: '2vw'
          }}
          onClick={() => setShowQuoteModal(false)}
        >
          <div
            style={{
              background: '#fff',
              borderRadius: '1vw',
              padding: '3vw',
              maxWidth: '500px',
              width: '100%',
              position: 'relative'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowQuoteModal(false)}
              style={{
                position: 'absolute',
                top: '1vw',
                right: '1vw',
                background: 'none',
                border: 'none',
                fontSize: '2vw',
                cursor: 'pointer',
                color: '#999'
              }}
            >
              ×
            </button>

            <h2 style={{ fontSize: '1.8vw', marginBottom: '1vw' }}>
              Request a Quote
            </h2>
            <h3 style={{ fontSize: '1.3vw', color: '#666', marginBottom: '2vw', fontWeight: '400' }}>
              {selectedProduct.name}
            </h3>

            <p style={{ fontSize: '1vw', marginBottom: '2vw', lineHeight: '1.6' }}>
              Our team will contact you within 24 hours with a custom quote based on your specifications.
            </p>

            <div style={{ display: 'flex', gap: '1vw' }}>
              <Link
                href={`/products/${selectedProduct.id}`}
                style={{
                  flex: 1,
                  padding: '1vw',
                  background: '#000',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '50px',
                  fontSize: '1vw',
                  cursor: 'pointer',
                  textAlign: 'center',
                  textDecoration: 'none',
                  display: 'block'
                }}
                onClick={() => setShowQuoteModal(false)}
              >
                View Full Details
              </Link>
              <Link
                href={`/contact-page?product=${encodeURIComponent(selectedProduct.name)}`}
                style={{
                  flex: 1,
                  padding: '1vw',
                  background: '#e3fc02',
                  color: '#000',
                  border: '1px solid #000',
                  borderRadius: '50px',
                  fontSize: '1vw',
                  cursor: 'pointer',
                  textAlign: 'center',
                  textDecoration: 'none',
                  display: 'block',
                  fontWeight: '500'
                }}
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Sample Modal */}
      {showSampleModal && selectedProduct && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0,0,0,0.7)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 10000,
            padding: '2vw'
          }}
          onClick={() => setShowSampleModal(false)}
        >
          <div
            style={{
              background: '#fff',
              borderRadius: '1vw',
              padding: '3vw',
              maxWidth: '500px',
              width: '100%',
              position: 'relative'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowSampleModal(false)}
              style={{
                position: 'absolute',
                top: '1vw',
                right: '1vw',
                background: 'none',
                border: 'none',
                fontSize: '2vw',
                cursor: 'pointer',
                color: '#999'
              }}
            >
              ×
            </button>

            <div style={{ textAlign: 'center', marginBottom: '1.5vw' }}>
              <div style={{ fontSize: '3vw', marginBottom: '0.5vw' }}>📦</div>
              <h2 style={{ fontSize: '1.8vw', marginBottom: '0.5vw' }}>
                Request Free Sample
              </h2>
              <h3 style={{ fontSize: '1.2vw', color: '#666', fontWeight: '400' }}>
                {selectedProduct.name}
              </h3>
            </div>

            <p style={{ fontSize: '1vw', marginBottom: '2vw', lineHeight: '1.6', color: '#666' }}>
              Get a free sample delivered to your door. See and feel the quality before ordering.
              Our team will contact you within 24 hours.
            </p>

            <div style={{
              background: '#f6efe8',
              padding: '1vw',
              borderRadius: '0.5vw',
              marginBottom: '2vw',
              fontSize: '0.9vw'
            }}>
              <strong>What you'll receive:</strong>
              <ul style={{ margin: '0.5vw 0 0 1.5vw', padding: 0 }}>
                <li>Physical product sample</li>
                <li>Print quality examples</li>
                <li>Material specifications</li>
                <li>Pricing information</li>
              </ul>
            </div>

            <div style={{ display: 'flex', gap: '1vw' }}>
              <button
                onClick={() => setShowSampleModal(false)}
                style={{
                  flex: 1,
                  padding: '1vw',
                  background: '#fff',
                  color: '#000',
                  border: '1px solid #ccc',
                  borderRadius: '50px',
                  fontSize: '1vw',
                  cursor: 'pointer'
                }}
              >
                Cancel
              </button>
              <Link
                href={`/contact-page?product=${encodeURIComponent(selectedProduct.name)}&type=sample`}
                style={{
                  flex: 1,
                  padding: '1vw',
                  background: '#e3fc02',
                  color: '#000',
                  border: '1px solid #000',
                  borderRadius: '50px',
                  fontSize: '1vw',
                  cursor: 'pointer',
                  textAlign: 'center',
                  textDecoration: 'none',
                  display: 'block',
                  fontWeight: '500'
                }}
              >
                Request Sample
              </Link>
            </div>
          </div>
        </div>
      )}

      <Footer />

      <style jsx>{`
        /* Homepage-style card animations */
        .product-card {
          transition: all 0.3s ease;
          border-radius: 0;
        }

        .product-card:hover {
          transform: none;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
        }

        .product-card:hover > a > div:first-child {
          border-radius: 1vw 1vw 0 0;
        }

        /* Playful button animations */
        .view-product-btn {
          transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .view-product-btn:hover {
          background: #333 !important;
          transform: scale(1.05);
        }

        .quote-btn {
          transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .quote-btn:hover {
          background: #d4ec02 !important;
          transform: scale(1.05);
          box-shadow: 0 5px 15px rgba(227, 252, 2, 0.4);
        }

        /* Image container gets rounded corners on hover */
        .product-image-container {
          transition: border-radius 0.3s ease;
        }

        /* On hover: show secondary image and spinner */
        .product-card:hover .product-image-container {
          border-radius: 1vw 1vw 0 0;
        }

        .product-card:hover .product-secondary-image {
          opacity: 1 !important;
        }

        .product-card:hover .buy-spinner {
          opacity: 1 !important;
          animation: spin 8s linear infinite;
        }

        @keyframes spin {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(360deg); }
        }

        /* Colorful filter pills */
        .filter-pill {
          transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .filter-pill:hover {
          transform: translateY(-3px) scale(1.05);
          box-shadow: 0 5px 15px rgba(0,0,0,0.15);
        }

        /* Animated search & select */
        select, input[type="text"] {
          transition: all 0.3s ease;
        }

        select:hover, input[type="text"]:hover {
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(0,0,0,0.1);
        }

        select:focus, input[type="text"]:focus {
          outline: 2px solid #e3fc02;
          outline-offset: 2px;
          transform: translateY(-2px);
        }

        /* Client tile hover effects */
        .client-tile:hover {
          transform: scale(1.02);
        }

        .client-tile:hover .client-tile-bg {
          transform: scale(1.1);
        }

        @media (max-width: 768px) {
          h1 {
            font-size: 6vw !important;
          }
          p {
            font-size: 3vw !important;
          }
          input, select {
            font-size: 3vw !important;
            padding: 2vw 3vw !important;
          }
          .product-card h3 {
            font-size: 4vw !important;
          }
          .product-card p {
            font-size: 3vw !important;
          }
          .quote-btn, .view-product-btn {
            font-size: 3vw !important;
            padding: 2vw !important;
          }

          /* Reduce rotation on mobile */
          .product-card:hover {
            transform: translateY(-5px) rotate(0deg);
          }
        }
      `}</style>
    </div>
  );
}
