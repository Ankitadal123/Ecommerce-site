import { useState } from 'react';
import { Link } from 'react-router-dom';
import useCartStore from '../store/cartStore';
import type { Product } from '../types/product';
import { Star, StarHalf, Star as EmptyStar } from 'lucide-react';

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

  const stars = getStars(3.5); // Replace with actual rating if available

  return (
    <div className="bg-white border border-gray-200 rounded-xl shadow-md p-4 flex flex-col h-full hover:shadow-lg transition relative">
      {/* Image and Title */}
      <Link to={`/product/${product.id}`} className="flex-1 flex flex-col items-center text-center group hover:opacity-90 mb-4">
        <div className="h-48 w-full flex items-center justify-center">
          <img
            src={product.image}
            alt={product.title}
            className="h-full object-contain transition-transform group-hover:scale-105"
          />
        </div>
        <h2 className="text-sm font-semibold text-gray-900 mt-3 line-clamp-2">{product.title}</h2>
      </Link>

      {/* Rating and Price */}
      <div className="text-sm text-center mb-3">
        <div className="flex items-center justify-center gap-1 text-yellow-500">
          {stars}
        </div>
        <span className="text-gray-700 font-semibold mt-1 block">${product.price.toFixed(2)}</span>
      </div>

      {/* Quantity or Add */}
      <div className="mt-auto space-y-2 text-center">
        {quantity === 0 ? (
          <button
            onClick={handleAdd}
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 font-medium transition"
          >
            Add to Cart
          </button>
        ) : (
          <div className="flex items-center justify-center space-x-4">
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

        <Link
          to={`/product/${product.id}`}
          className="block text-sm text-blue-600 hover:underline"
        >
          View Details
        </Link>
      </div>

      {/* Toast-style message */}
      {addedMessage && (
        <div className="absolute top-4 right-4 bg-green-600 text-white px-3 py-1 rounded shadow text-sm animate-fade-in">
          Added to cart
        </div>
      )}
    </div>
  );
}

// Star rendering helper
function getStars(rating: number) {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5;
  const empty = 5 - full - (half ? 1 : 0);

  return (
    <>
      {[...Array(full)].map((_, i) => <Star key={`f-${i}`} className="w-4 h-4 fill-current" />)}
      {half && <StarHalf key="half" className="w-4 h-4 fill-current" />}
      {[...Array(empty)].map((_, i) => <EmptyStar key={`e-${i}`} className="w-4 h-4 text-gray-300" />)}
    </>
  );
}
