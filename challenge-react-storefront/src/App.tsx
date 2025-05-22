import { Link, Routes, Route, NavLink, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import ProductDetail from './pages/ProductDetail';
import Login from './pages/Login';
import useAuthStore from './store/authStore';
import { ShoppingCart, Home as HomeIcon, User } from 'lucide-react';

export default function App() {
  const location = useLocation();
  const isHome = location.pathname === '/';

  const { isLoggedIn, email, logout } = useAuthStore();

  const getNameFromEmail = (email: string | null): string => {
    if (!email) return '';
    const namePart = email.split('@')[0];
    const words = namePart.match(/[a-zA-Z]+/g) || [];
    return words
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  const displayName = getNameFromEmail(email);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          {/* Logo */}
          <Link
            to="/"
            className="text-2xl font-bold text-blue-600 hover:opacity-80 transition whitespace-nowrap"
          >
            🛍️ DVT Store
          </Link>

          {/* Optional Search bar (for Home) */}
          {isHome && (
            <div className="w-full sm:flex-1">
              {/* If you want to re-enable search state here later */}
              {/* <input ... /> */}
            </div>
          )}

          {/* Navigation + Auth */}
          <div className="flex items-center gap-4 whitespace-nowrap">
            {/* Navigation */}
            <nav className="flex gap-2 text-sm font-medium">
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

            {/* Auth section */}
            {isLoggedIn ? (
              <div className="flex items-center gap-3 text-sm font-medium text-gray-700">
                <div className="flex items-center gap-1">
                  <User className="h-4 w-4 text-blue-600" />
                  <span className="text-blue-700 font-semibold">{displayName}</span>
                </div>
                <button
                  onClick={logout}
                  className="px-3 py-2 rounded-lg text-sm text-blue-600 hover:bg-blue-100 transition"
                >
                  Logout
                </button>
              </div>
            ) : (
              <NavLink
                to="/login"
                className="text-sm px-3 py-2 rounded-lg text-blue-600 hover:bg-blue-100 transition"
              >
                Login
              </NavLink>
            )}
          </div>
        </div>
      </header>

      {/* Routes */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="*"
            element={<p className="text-center text-red-500 py-10">Page not found.</p>}
          />
        </Routes>
      </main>
    </div>
  );
}
