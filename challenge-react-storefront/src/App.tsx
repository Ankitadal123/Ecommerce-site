import {Link, Routes, Route, NavLink } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import ProductDetail from './pages/ProductDetail';
import { ShoppingCart, Home as HomeIcon } from 'lucide-react'; // Install this icon lib

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-md sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-blue-600 hover:opacity-80 transition">
      🛍️ DVT Store
    </Link>
          <nav className="flex gap-4 text-sm font-medium">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `flex items-center gap-1 px-3 py-2 rounded-lg transition ${
                  isActive ? 'bg-blue-100 text-blue-700' : 'hover:text-blue-600'
                }`
              }
            >
              <HomeIcon className="h-4 w-4" /> Home
            </NavLink>
            <NavLink
              to="/cart"
              className={({ isActive }) =>
                `flex items-center gap-1 px-3 py-2 rounded-lg transition ${
                  isActive ? 'bg-blue-100 text-blue-700' : 'hover:text-blue-600'
                }`
              }
            >
              <ShoppingCart className="h-4 w-4" /> Cart
            </NavLink>
          </nav>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product/:id" element={<ProductDetail />} />
        </Routes>
      </main>
    </div>
  );
}


