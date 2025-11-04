'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { useCart } from '@/context/CartContext';

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { itemCount } = useCart();

  return (
    <nav className="nav w-nav" aria-label="Main navigation">
      <div className="custom-css w-embed">
        <style>{`
          .marquee-track {
            position: absolute;
            width:100%;
            white-space: nowrap;
            will-change: transform;
            animation: marquee 16s linear infinite;
          }

          @keyframes marquee {
            from { transform: translateX(0); }
            to { transform: translateX(-100%); }
            }

          a {
            color: inherit;
            text-decoration: inherit;
            font-size: inherit;
          }

          .hero_products-name{
            writing-mode: vertical-lr;
          }

          @media only screen and (min-width: 768px){
            .featured_category-name{
              writing-mode: vertical-lr;
            }
          }

          .hero_products-item:hover .hero_products-blur{
            -webkit-backdrop-filter: blur(10px);
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255,255,255,.2);
          }

          .hero_products-item:hover .hero_products-view{
            opacity: 1;
          }

          .featured-product:hover .featured-product_top{
            border-radius: 1vw 1vw 0vw 0vw;
          }

          .contact-link:hover::before{
            content: "→ "
          }

          @media only screen and (max-width: 768px){
            .featured_category-name:after{
              content: "→"
            }

            .mobile-menu-button {
              display: block !important;
              font-size: 1.5rem;
              padding: 0.5rem;
              background: none;
              border: none;
              cursor: pointer;
            }

            .nav_left, .nav_right .div-block {
              display: none !important;
            }
          }

          .mobile-menu {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100vh;
            background: #f6efe8;
            z-index: 1000;
            display: flex;
            flex-direction: column;
            padding: 2rem;
            gap: 2rem;
          }

          .mobile-menu-close {
            align-self: flex-end;
            font-size: 2rem;
            cursor: pointer;
            background: none;
            border: none;
          }

          .mobile-menu-link {
            font-size: 1.5rem;
            padding: 1rem 0;
            border-bottom: 1px solid #000;
          }

          .shop-nav-btn:hover {
            background: #333 !important;
            transform: scale(1.05);
          }

          .nav-link:hover {
            background-color: #f5f5f5;
            border-color: #e0e0e0;
          }
        `}</style>
      </div>
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr auto 1fr',
        alignItems: 'center',
        width: '100%',
        padding: '0 2vw',
        gap: '2vw'
      }}>
        <nav role="navigation" style={{ display: 'flex', gap: 'clamp(8px, 0.8vw, 12px)', justifySelf: 'start', alignItems: 'center' }}>
          <Link
            href="/shop"
            style={{
              backgroundColor: '#000',
              color: '#fff',
              padding: 'clamp(8px, 0.6vw, 10px) clamp(16px, 1.5vw, 20px)',
              borderRadius: '50px',
              fontSize: 'clamp(13px, 0.95vw, 15px)',
              fontWeight: '600',
              textDecoration: 'none',
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              whiteSpace: 'nowrap'
            }}
            className="shop-nav-btn"
            aria-label="Shop all custom packaging products"
          >
            Shop All
          </Link>
          <Link
            href="/product"
            style={{
              padding: 'clamp(8px, 0.6vw, 10px) clamp(16px, 1.5vw, 20px)',
              borderRadius: '50px',
              fontSize: 'clamp(13px, 0.95vw, 15px)',
              fontWeight: '500',
              textDecoration: 'none',
              transition: 'all 0.3s ease',
              whiteSpace: 'nowrap',
              border: '1px solid transparent'
            }}
            className="nav-link"
            aria-label="Browse products by category"
          >
            Categories
          </Link>
          <Link
            href="/capabilities"
            style={{
              padding: 'clamp(8px, 0.6vw, 10px) clamp(16px, 1.5vw, 20px)',
              borderRadius: '50px',
              fontSize: 'clamp(13px, 0.95vw, 15px)',
              fontWeight: '500',
              textDecoration: 'none',
              transition: 'all 0.3s ease',
              whiteSpace: 'nowrap',
              border: '1px solid transparent'
            }}
            className="nav-link"
            aria-label="Our capabilities and services"
          >
            Capabilities
          </Link>
        </nav>
        <Link href="/" style={{ justifySelf: 'center', display: 'flex', alignItems: 'center' }} aria-label="Shureprint home">
          <Image
            src="https://cdn.prod.website-files.com/622fa56ecc9274a545158f70/625762e6d10a111af9c654bb_Shureprint.png"
            alt="Shureprint Logo"
            width={400}
            height={100}
            priority
            quality={100}
            style={{ width: 'clamp(84px, 8.4vw, 140px)', height: 'auto', imageRendering: 'crisp-edges' }}
          />
        </Link>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.8vw', justifySelf: 'end' }}>
          <button
            className="mobile-menu-button"
            onClick={() => setMobileMenuOpen(true)}
            style={{ display: 'none' }}
            aria-label="Open menu"
            aria-expanded={mobileMenuOpen}
          >
            ☰
          </button>
          <Link href="/contact-page" className="div-block w-inline-block" aria-label="Contact us">
            <div className="text-block-2">Contact</div>
          </Link>
          <Link href="/cart" style={{ marginLeft: '0.5vw', display: 'inline-flex', alignItems: 'center', position: 'relative' }} aria-label="Shopping cart">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M7 4h10l4 5v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9l4-5z" stroke="black" strokeWidth="2" fill="none"/>
              <path d="M7 4v4a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4" stroke="black" strokeWidth="2" fill="none"/>
            </svg>
            {itemCount > 0 && (
              <span style={{
                position: 'absolute',
                top: '-8px',
                right: '-8px',
                background: '#e3fc02',
                color: '#000',
                borderRadius: '50%',
                width: '20px',
                height: '20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '0.7rem',
                fontWeight: 'bold',
                border: '2px solid #fff'
              }}>
                {itemCount}
              </span>
            )}
          </Link>
          <Link
            href="https://shureprint.b2bwave.com"
            style={{
              backgroundColor: '#e3fc02',
              fontWeight: 600,
              whiteSpace: 'nowrap',
              padding: 'clamp(8px, 0.5vw, 10px) clamp(16px, 1vw, 20px)',
              borderRadius: '4px',
              fontSize: 'clamp(13px, 0.9vw, 15px)',
              textDecoration: 'none',
              color: '#000',
              minHeight: '44px',
              display: 'inline-flex',
              alignItems: 'center'
            }}
            aria-label="Login to client portal"
          >
            Login
          </Link>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="mobile-menu">
          <button className="mobile-menu-close" onClick={() => setMobileMenuOpen(false)} aria-label="Close menu">×</button>
          <Link href="/" className="mobile-menu-link" onClick={() => setMobileMenuOpen(false)} aria-label="Home">Home</Link>
          <Link href="/shop" className="mobile-menu-link" style={{ backgroundColor: '#000', color: '#fff', borderRadius: '8px', padding: '1rem', fontWeight: 'bold' }} onClick={() => setMobileMenuOpen(false)} aria-label="Shop custom packaging products">Shop Products</Link>
          <Link href="/capabilities" className="mobile-menu-link" onClick={() => setMobileMenuOpen(false)} aria-label="Our capabilities and services">Capabilities</Link>
          <Link href="/about" className="mobile-menu-link" onClick={() => setMobileMenuOpen(false)} aria-label="About Shureprint">About</Link>
          <Link href="/contact-page" className="mobile-menu-link" onClick={() => setMobileMenuOpen(false)} aria-label="Contact us">Contact</Link>
          <Link href="/cart" className="mobile-menu-link" onClick={() => setMobileMenuOpen(false)} aria-label="Shopping cart">
            Cart {itemCount > 0 && `(${itemCount})`}
          </Link>
          <Link href="https://shureprint.b2bwave.com" className="mobile-menu-link" style={{ backgroundColor: '#e3fc02', borderRadius: '8px', padding: '1rem' }} onClick={() => setMobileMenuOpen(false)} aria-label="Login to client portal">Login</Link>
        </div>
      )}
    </nav>
  );
}
