//import { useState } from 'react';
import { Link, Routes, Route, NavLink } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import ProductDetail from './pages/ProductDetail';
import { ShoppingCart, Home as HomeIcon } from 'lucide-react';

export default function App() {
  //const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center gap-4">
          {/* Logo */}
          <Link
            to="/"
            className="text-2xl font-bold text-blue-600 hover:opacity-80 transition whitespace-nowrap"
          >
            🛍️ DVT Store
          </Link>

          {/* Centered search bar */}
          <div className="flex-1">
            
          </div>

          {/* Navigation */}
          <nav className="flex gap-2 text-sm font-medium whitespace-nowrap">
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

      {/* Routes */}
      <main className="max-w-6xl mx-auto px-6 py-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="*" element={<p className="text-center text-red-500 py-10">Page not found.</p>} />

        </Routes>
      </main>
    </div>
  );
}
