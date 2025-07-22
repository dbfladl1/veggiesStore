import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { BasketItem, Product } from '@/lib/interface/products';

interface BasketState {
  basket: BasketItem[];
  addToBasket: (product: Product) => void;
  increaseItemCount: (productId: number) => void;
  decreaseItemCount: (productId: number) => void;
  removeFromBasket: (productId: number) => void;
  clearBasket: () => void;
}

export const useBasketStore = create<BasketState>()(
  persist(
    (set, get) => ({
      basket: [],
      addToBasket: (product) => {
        const basket = get().basket;
        const exists = basket.find((item) => item.id === product.id);

        if (exists) {
          get().increaseItemCount(product.id);
        } else {
          set({ basket: [...basket, { ...product, count: 1 }] });
        }
      },
      increaseItemCount: (productId) => {
        const basket = get().basket;
        set({
          basket: basket.map((item) =>
            item.id === productId ? { ...item, count: item.count + 1 } : item
          ),
        });
      },
      decreaseItemCount: (productId) => {
        const basket = get().basket;
        set({
          basket: basket.map((item) =>
            item.id === productId
              ? {
                  ...item,
                  count: item.count !== 1 ? item.count - 1 : (item.count = 1),
                }
              : item
          ),
        });
      },
      removeFromBasket: (id) =>
        set({ basket: get().basket.filter((item) => item.id !== id) }),
      clearBasket: () => set({ basket: [] }),
    }),
    {
      name: 'basket-storage',
    }
  )
);
