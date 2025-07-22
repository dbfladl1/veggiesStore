import React from 'react';
import Link from 'next/link';

export default function NavMenu() {
  return (
    <ul className='flex gap-7'>
      <li>
        <Link href="/products">All veggies</Link>
      </li>
      <li>
        <Link href="/basket">My basket</Link>
      </li>
      <li>
        <Link href="/checkout">Check out</Link>
      </li>
    </ul>
  );
}
