import { useState } from 'react';
import type { Product } from '../types/product';
import useCartStore from '../store/cartStore';
import Toast from './Toast';

export default function ProductCard({ product }: { product: Product }) {
  const addToCart = useCartStore(state => state.addToCart);
  const [showToast, setShowToast] = useState(false);

  const handleAdd = () => {
    addToCart(product);
    setShowToast(true);
  };

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow flex flex-col p-4 relative">
      <img src={product.image} alt={product.title} className="h-48 object-contain mx-auto mb-4" />
      <h2 className="text-md font-medium mb-1 line-clamp-2">{product.title}</h2>
      <p className="text-green-600 font-semibold text-lg mb-3">${product.price.toFixed(2)}</p>
      <button
        onClick={handleAdd}
        className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white font-semibold py-2 px-4 rounded-lg shadow mt-auto"
      >
        Add to Cart
      </button>
      {showToast && <Toast message="Added to cart!" onClose={() => setShowToast(false)} />}
    </div>
  );
}

