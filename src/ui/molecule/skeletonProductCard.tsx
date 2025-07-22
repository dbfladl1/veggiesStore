import React from 'react';
import BasketButton from '../atom/basketButton';

export default function SkeletonProductCard() {
  return (
    <div className="m-3 w-[210px]">
      <div className="h-6 bg-gray-200 rounded animate-pulse mb-2" />
      <div className="h-4 bg-gray-200 rounded animate-pulse w-2/3 mb-2" />
      <div className="h-4 bg-gray-200 rounded animate-pulse w-1/2 mb-4" />
      <BasketButton clickHandler={() => {}} />
    </div>
  );
}
