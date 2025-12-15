import { Link } from "react-router-dom";
import { User, ShoppingCart } from "lucide-react";


const Navbar = () => {
    return (
        <header className="bg-[#fbf6ee]">
            <div className="max-w-7xl mx-auto px-6 py-4 grid grid-cols-3 items-start">

                {/* LEFT SPACER */}
                <div />

                {/* CENTER LOGO + NAV */}
                <div className="text-center">
                    <img
                        className="max-w-[250px] mx-auto"
                        src="https://aurawill.in/cdn/shop/files/main-header-logo_963f54c9-62ef-47d0-a619-01d3d4493b0a.png?v=1746525532&width=440"
                        alt="Logo"
                    />

                    <nav className="mt-3 flex justify-center gap-6 text-sm text-gray-700">
                        <Link className="border-b border-black pb-1">Home</Link>
                        <Link>Ingredients</Link>
                        <Link>Recipes</Link>
                        <Link>Our story</Link>
                    </nav>
                </div>

                {/* RIGHT ICONS */}
                <div className="flex justify-end items-center gap-4 text-gray-700 lg:pt-10">
                    <button className="hover:text-black transition">
                        <User size={22} strokeWidth={1.5} />
                    </button>

                    <button className="hover:text-black transition">
                        <ShoppingCart size={22} strokeWidth={1.5} />
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
