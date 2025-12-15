import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <header className="border-b">
            <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
                <Link to="/" className="text-xl font-semibold">
                    Aurawill
                </Link>

                <nav className="flex items-center gap-6 text-sm">
                    <Link to="/">Home</Link>
                    <Link to="/cart">Cart</Link>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;
