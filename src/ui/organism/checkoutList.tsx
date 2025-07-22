'use client';

import React from 'react';
import { useBasketStore } from '@/store/basketStore';
import CheckoutCard from '@/ui/molecule/checkoutCard';

export default function CheckoutList() {
  const myCart = useBasketStore((s) => s.basket);
  return (
    <div className="mt-5">
      {myCart.map((item) => (
        <CheckoutCard product={item} />
      ))}
    </div>
  );
}
