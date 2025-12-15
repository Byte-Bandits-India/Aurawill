const CartSummary = () => {
    return (
        <div className="border rounded-xl p-6 h-fit">
            <h3 className="text-lg font-semibold mb-4">
                Order Summary
            </h3>

            <div className="flex justify-between text-sm mb-2">
                <span>Subtotal</span>
                <span>₹3,998</span>
            </div>

            <div className="flex justify-between text-sm mb-4">
                <span>Shipping</span>
                <span>Free</span>
            </div>

            <button className="w-full bg-black text-white py-3 rounded-lg text-sm">
                Checkout
            </button>
        </div>
    );
};

export default CartSummary;
