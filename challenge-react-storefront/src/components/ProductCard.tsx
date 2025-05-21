import { useState } from 'react';
import { Link } from 'react-router-dom';
import useCartStore from '../store/cartStore';
import Toast from './Toast';
import type { Product } from '../types/product';

export default function ProductCard({ product }: { product: Product }) {
  const addToCart = useCartStore(state => state.addToCart);
  const increment = useCartStore(state => state.increment);
  const decrement = useCartStore(state => state.decrement);
  const quantity = useCartStore(state => state.getQuantity(product.id));

  const [showToast, setShowToast] = useState(false);

  const handleAdd = () => {
    addToCart(product);
    setShowToast(true);
  };

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition flex flex-col p-4">
      <Link to={`/product/${product.id}`} className="hover:opacity-80">
        <img src={product.image} alt={product.title} className="h-48 object-contain mx-auto mb-3" />
        <h2 className="text-md font-medium mb-1 line-clamp-2">{product.title}</h2>
        <p className="text-green-600 font-semibold text-lg mb-2">${product.price.toFixed(2)}</p>
      </Link>

      {quantity === 0 ? (
        <button
          onClick={handleAdd}
          className="mt-auto bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white font-semibold py-2 px-4 rounded-lg shadow"
        >
          Add to Cart
        </button>
      ) : (
        <div className="mt-auto flex items-center justify-between bg-gray-100 px-3 py-2 rounded">
          <button
            onClick={() => decrement(product.id)}
            className="px-3 py-1 font-bold bg-red-500 text-white rounded hover:bg-red-600"
          >
            −
          </button>
          <span className="px-4 font-semibold">{quantity} added</span>
          <button
            onClick={() => increment(product.id)}
            className="px-3 py-1 font-bold bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            +
          </button>
        </div>
      )}

      {showToast && <Toast message="Added to cart!" onClose={() => setShowToast(false)} />}
    </div>
  );
}
