import PizzaCard from "./components/PizzaCard";

export default async function Home() {

  const response = await fetch(
    "https://www.themealdb.com/api/json/v1/1/search.php?s=pizza"
  );
  const data = await response.json();
  const destacadas = (data.meals || []).slice(0, 3).map((meal) => ({
    id: meal.idMeal,
    nombre: meal.strMeal,
    imagen: meal.strMealThumb,
    descripcion: meal.strInstructions
      ? meal.strInstructions.slice(0, 90) + "..."
      : "Deliciosa pizza de la casa.",
    precio: "3500",
  }));

  return (
    <main className="min-h-screen w-full">

      {/* Portada */}
      <div className="relative w-full h-screen">

        <img
          src="/rocketpizza.png"
          alt="Pizza"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/20"></div>

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <h1 className="text-white text-5xl font-bold mb-4">
            Rocket Pizza
          </h1>

          <p className="text-white text-lg">
            Sabores clásicos como la pizza de mamá
          </p>
        </div>

      </div>

      {/* Pizzas destacadas */}
      <section className="max-w-6xl mx-auto py-16 px-6">

        <h2 className="text-3xl font-bold text-center mb-2">
          Pizzas Destacadas
        </h2>

        <p className="text-center text-gray-500 mb-8">
          Nuestras favoritas de la semana
        </p>

        <div className="grid md:grid-cols-3 gap-6">

          {destacadas.map((pizza) => (
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

      </section>

    </main>
  );
}