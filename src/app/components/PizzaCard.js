"use client";

import Button from "./Button";
import { useCart } from "../context/CartContext";

export default function PizzaCard({ nombre, descripcion, precio }) {

  const { addToCart } = useCart();

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 hover:scale-105 transition">

      <h2 className="text-xl font-bold text-red-700 mb-2">
        {nombre}
      </h2>

      <p className="text-gray-600">
        {descripcion}
      </p>

      <p className="text-red-600 font-bold text-lg mt-4">
        ${precio}
      </p>

      <div className="mt-4">
        <Button
          texto="Agregar pedido"
          onClick={() =>
            addToCart({
              nombre,
              descripcion,
              precio,
            })
          }
        />
      </div>

    </div>
  );
}