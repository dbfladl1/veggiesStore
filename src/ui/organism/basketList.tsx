'use client';

import React from 'react';
import BasketCard from '@/ui/molecule/basketCard';
import { useBasketStore } from '@/store/basketStore';
import Button from '../atom/button';

export default function BasketList() {
  const myCart = useBasketStore((s) => s.basket);
  const clearBasket = useBasketStore((s) => s.clearBasket);
  return (
    <div className="mt-5">
      {myCart.length === 0 ? (
        <div className="mt-10 text-lg">
          바구니가 비었습니다. 상품을 담아주세요 🥕
        </div>
      ) : (
        <>
          {myCart.map((item) => (
            <BasketCard product={item} />
          ))}
          <div className="flex justify-end mt-10">
            <Button clickHandler={clearBasket}>바구니 비우기</Button>
          </div>
        </>
      )}
    </div>
  );
}
