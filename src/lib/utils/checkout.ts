import { BasketItem } from '@/lib/interface/products';

export function getItemTotals(basket: BasketItem[]): number[] {
  return basket.map((item) => item.price * item.count);
}

export function getTotalPrice(basket: BasketItem[]): number {
  return getItemTotals(basket).reduce((sum, curr) => sum + curr, 0);
}

export function formatItemTotalsText(basket: BasketItem[]): string {
  return getItemTotals(basket)
    .map((n) => n.toLocaleString())
    .join(' + ');
}

export function getDeliverFee(basket: BasketItem[]) {
  if (getTotalPrice(basket) > 20000) {
    return 0;
  } else {
    return 3000;
  }
}
