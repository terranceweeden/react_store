"use client";

import { Toaster } from "react-hot-toast";
import App from "./_app";
import AppLayout from "./components/Layout";
import { CartProvider } from "use-shopping-cart";

export default function Home() {
  const stripeKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY;

  return (
    <CartProvider cartMode="checkout-session" stripe={stripeKey} currency="USD">
      <App />
      <Toaster />
    </CartProvider>
  );
}
