import PizzaCard from "../components/PizzaCard";

export default async function Carta() {

  const response = await fetch(
    "https://www.themealdb.com/api/json/v1/1/search.php?s=pizza"
  );

  const data = await response.json();
  const pizzasApi = data.meals || [];

  const pizzas = pizzasApi.map((meal) => ({
    id: meal.idMeal,
    nombre: meal.strMeal,
    imagen: meal.strMealThumb,
    descripcion: meal.strInstructions
      ? meal.strInstructions.slice(0, 90) + "..."
      : "Deliciosa pizza de la casa.",
    precio: "3500",
  }));

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6">

      <div className="max-w-6xl mx-auto">

        <h1 className="text-4xl font-extrabold text-center mb-2 text-gray-800">
          🍕 Nuestra Carta
        </h1>

        <p className="text-center text-gray-500 mb-10">
          Pizzas traídas desde nuestra API · Agregá las que quieras al carrito
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {pizzas.map((pizza) => (
            <PizzaCard
              key={pizza.id}
              id={pizza.id}
              nombre={pizza.nombre}
              descripcion={pizza.descripcion}
              precio={pizza.precio}
              imagen={pizza.imagen}
            />
          ))}
        </div>

      </div>

    </div>
  );
}