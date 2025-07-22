'use client';

import React, { useState } from 'react';
import Button from '../atom/button';
import { BasketItem } from '@/lib/interface/products';
import { useBasketStore } from '@/store/basketStore';

interface Props {
  product: BasketItem;
}
export default function BasketCard({ product }: Props) {
  const increaseItemCount = useBasketStore((s) => s.increaseItemCount);
  const decreaseItemCount = useBasketStore((s) => s.decreaseItemCount);
  const removeItem = useBasketStore((s) => s.removeFromBasket);

  return (
    <div className="flex justify-between border-b border-[#aaa] py-3">
      <div>
        <div className='font-semibold'>{product.name}</div>
        <div>
          수량:
          <button
            onClick={() => decreaseItemCount(product.id)}
            className="px-1 bg-gray-100 border border-gray-300 rounded-sm"
          >
            -
          </button>
          <input
            type="text"
            value={product.count}
            className="w-5 border border-[#d5d5d5] px-1 m-1"
          />
          <button
            onClick={() => increaseItemCount(product.id)}
            className="px-1 bg-gray-100 border border-gray-300 rounded-sm"
          >
            +
          </button>
        </div>
        <div>
          가격 : {product.price.toLocaleString()}원 /{' '}
          {(product.price * product.count).toLocaleString()}원
        </div>
      </div>
      <div className="flex items-center">
        <Button clickHandler={() => removeItem(product.id)}>삭제</Button>
      </div>
    </div>
  );
}
