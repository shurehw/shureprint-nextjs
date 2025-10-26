'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="nav w-nav">
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
          }

          .mobile-menu {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100vh;
            background: #f5efe5;
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
        `}</style>
      </div>
      <div className="nav-contain">
        <nav role="navigation" className="nav_left w-nav-menu">
          <Link href="/about" className="div-block w-inline-block">
            <div className="text-block-2">About</div>
          </Link>
          <Link href="/capabilities" className="div-block w-inline-block">
            <div className="text-block-2">Capabilities</div>
          </Link>
        </nav>
        <Link href="/" className="nav_logo w-nav-brand w--current" aria-label="home">
          <div className="sr-only">Two Two Logo</div>
          <img
            src="https://cdn.prod.website-files.com/622fa56ecc9274a545158f70/625762e6d10a111af9c654bb_Shureprint.png"
            alt="Shureprint Logo"
            loading="lazy"
          />
        </Link>
        <div className="nav_right" style={{ display: 'flex', alignItems: 'center', gap: '2vw' }}>
          <button
            className="mobile-menu-button"
            onClick={() => setMobileMenuOpen(true)}
            style={{ display: 'none' }}
            aria-label="Open menu"
          >
            ☰
          </button>
          <Link href="/shop" className="div-block w-inline-block">
            <div className="text-block-2">Shop</div>
          </Link>
          <Link href="/contact-page" className="div-block w-inline-block">
            <div className="text-block-2">Contact</div>
          </Link>
          <Link href="https://shureprint.b2bwave.com/" className="nav_cart w-inline-block" style={{ marginLeft: '0.5vw' }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7 4h10l4 5v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9l4-5z" stroke="black" strokeWidth="2" fill="none"/>
              <path d="M7 4v4a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4" stroke="black" strokeWidth="2" fill="none"/>
            </svg>
          </Link>
          <Link
            href="https://shureprint.b2bwave.com"
            className="div-block w-inline-block"
            style={{
              backgroundColor: '#e3fc02',
              fontWeight: 600
            }}
          >
            <div className="text-block-2">Client Portal →</div>
          </Link>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="mobile-menu">
          <button className="mobile-menu-close" onClick={() => setMobileMenuOpen(false)}>×</button>
          <Link href="/" className="mobile-menu-link" onClick={() => setMobileMenuOpen(false)}>Home</Link>
          <Link href="/about" className="mobile-menu-link" onClick={() => setMobileMenuOpen(false)}>About</Link>
          <Link href="/capabilities" className="mobile-menu-link" onClick={() => setMobileMenuOpen(false)}>Capabilities</Link>
          <Link href="/shop" className="mobile-menu-link" onClick={() => setMobileMenuOpen(false)}>Shop</Link>
          <Link href="/contact-page" className="mobile-menu-link" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
          <Link href="https://shureprint.b2bwave.com/" className="mobile-menu-link" onClick={() => setMobileMenuOpen(false)}>Cart</Link>
          <Link href="https://shureprint.b2bwave.com" className="mobile-menu-link" style={{ backgroundColor: '#e3fc02', borderRadius: '8px', padding: '1rem' }} onClick={() => setMobileMenuOpen(false)}>Client Portal →</Link>
        </div>
      )}
    </nav>
  );
}
