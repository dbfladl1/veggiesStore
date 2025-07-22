'use client';

import React, { useMemo } from 'react';
import { useQuery } from '@tanstack/react-query';
import ProductCard from '../molecule/productCard';
import { fetchProducts } from '@/lib/api/products';
import { Product } from '@/lib/interface/products';
import SkeletonProductCard from '../molecule/skeletonProductCard';

interface ProductListProps {
  keyword: string;
}

export default function ProductList({ keyword }: ProductListProps) {
  const { data, isLoading, error } = useQuery<Product[]>({
    queryKey: ['products', keyword],
    queryFn: fetchProducts,
  });

  const filtered = useMemo(() => {
    if (!data) return [];
    return keyword ? data.filter((item) => item.name.includes(keyword)) : data;
  }, [data, keyword]);

  if (isLoading)
    return (
      <div className="flex flex-wrap gap-5">
        {Array.from({ length: 6 }).map((_, idx) => (
          <SkeletonProductCard key={idx} />
        ))}
      </div>
    );
  if (error) return <div>오류 발생</div>;

  return (
    <div className="flex flex-wrap gap-5">
      {filtered?.map((product, index) => (
        <ProductCard key={index} product={product} />
      ))}
    </div>
  );
}
