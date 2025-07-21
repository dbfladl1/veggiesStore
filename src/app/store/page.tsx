'use client'

import { fetchProducts } from '@/lib/api/products';
import React, { useEffect } from 'react';

export default function StorePage() {
  useEffect(() => {
    console.log("d")
    fetchProducts();
  }, []);
  return <div>pddage</div>;
}
