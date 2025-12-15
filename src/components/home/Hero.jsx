import { useState, useEffect } from "react";

const Hero = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const images = [
        {
            id: 1,
            src: "https://cdn.shopify.com/s/files/1/0742/8449/9194/files/B2_Full_f9e3002c-1aa7-471b-ab31-d17414ad4f04.jpg?v=1744267781",
            alt: "Aurawill Health Mix",
        },
        {
            id: 2,
            src: "https://cdn.shopify.com/s/files/1/0742/8449/9194/files/B3_Full_copy_2_a653f4db-9eda-48e9-befb-9387fb7768b7.jpg?v=1742971173",
            alt: "Aurawill Haldi Mix",
        },
        {
            id: 3,
            src: "https://cdn.shopify.com/s/files/1/0742/8449/9194/files/B3_Full_copy_ff138bfc-ae27-4f13-878d-0acaf666bf7e.jpg?v=1744268384",
            alt: "Aurawill Amma's Mix",
        },
        {
            id: 4,
            src: "https://cdn.shopify.com/s/files/1/0742/8449/9194/files/B3_Full_copy_2_a653f4db-9eda-48e9-befb-9387fb7768b7.jpg?v=1742971173",
            alt: "Aurawill Energy Mix",
        },
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % images.length);
        }, 4000);
        return () => clearInterval(interval);
    }, [images.length]);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    return (
        <section className="bg-[#fbf6ee] overflow-hidden">
            <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden">

                {/* SLIDER */}
                <div
                    className="flex h-full transition-transform duration-700 ease-in-out"
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                    {images.map((image) => (
                        <img
                            key={image.id}
                            src={image.src}
                            alt={image.alt}
                            className="w-full h-full object-cover flex-shrink-0"
                        />
                    ))}
                </div>

                {/* LEFT ARROW */}
                <button
                    onClick={prevSlide}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center shadow hover:bg-white transition"
                >
                    ‹
                </button>

                {/* RIGHT ARROW */}
                <button
                    onClick={nextSlide}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center shadow hover:bg-white transition"
                >
                    ›
                </button>

                {/* DOTS */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                    {images.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`h-2 rounded-full transition-all ${index === currentIndex
                                    ? "bg-black w-6"
                                    : "bg-gray-300 w-2"
                                }`}
                        />
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Hero;
