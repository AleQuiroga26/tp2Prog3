import Link from "next/link";
import BotonAgregarDetalle from "../../../components/BotonAgregarDetalle";

export default async function PizzaDetalle({ params }) {
  const pizzas = {
    muzzarella: {
      nombre: "Muzzarella",
      desc: "Salsa de tomate, abundante queso muzzarella y orégano",
      precio: "$3500"
    },
    napolitana: {
      nombre: "Napolitana",
      desc: "Tomate, ajo y perejil",
      precio: "$4000"
    },
    fugazzeta: {
      nombre: "Fugazzeta",
      desc: "Cebolla y queso",
      precio: "$4200"
    }
  };

  const resolvedParams = await params;
  const pizza = pizzas[resolvedParams.id];

  return (
    <div className="relative min-h-screen flex items-center justify-center">
      

      <div
        className="absolute inset-0 bg-cover bg-center blur-md scale-110"
        style={{ backgroundImage: "url('/pizza1.jpg')" }}
      />


      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 w-full max-w-md px-6">
        
        <div className="bg-white/20 backdrop-blur-lg border border-white/30 p-6 rounded-2xl shadow-xl text-white">
          
          <h1 className="text-3xl font-extrabold mb-2">
            🍕 {pizza.nombre}
          </h1>

          <p className="text-gray-200 mb-4">
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
              href="/carta/pizzas"
              className="text-gray-200 text-sm hover:text-white transition"
            >
              ← Volver al menú
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}