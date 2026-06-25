import Link from "next/link";
import BotonAgregarDetalle from "../../../components/BotonAgregarDetalle";

export default async function PizzaDetalle({ params }) {

  const { id } = await params;

  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
  );
  const data = await response.json();
  const meal = data.meals?.[0];

  if (!meal) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        <p>Pizza no encontrada.</p>
      </div>
    );
  }

  const pizza = {
    nombre: meal.strMeal,
    desc: meal.strInstructions
      ? meal.strInstructions.slice(0, 150) + "..."
      : "Deliciosa pizza de la casa.",
    precio: "$3500",
    imagen: meal.strMealThumb,
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center">

      <div
        className="absolute inset-0 bg-cover bg-center blur-md scale-110"
        style={{ backgroundImage: `url('${pizza.imagen}')` }}
      />

      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 w-full max-w-md px-6">

        <div className="bg-white/20 backdrop-blur-lg border border-white/30 p-6 rounded-2xl shadow-xl text-white">

          <img
            src={pizza.imagen}
            alt={pizza.nombre}
            className="w-full h-48 object-cover rounded-xl mb-4"
          />

          <h1 className="text-3xl font-extrabold mb-2">
            🍕 {pizza.nombre}
          </h1>

          <p className="text-gray-200 mb-4 text-sm">
            {pizza.desc}
          </p>

          <div className="mb-6">
            <span className="text-sm text-gray-300">Precio</span>
            <p className="text-2xl font-bold text-red-400">
              {pizza.precio}
            </p>
          </div>

          <BotonAgregarDetalle pizza={{ nombre: pizza.nombre, descripcion: pizza.desc, precio: pizza.precio }} />

          <div className="text-center mt-4">
            <Link
              href="/carta"
              className="text-gray-200 text-sm hover:text-white transition"
            >
              ← Volver a la carta
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}
