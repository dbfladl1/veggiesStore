'use client';

import { fetchPoints } from '@/lib/api/point';
import { Points } from '@/lib/interface/checkout';
import {
  formatItemTotalsText,
  getDeliverFee,
  getTotalPrice,
} from '@/lib/utils/checkout';
import { useBasketStore } from '@/store/basketStore';
import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import Button from '../atom/button';

export default function OrderSummary() {
  const { data } = useQuery<Points>({
    queryKey: ['points'],
    queryFn: fetchPoints,
  });

  const points = data ? data.points : 0;

  const [usePoints, setUsePoints] = useState(true);

  const basket = useBasketStore((s) => s.basket);

  const breakdownText = formatItemTotalsText(basket);
  const deleverFee = getDeliverFee(basket);
  const totalPrice = usePoints
    ? getTotalPrice(basket) + deleverFee - points
    : getTotalPrice(basket) + deleverFee;

  const submitOrder = () => {
    alert('주문이 완료되었습니다.');
  };
  return (
    <>
      {basket.length === 0 ? (
        <div className="mt-10 text-lg">
          주문 목록이 없습니다. 
        </div>
      ) : (
        <>
          <div className="mt-5 text-right">
            <div className="text-sm"></div>
            <div className="text-sm text-[#555]">상품 : {breakdownText}</div>
            <div className="text-sm text-[#555]">
              배송비 : {deleverFee.toLocaleString()}원
            </div>
            <div>
              <label>
                <input
                  id="use-point"
                  type="checkbox"
                  className="mr-1"
                  checked={usePoints}
                  onChange={(e) => setUsePoints(e.target.checked)}
                />
                포인트 사용
                <span> ({points.toLocaleString()}원)</span>
              </label>
            </div>
            <div className="text-lg font-semibold">
              TOTAL : {totalPrice.toLocaleString()} 원
            </div>
          </div>
          <div className="text-right mt-5 mb-8">
            <Button clickHandler={submitOrder}>주문하기</Button>
          </div>
        </>
      )}
    </>
  );
}
