const ProductCard = () => {
    return (
        <div className="border rounded-xl p-4 hover:shadow-md transition">
            <div className="h-40 bg-gray-100 rounded-lg mb-4" />

            <h3 className="text-sm font-medium mb-1">
                Gift Box Name
            </h3>

            <p className="text-sm text-gray-500 mb-2">
                ₹1,999
            </p>

            <button className="w-full border rounded-lg py-2 text-sm hover:bg-black hover:text-white transition">
                Add to Cart
            </button>
        </div>
    );
};

export default ProductCard;
