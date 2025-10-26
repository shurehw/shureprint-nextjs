'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { createCart, addToCart as addToCartAPI, getCart } from '@/lib/bigcommerce-rest';

interface CartItem {
  product_id: number;
  quantity: number;
  variant_id?: number;
}

interface CartContextType {
  cartId: string | null;
  itemCount: number;
  addToCart: (item: CartItem) => Promise<void>;
  isLoading: boolean;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cartId, setCartId] = useState<string | null>(null);
  const [itemCount, setItemCount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCartId = localStorage.getItem('bc_cart_id');
    if (savedCartId) {
      setCartId(savedCartId);
      // Optionally fetch cart to get item count
      fetchCartItemCount(savedCartId);
    }
  }, []);

  const fetchCartItemCount = async (id: string) => {
    try {
      const cart = await getCart(id);
      const count = cart.line_items?.physical_items?.reduce(
        (total: number, item: any) => total + item.quantity,
        0
      ) || 0;
      setItemCount(count);
    } catch (error) {
      console.error('Error fetching cart:', error);
      // Clear invalid cart
      localStorage.removeItem('bc_cart_id');
      setCartId(null);
    }
  };

  const addToCart = async (item: CartItem) => {
    setIsLoading(true);
    try {
      const lineItem = {
        quantity: item.quantity,
        product_id: item.product_id,
        ...(item.variant_id && { variant_id: item.variant_id }),
      };

      if (cartId) {
        // Add to existing cart
        const updatedCart = await addToCartAPI(cartId, [lineItem]);
        const count = updatedCart.line_items?.physical_items?.reduce(
          (total: number, item: any) => total + item.quantity,
          0
        ) || 0;
        setItemCount(count);
      } else {
        // Create new cart
        const newCart = await createCart([lineItem]);
        setCartId(newCart.id);
        localStorage.setItem('bc_cart_id', newCart.id);
        setItemCount(item.quantity);
      }
    } catch (error) {
      console.error('Error adding to cart:', error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <CartContext.Provider value={{ cartId, itemCount, addToCart, isLoading }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
