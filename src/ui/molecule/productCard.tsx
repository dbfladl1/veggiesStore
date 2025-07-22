'use client';

import React, { useState } from 'react';
import BasketButton from '@/ui/atom/basketButton';
import { Product } from '@/lib/interface/products';
import { useBasketStore } from '@/store/basketStore';

type Props = {
  product: Product;
};

export default function ProductCard({ product }: Props) {
  const addToBasket = useBasketStore((s) => s.addToBasket);
  const [showToast, setShowToast] = useState(false); 

  const handleClick = () => {
    addToBasket(product);
    setShowToast(true); 

    setTimeout(() => {
      setShowToast(false);
    }, 1500);
  };

  return (
    <div className="m-3 w-[210px]">
      <h3 className="mb-2 font-semibold text-lg">{product.name}</h3>
      <div className="text-sm text-[var(--main)]">
        {product.stock}개 남았어요!
      </div>
      <div className="mb-2">{product.price.toLocaleString()}원</div>
      <BasketButton clickHandler={handleClick} />
      {showToast && (
        <div className="fixed bottom-[30px] right-50 w-[400px] text-center bg-[#fff5e1] border border-[#b5b5b5] text-[#333] text-sm py-3 rounded shadow-lg">
          {product.name}을/를 바구니에 담았어요!
        </div>
      )}
    </div>
  );
}
