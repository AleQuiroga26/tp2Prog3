import PizzaCard from "./components/PizzaCard";

export default function Home() {

  const pizzas = [
    {
      nombre: "Muzzarella",
      descripcion: "La clásica de siempre",
      precio: 12000,
    },
    {
      nombre: "Napolitana",
      descripcion: "Tomate y ajo fresco",
      precio: 14000,
    },
    {
      nombre: "Fugazzeta",
      descripcion: "Cebolla caramelizada y mucho queso",
      precio: 15000,
    },
  ];

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

        <h2 className="text-3xl font-bold text-center mb-8">
          Pizzas Destacadas
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          {pizzas.map((pizza) => (
            <PizzaCard
              key={pizza.nombre}
              nombre={pizza.nombre}
              descripcion={pizza.descripcion}
              precio={pizza.precio}
            />
          ))}

        </div>

      </section>

    </main>
  );
}