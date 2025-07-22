import { act } from '@testing-library/react';
import { useBasketStore } from '../basketStore';

describe('useBasketStore', () => {
  beforeEach(() => {
    // 매 테스트마다 장바구니 초기화
    useBasketStore.getState().clearBasket();
  });

  it('상품을 장바구니에 추가할 수 있다', () => {
    const product = { id: 1, name: '사과', price: 1000, stock: 10 };

    act(() => {
      useBasketStore.getState().addToBasket(product);
    });

    const basket = useBasketStore.getState().basket;
    expect(basket).toHaveLength(1);
    expect(basket[0].count).toBe(1);
  });

  it('이미 담긴 상품은 수량을 증가시킨다', () => {
    const product = { id: 1, name: '사과', price: 1000, stock: 10 };

    act(() => {
      useBasketStore.getState().addToBasket(product);
      useBasketStore.getState().addToBasket(product); // 2번 담기
    });

    const basket = useBasketStore.getState().basket;
    expect(basket).toHaveLength(1);
    expect(basket[0].count).toBe(2);
  });

  it('상품을 삭제할 수 있다', () => {
    const product = { id: 1, name: '사과', price: 1000, stock: 10 };

    act(() => {
      useBasketStore.getState().addToBasket(product);
      useBasketStore.getState().removeFromBasket(product.id);
    });

    expect(useBasketStore.getState().basket).toHaveLength(0);
  });

  it('수량을 감소시킬 수 있다', () => {
    const product = { id: 1, name: '사과', price: 1000, stock: 10 };

    act(() => {
      useBasketStore.getState().addToBasket(product);
      useBasketStore.getState().increaseItemCount(product.id);
      useBasketStore.getState().decreaseItemCount(product.id);
    });

    const item = useBasketStore.getState().basket[0];
    expect(item.count).toBe(1); // 2 → 1
  });

  it('수량은 1보다 작아지지 않는다', () => {
    const product = { id: 1, name: '사과', price: 1000, stock: 10 };

    act(() => {
      useBasketStore.getState().addToBasket(product);
      useBasketStore.getState().decreaseItemCount(product.id); // 이미 1인데 줄이기
    });

    const item = useBasketStore.getState().basket[0];
    expect(item.count).toBe(1);
  });
});