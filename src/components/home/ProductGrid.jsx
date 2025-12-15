import ProductCard from "./ProductCard";

const ProductGrid = () => {
    return (
        <section className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-6">
            {Array.from({ length: 8 }).map((_, index) => (
                <ProductCard key={index} />
            ))}
        </section>
    );
};

export default ProductGrid;
