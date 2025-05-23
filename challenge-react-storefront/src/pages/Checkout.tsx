import { Link } from 'react-router-dom';
import useCartStore from '../store/cartStore';
import { useNavigate } from 'react-router-dom';


export default function Checkout() {
  const cart = useCartStore(state => state.cart);
  const clearCart = useCartStore((state) => state.clearCart);
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const tax = subtotal * 0.1;
  const shipping = 5;
  const total = subtotal + tax + shipping;
  const navigate = useNavigate();
  

  const handlePayment = () => {
    alert('Payment Successful!');
    clearCart();
    navigate('/');
    
  };
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <div className="flex justify-between items-start mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Review your order</h1>
        <Link to="/cart" className="text-blue-600 text-sm hover:underline flex items-center gap-1">
          🛒 Back to Cart
        </Link>
      </div>
      <hr className="mb-8" />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* LEFT SIDE */}
        <div className="lg:col-span-2 space-y-6">
          {/* Delivery Method */}
          <div className="bg-white border rounded-lg p-4 shadow-sm flex justify-between items-start">
            <div>
              <p className="text-sm text-gray-600 font-semibold mb-1">Delivery Method</p>
              <p className="text-gray-900">Collect</p>
            </div>
            <button className="text-blue-600 text-sm font-medium hover:underline">Change</button>
          </div>

          {/* Pickup Point */}
          <div className="bg-white border rounded-lg p-4 shadow-sm flex justify-between items-start">
            <div>
              <p className="text-sm text-gray-600 font-semibold mb-1">Pickup Point</p>
              <p className="font-semibold text-gray-800">Canal Walk Pickup Point</p>
              <p className="text-sm text-gray-600 mt-1 leading-5">
                Entrance 6, Shop 637, Canal Walk Shopping Centre<br />
                490 Century Blvd<br />
                Century City, Cape Town, 7446
              </p>
            </div>
            <button className="text-blue-600 text-sm font-medium hover:underline">Change</button>
          </div>

          {/* Collection Options */}
          <div className="bg-white border rounded-lg p-4 shadow-sm">
            <p className="text-sm text-gray-600 font-semibold mb-3">Collect from</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Option 1 */}
              <div className="border rounded-lg p-4">
                <p className="text-xs text-blue-600 font-bold uppercase mb-1">Cheapest</p>
                <p className="font-semibold text-gray-800">Friday, 23 May 2025</p>
                <p className="text-sm text-gray-600">Standard Collect</p>
                <p className="text-green-600 font-bold mt-2">$5.00</p>
              </div>

              {/* Option 2 */}
              <div className="border rounded-lg p-4">
                <p className="text-xs text-green-600 font-bold uppercase mb-1">Fastest</p>
                <p className="font-semibold text-gray-800">Tomorrow, 22 May 2025</p>
                <p className="text-sm text-gray-600">Next Day Collect</p>
                <p className="text-green-600 font-bold mt-2">$5.00</p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="space-y-6">
          {/* Order Summary */}
          <div className="bg-white border rounded-lg p-6 shadow-sm">
            <h2 className="font-semibold text-lg mb-4">Order Summary</h2>
            <div className="space-y-2 text-sm text-gray-800">
              <div className="flex justify-between">
                <span>{cart.length} Item{cart.length > 1 && 's'}</span>
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
              <hr />
              <div className="flex justify-between text-lg font-bold">
                <span>Total:</span>
                <span className="text-green-600">${total.toFixed(2)}</span>
              </div>
              <button  onClick={handlePayment} className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded mt-4 transition">
                PAY WITH CARD
              </button>
              <p className="text-center text-xs text-gray-500 mt-2">🔒 Secure Checkout</p>
            </div>
          </div>

          
        </div>
      </div>
    </div>
  );
}
