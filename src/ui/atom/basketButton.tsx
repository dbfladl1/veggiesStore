import React, { MouseEventHandler } from 'react';
import basket from '@/assets/image/basket.png';
import Image from 'next/image';

interface Prop {
  clickHandler?: MouseEventHandler<HTMLButtonElement>;
}

export default function BasketButton({ clickHandler }: Prop) {
  return (
    <button
      onClick={clickHandler}
      className="p-2 border border-[#D5D5D5]  active:border-[#333] rounded-sm flex justify-center mb-2 w-full"
    >
      <div className="flex items-center gap-1">
        <Image src={basket} alt="바구니 아이콘" className="block" />
        <span className="text-[#333]">담기</span>
      </div>
    </button>
  );
}
