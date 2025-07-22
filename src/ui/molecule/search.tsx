'use client';

import React, { useEffect, useState } from 'react';
import Button from '../atom/button';
import { useRouter, useSearchParams } from 'next/navigation';

interface SearchProps {
  onSearch: (keyword: string) => void;
}

export default function Search({ onSearch }: SearchProps) {
  const [keyword, setKeyword] = useState('');
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleSearch = () => {
    router.push(`?name=${keyword}`);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  useEffect(() => {
    const name = searchParams.get('name') || '';
    setKeyword(name);
    onSearch(name);
  }, [searchParams]);

  return (
    <div>
      <label htmlFor="product-name" className="sr-only">
        검색어 입력
      </label>
      <input
        id="product-name"
        type="search"
        placeholder="상품명을 입력하세요" 
        className="border border-[#d5d5d5] p-1 rounded-sm mr-2"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        onKeyDown={(e) => handleKeyDown(e)}
      />
      <Button clickHandler={handleSearch}>search</Button>
    </div>
  );
}
