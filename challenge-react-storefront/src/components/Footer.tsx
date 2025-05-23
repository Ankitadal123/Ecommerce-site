import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300 py-10 mt-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Company Info */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-3">DVT Store</h4>
          <p className="text-sm">
            Your trusted tech and lifestyle shop. Fast, simple, secure.
          </p>
        </div>

        {/* Links */}
        <div>
          <h5 className="text-sm font-semibold text-white mb-2">Shop</h5>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:underline">Home</Link></li>
            <li><Link to="/cart" className="hover:underline">Cart</Link></li>
            <li><Link to="/checkout" className="hover:underline">Checkout</Link></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h5 className="text-sm font-semibold text-white mb-2">Support</h5>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:underline">Contact Us</a></li>
            <li><a href="#" className="hover:underline">Returns</a></li>
            <li><a href="#" className="hover:underline">FAQs</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h5 className="text-sm font-semibold text-white mb-2">Newsletter</h5>
          <p className="text-sm mb-3">Get weekly updates and deals.</p>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-3 py-2 rounded-md text-gray-900 text-sm"
          />
          <button className="mt-2 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">
            Subscribe
          </button>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
        &copy; {new Date().getFullYear()} DVT Store. All rights reserved.
      </div>
    </footer>
  );
}
