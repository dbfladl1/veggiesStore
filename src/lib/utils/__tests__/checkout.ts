import {
  getItemTotals,
  getTotalPrice,
  formatItemTotalsText,
  getDeliverFee,
} from '../checkout';

const basket = [
  { id: 1, name: '사과', price: 1000, count: 2, stock: 5 },
  { id: 2, name: '배', price: 3000, count: 1, stock: 3 },
];

describe('checkout utils', () => {
  it('상품별 합계 구하기', () => {
    expect(getItemTotals(basket)).toEqual([2000, 3000]);
  });

  it('총 금액 계산', () => {
    expect(getTotalPrice(basket)).toBe(5000);
  });

  it('포맷된 금액 텍스트', () => {
    expect(formatItemTotalsText(basket)).toBe('2,000 + 3,000');
  });

  it('배송비 계산 - 2만원 미만', () => {
    expect(getDeliverFee(basket)).toBe(3000);
  });

  it('배송비 계산 - 2만원 이상', () => {
    const expensiveBasket = [{ id: 3, name: '컴퓨터', price: 21000, count: 1, stock: 1 }];
    expect(getDeliverFee(expensiveBasket)).toBe(0);
  });
});
