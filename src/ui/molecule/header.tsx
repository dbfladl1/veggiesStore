import React from 'react';
import Image from 'next/image';
import logo from '@/assets/image/logo-orange.png';
import NavMenu from '../atom/navMenu';

export default function Header() {
  return (
    <div className='flex justify-between items-center'>
      <Image src={logo} alt="로고" className="block w-[180px] object-contain" />
      <NavMenu />
    </div>
  );
}
