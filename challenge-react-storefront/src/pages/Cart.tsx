import useCartStore from '../store/cartStore';

export default function Cart() {
  const cart = useCartStore(state => state.cart);

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">🛒 Your Cart</h1>
      {cart.length === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        <div className="space-y-4">
          {cart.map(item => (
            <div key={item.id} className="flex justify-between items-center border p-4 rounded bg-white shadow-sm">
              <div>
                <h2 className="font-semibold">{item.title}</h2>
                <p className="text-gray-600">Qty: {item.quantity}</p>
              </div>
              <div className="text-right font-bold">${(item.price * item.quantity).toFixed(2)}</div>
            </div>
          ))}
          <div className="text-right mt-6 text-xl font-bold">
            Total: ${total.toFixed(2)}
          </div>
        </div>
      )}
    </div>
  );
}
