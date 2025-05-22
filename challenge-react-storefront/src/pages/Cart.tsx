import useCartStore from '../store/cartStore';
import { Trash2, Minus, Plus } from 'lucide-react';

export default function Cart() {
  const cart = useCartStore(state => state.cart);
  const increment = useCartStore(state => state.increment);
  const decrement = useCartStore(state => state.decrement);
  const removeItem = useCartStore(state => state.removeFromCart);

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const tax = subtotal * 0.1;
  const shipping = cart.length > 0 ? 5 : 0;
  const total = subtotal + tax + shipping;

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-blue-700 mb-6">My Cart ({cart.length})</h1>

      {cart.length === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3 overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="bg-gray-100 font-semibold text-gray-600 uppercase">
                <tr>
                  <th className="p-3 text-left">Thumb</th>
                  <th className="p-3 text-left">Product</th>
                  <th className="p-3 text-left">Unit $</th>
                  <th className="p-3 text-center">Qty</th>
                  <th className="p-3 text-right">Subtotal</th>
                  <th className="p-3 text-center">Remove</th>
                </tr>
              </thead>
              <tbody>
                {cart.map(item => (
                  <tr key={item.id} className="border-b hover:bg-gray-50">
                    <td className="p-3">
                      <img src={item.image} alt={item.title} className="h-16 w-16 object-contain" />
                    </td>
                    <td className="p-3 font-medium text-gray-800">{item.title}</td>
                    <td className="p-3 text-gray-700">${item.price.toFixed(2)}</td>
                    <td className="p-3">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => decrement(item.id)}
                          className="rounded-full bg-gray-200 w-8 h-8 flex items-center justify-center text-sm hover:bg-gray-300"
                        >
                          <Minus size={16} />
                        </button>
                        <span>{item.quantity}</span>
                        <button
                          onClick={() => increment(item.id)}
                          className="rounded-full bg-blue-600 text-white w-8 h-8 flex items-center justify-center text-sm hover:bg-blue-700"
                        >
                          <Plus size={16} />
                        </button>
                      </div>
                    </td>
                    <td className="p-3 font-semibold">${(item.price * item.quantity).toFixed(2)}</td>
                    <td className="p-3">
                      <button
                        onClick={() => removeItem(item.id)}
                        className="hover:text-red-600"
                        title="Remove"
                      >
                        <Trash2 size={18} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Cart Summary */}
          <div className="bg-gray-50 rounded-lg shadow p-6">
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span>Subtotal:</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Tax (10%):</span>
                <span>${tax.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping:</span>
                <span>${shipping.toFixed(2)}</span>
              </div>
              <hr className="my-2" />
              <div className="flex justify-between text-lg font-bold">
                <span>Total:</span>
                <span>${total.toFixed(2)}</span>
              </div>
              <button className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition">
                Checkout →
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
