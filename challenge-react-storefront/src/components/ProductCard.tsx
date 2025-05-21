import { useState } from 'react';
import { Link } from 'react-router-dom';
import useCartStore from '../store/cartStore';
import type { Product } from '../types/product';

export default function ProductCard({ product }: { product: Product }) {
  const addToCart = useCartStore(state => state.addToCart);
  const increment = useCartStore(state => state.increment);
  const decrement = useCartStore(state => state.decrement);
  const quantity = useCartStore(state => state.getQuantity(product.id));

  const [addedMessage, setAddedMessage] = useState(false);

  const handleAdd = () => {
    addToCart(product);
    setAddedMessage(true);
    setTimeout(() => setAddedMessage(false), 2000);
  };

  return (
    <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow hover:shadow-xl transition duration-300 flex flex-col p-4 group relative">
      <Link to={`/product/${product.id}`} className="mb-4 flex flex-col items-center gap-2 group-hover:opacity-90">
        <div className="h-48 w-full flex items-center justify-center">
          <img
            src={product.image}
            alt={product.title}
            className="h-full object-contain transition-transform group-hover:scale-105"
          />
        </div>
        <h2 className="text-md font-semibold text-gray-800 text-center line-clamp-2">
          {product.title}
        </h2>
      </Link>

      <div className="text-center mb-3">
        <p className="text-lg font-bold text-green-700">${product.price.toFixed(2)}</p>
      </div>

      {quantity === 0 ? (
        <button
          onClick={handleAdd}
          className="mt-auto w-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white font-medium py-2 rounded-lg shadow transition"
        >
          Add to Cart
        </button>
      ) : (
        <div className="mt-auto flex items-center justify-center space-x-4">
          <button
            onClick={() => decrement(product.id)}
            className="w-8 h-8 rounded-full bg-red-500 text-white font-bold hover:bg-red-600 transition"
          >
            −
          </button>
          <span className="font-medium text-gray-800">{quantity}</span>
          <button
            onClick={() => increment(product.id)}
            className="w-8 h-8 rounded-full bg-blue-600 text-white font-bold hover:bg-blue-700 transition"
          >
            +
          </button>
        </div>
      )}

      {addedMessage && (
        <div className="absolute top-4 right-4 bg-green-600 text-white px-3 py-1 rounded shadow text-sm animate-fade-in">
          Added to cart
        </div>
      )}
    </div>
  );
}
