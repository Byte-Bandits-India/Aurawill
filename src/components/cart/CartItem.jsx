const CartItem = () => {
    return (
        <div className="flex items-center gap-4 border rounded-xl p-4">
            <div className="w-20 h-20 bg-gray-100 rounded-lg" />

            <div className="flex-1">
                <h4 className="text-sm font-medium">
                    Gift Box Name
                </h4>
                <p className="text-sm text-gray-500">₹1,999</p>
            </div>

            <button className="text-sm text-red-500">
                Remove
            </button>
        </div>
    );
};

export default CartItem;
