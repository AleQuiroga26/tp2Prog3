"use client";

import Link from "next/link";
import Button from "./Button";
import { useCart } from "../context/CartContext";

export default function PizzaCard({ id, nombre, descripcion, precio, imagen }) {

  const { addToCart } = useCart();

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:scale-105 transition">

      {imagen && (
        <img
          src={imagen}
          alt={nombre}
          className="h-48 w-full object-cover"
        />
      )}

      <div className="p-6">

        <h2 className="text-xl font-bold text-red-700 mb-2">
          {nombre}
        </h2>

        <p className="text-gray-600 text-sm">
          {descripcion}
        </p>

        <p className="text-red-600 font-bold text-lg mt-4">
          ${precio}
        </p>

        <div className="mt-4 flex gap-3 flex-wrap">
          <Button
            texto="Agregar pedido"
            onClick={() => addToCart({ nombre, descripcion, precio })}
          />

          {id && (
            <Link
              href={`/carta/pizzas/${id}`}
              className="text-sm text-red-600 underline hover:text-red-800 transition self-center"
            >
              Ver detalle →
            </Link>
          )}
        </div>

      </div>

    </div>
  );
}