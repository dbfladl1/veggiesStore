import { Product } from '../interface/products';

export async function fetchProducts(): Promise<Product[]> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_APP_BASE_URL}/products`);

  if (!res.ok) {
    throw new Error('상품 목록을 불러오지 못했습니다.');
  }

  const data = await res.json();

  return data;
}
