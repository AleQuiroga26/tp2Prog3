import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { CartProvider } from "./context/CartContext";

export default function RootLayout({ children }) {
  return (
    <html>
      <body className="bg-gray-100">

        <CartProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </CartProvider>

      </body>
    </html>
  );
}