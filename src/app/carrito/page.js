"use client";

import { useCart } from "../context/CartContext";

export default function Carrito() {
  const { cart, removeFromCart } = useCart();

  const total = cart.reduce(
    (acum, pizza) => acum + pizza.precio,
    0
  );

  return (
    <main className="max-w-5xl mx-auto p-8 min-h-screen">

      <h1 className="text-4xl font-bold mb-8">
        Mis Pedidos
      </h1>

      {cart.length === 0 ? (
        <p>No hay pedidos cargados.</p>
      ) : (
        <>
          <div className="space-y-4">

            {cart.map((pizza, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow p-4 flex justify-between items-center"
              >
                <div>
                  <h2 className="font-bold text-red-700">
                    {pizza.nombre}
                  </h2>

                  <p className="text-gray-600">
                    {pizza.descripcion}
                  </p>

                  <button
                    onClick={() => removeFromCart(index)}
                    className="mt-3 bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded-lg transition"
                  >
                    Eliminar
                  </button>
                </div>

                <p className="font-bold text-red-600">
                  ${pizza.precio}
                </p>
              </div>
            ))}

          </div>

          <div className="mt-8 text-right">
            <h2 className="text-2xl font-bold">
              Total: ${total}
            </h2>
          </div>
        </>
      )}

    </main>
  );
}