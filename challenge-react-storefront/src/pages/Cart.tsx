import useCartStore from '../store/cartStore';

export default function Cart() {
  const cart = useCartStore(state => state.cart);
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6 text-blue-700">🛒 Your Cart</h1>

      {cart.length === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        <div className="space-y-6">
          {cart.map(item => (
            <div
              key={item.id}
              className="flex items-start justify-between p-4 bg-white rounded-lg shadow-sm"
            >
              <div className="flex gap-4">
                <img src={item.image} className="h-20 w-20 object-contain" />
                <div>
                  <h2 className="font-semibold text-gray-800">{item.title}</h2>
                  <p className="text-gray-500 text-sm">Quantity: {item.quantity}</p>
                </div>
              </div>
              <div className="font-bold text-lg text-green-600">
                ${(item.price * item.quantity).toFixed(2)}
              </div>
            </div>
          ))}
          <div className="text-right text-xl font-bold text-blue-700">
            Total: ${total.toFixed(2)}
          </div>
        </div>
      )}
    </div>
  );
}
