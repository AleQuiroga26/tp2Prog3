export default async function Productos() {

  const response = await fetch(
    "https://www.themealdb.com/api/json/v1/1/search.php?s=pizza"
  );

  const data = await response.json();
  const pizzas = data.meals;

  return (
    <main className="max-w-6xl mx-auto p-6">

      <h1 className="text-4xl font-bold mb-8 text-center">
        Especialidades de la Casa
      </h1>

      <div className="grid md:grid-cols-3 gap-6">

        {pizzas.map((pizza) => (
          <div
            key={pizza.idMeal}
            className="bg-white rounded-xl shadow-lg p-4"
          >

            <img
              src={pizza.strMealThumb}
              alt={pizza.strMeal}
              className="h-48 w-full object-cover rounded-lg"
            />

            <h2 className="font-bold mt-4">
              {pizza.strMeal}
            </h2>

          </div>
        ))}

      </div>

    </main>
  );
}