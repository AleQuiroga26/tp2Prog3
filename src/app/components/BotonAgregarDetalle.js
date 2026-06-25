"use client";

import { useCart } from "../context/CartContext";
import Button from "./Button";

export default function BotonAgregarDetalle({ pizza }) {
  const { addToCart } = useCart();

  return (
    <Button
      texto="Pedir ahora"
      onClick={() => addToCart(pizza)}
    />
  );
}
