import { useState } from "react";

const thumbnails = [
    "https://aurawill.in/cdn/shop/files/Artboard1.jpg?v=1743750992&width=1946",
    "https://aurawill.in/cdn/shop/files/Artboard_1_copy_4_f1c8177d-4407-4805-bdb4-dc679997a1da.jpg?v=1743750992&width=1946",
    "https://aurawill.in/cdn/shop/files/Artboard1copy2.jpg?v=1752498917&width=1946",
    "https://aurawill.in/cdn/shop/files/carb_fix_copy.jpg?v=1752498917&width=1946",
    "https://aurawill.in/cdn/shop/files/Artboard_1_copy_3_ca3db96d-43aa-475a-ba70-3db205b30055.jpg?v=1752498915&width=1946",
    "https://aurawill.in/cdn/shop/files/Artboard_1_copy_6_9bf09811-fb21-4927-8556-7dd993e1d1e3.jpg?v=1752498915&width=1946",
    "https://aurawill.in/cdn/shop/files/Ingredeitns-list.png?v=1764672137&width=1946",
    "https://aurawill.in/cdn/shop/files/Aurawill-Health-mix-CMYK-Greenshifted.jpg?v=1764676713&width=1946",
];

const ProductDetails = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const nextImage = () =>
        setActiveIndex((prev) => (prev + 1) % thumbnails.length);

    const prevImage = () =>
        setActiveIndex((prev) =>
            prev === 0 ? thumbnails.length - 1 : prev - 1
        );

    return (
        <section className="bg-white py-14">
            <div className="max-w-7xl mx-auto px-[50px]">
                {/* OUTER WRAPPER */}
                <div className="grid grid-cols-1 lg:grid-cols-[90px_1fr_420px] gap-10 max-h-[750px]">

                    {/* LEFT – THUMBNAILS */}
                    <div className="hidden lg:flex flex-col gap-4 overflow-y-auto no-scrollbar max-h-[600px] pr-1">
                        {thumbnails.map((img, index) => (
                            <button
                                key={index}
                                onClick={() => setActiveIndex(index)}
                                className={`border rounded-xl p-1 transition ${activeIndex === index
                                    ? "border-black"
                                    : "border-gray-200 hover:border-gray-400"
                                    }`}
                            >
                                <img
                                    src={img}
                                    alt="thumbnail"
                                    className="w-[150px] h-[150px] object-cover rounded-lg"
                                />
                            </button>
                        ))}
                    </div>

                    {/* CENTER – MAIN IMAGE */}
                    <div className="relative flex items-center justify-center max-h-[750px]">
                        <img
                            src={thumbnails[activeIndex]}
                            alt="Product"
                            className="max-h-[720px] object-contain"
                        />

                        {/* LEFT ARROW */}
                        <button
                            onClick={prevImage}
                            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 w-11 h-11 rounded-full shadow flex items-center justify-center hover:bg-white transition"
                        >
                            ‹
                        </button>

                        {/* RIGHT ARROW */}
                        <button
                            onClick={nextImage}
                            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 w-11 h-11 rounded-full shadow flex items-center justify-center hover:bg-white transition"
                        >
                            ›
                        </button>
                    </div>

                    {/* RIGHT – PRODUCT INFO */}
                    <div className="bg-white rounded-2xl border shadow-sm p-8 h-fit">
                        <span className="inline-block bg-orange-100 text-orange-600 text-xs font-semibold px-4 py-1 rounded-full mb-4">
                            BEST SELLER
                        </span>

                        <h1 className="text-[28px] font-semibold mb-4">
                            Aurawill Health Mix
                        </h1>

                        <div className="flex items-center gap-3 mb-3">
                            <span className="text-2xl font-semibold">Rs. 720.00</span>
                            <span className="line-through text-gray-400 text-lg">
                                Rs. 1,199.00
                            </span>
                            <span className="bg-red-500 text-white text-xs px-3 py-1 rounded-full">
                                Save 40%
                            </span>
                        </div>

                        <p className="text-sm text-gray-500 mb-4">Tax included.</p>

                        <p className="text-sm mb-3">
                            <span className="font-medium">Weight:</span>{" "}
                            <span className="text-gray-500">900 Grams</span>
                        </p>

                        <select className="w-full border rounded-xl px-4 py-3 mb-6 text-sm">
                            <option>900 Grams</option>
                        </select>

                        <div className="flex gap-4 mb-6">
                            <div className="flex items-center border rounded-xl px-4 h-[48px]">
                                <button className="px-2 text-lg">−</button>
                                <span className="px-4 text-sm">1</span>
                                <button className="px-2 text-lg">+</button>
                            </div>

                            <button className="flex-1 h-[48px] bg-green-700 hover:bg-green-800 text-white rounded-xl font-medium">
                                Add To Cart
                            </button>
                        </div>

                        <p className="text-gray-600 text-sm leading-relaxed">
                            Aurawill Health mix nourishes your body with improved immunity,
                            gut health and energy with just two spoons everyday! No oils,
                            no preservatives—only traditional preparation.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductDetails;
