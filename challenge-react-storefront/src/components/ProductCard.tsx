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
    <div className="border bg-white rounded p-4 flex flex-col shadow-sm">
      <img src={product.image} alt={product.title} className="h-40 object-contain mb-2" />
      <h2 className="font-semibold text-sm mb-1 line-clamp-2">{product.title}</h2>
      <p className="text-lg font-bold text-green-700 mb-2">${product.price}</p>
      <button
        onClick={handleAdd}
        className="mt-auto bg-blue-600 hover:bg-blue-700 text-white py-1 px-3 rounded transition"
      >
        Add to Cart
      </button>
      {showToast && <Toast message="Added to cart!" onClose={() => setShowToast(false)} />}
    </div>
  );
}
