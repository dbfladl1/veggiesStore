import OrderSummary from '@/ui/molecule/orderSummary';
import CheckoutList from '@/ui/organism/checkoutList';
import React from 'react';

export default function CheckoutPage() {
  return (
    <>
      <CheckoutList />
      <OrderSummary/>
    </>
  );
}
