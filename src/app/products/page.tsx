'use client';

import React, { useState } from 'react';
import ProductList from '@/ui/organism/productList';
import Search from '@/ui/molecule/search';

export default function ProductsPage() {
  const [keyword, setKeyword] = useState('');

  return (
    <>
      <div className="flex justify-end mb-3">
        <Search onSearch={setKeyword} />
      </div>
      <ProductList keyword={keyword} />
    </>
  );
}
