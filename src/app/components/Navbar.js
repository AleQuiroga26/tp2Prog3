"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCart } from "../context/CartContext";

export default function Navbar() {
  const pathname = usePathname();
  const { cart } = useCart();

  const linkStyle = (path) =>
    `relative px-1 py-1 transition ${
      pathname === path
        ? "text-yellow-300"
        : "text-white hover:text-yellow-300"
    }`;

  const underline = (path) =>
    `absolute left-0 -bottom-1 h-[2px] bg-yellow-300 transition-all duration-300 ${
      pathname === path ? "w-full" : "w-0 group-hover:w-full"
    }`;

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-gradient-to-r from-red-600/90 to-orange-500/90 border-b border-white/10 shadow-lg">
      
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        
        <Link href="/" className="flex items-center gap-2 group">
          <h1 className="text-2xl font-extrabold tracking-wide">
            Rocket Pizza
          </h1>
        </Link>

        <div className="flex items-center gap-8 text-sm font-medium">
          
          <Link href="/" className={`group ${linkStyle("/")}`}>
            Inicio
            <span className={underline("/")}></span>
          </Link>

          <Link href="/carta" className={`group ${linkStyle("/carta")}`}>
            Carta
            <span className={underline("/carta")}></span>
          </Link>

          <Link href="/productos" className={`group ${linkStyle("/productos")}`}>
            Productos
            <span className={underline("/productos")}></span>
          </Link>

          <Link href="/sucursales" className={`group ${linkStyle("/sucursales")}`}>
            Sucursales
            <span className={underline("/sucursales")}></span>
          </Link>

          <Link href="/contacto" className={`group ${linkStyle("/contacto")}`}>
            Contacto
            <span className={underline("/contacto")}></span>
          </Link>
          
          <Link
            href="/carrito"
            className="bg-yellow-300 text-black px-3 py-1 rounded-full font-bold shadow-md hover:bg-yellow-400 transition"
          >
            Pedidos: {cart.length}
          </Link>

        </div>
      </div>
    </nav>
  );
}