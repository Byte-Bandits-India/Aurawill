import CartItem from "../components/cart/CartItem";
import CartSummary from "../components/cart/CartSummary";

const Cart = () => {
    return (
        <section className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-4">
                <CartItem />
                <CartItem />
            </div>

            <CartSummary />
        </section>
    );
};

export default Cart;
