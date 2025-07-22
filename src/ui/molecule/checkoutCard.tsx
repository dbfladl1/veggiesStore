import { BasketItem } from '@/lib/interface/products';
import React from 'react';

interface Props {
  product: BasketItem;
}

export default function CheckoutCard({ product }: Props) {
  return (
    <div className="flex justify-between border-b border-[#aaa] py-3">
      <div>
        <div className='font-semibold'>{product.name}</div>
        <div>수량: {product.count}</div>
        <div>
          가격 : {product.price.toLocaleString()}원 /{' '}
          {(product.price * product.count).toLocaleString()}원
        </div>
      </div>
      <div className="flex items-center"></div>
    </div>
  );
}
