import PizzaCard from "../components/PizzaCard";

export default async function Productos() {

  const response = await fetch(
    "https://www.themealdb.com/api/json/v1/1/search.php?s=pizza"
  );

  const data = await response.json();
  const pizzasApi = data.meals || [];

  
  const pizzas = pizzasApi.map((meal) => ({
    nombre: meal.strMeal,
    descripcion: meal.strInstructions
      ? meal.strInstructions.slice(0, 80) + "..."
      : "Deliciosa pizza de la casa.",
    precio: "3500",
  }));

  return (
    <main className="max-w-6xl mx-auto p-6">

      <h1 className="text-4xl font-bold mb-2 text-center">
        Especialidades de la Casa
      </h1>

      <p className="text-center text-gray-500 mb-8">
        Pizzas traídas desde nuestra API
      </p>

      <div className="grid md:grid-cols-3 gap-6">

        {pizzas.map((pizza, index) => (
          <PizzaCard
            key={index}
            nombre={pizza.nombre}
            descripcion={pizza.descripcion}
            precio={pizza.precio}
          />
        ))}

      </div>

    </main>
  );
}
