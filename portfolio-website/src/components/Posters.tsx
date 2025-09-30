"use client";
import Image from "next/image";
import useMasonry from "@/hooks/useMasonry";

export default function PostersSection() {
  const masonryRef = useMasonry();

  const posters = [
    { img: "/poster_1.jpg", title: "Poster 1" },
    { img: "/poster_3.png", title: "Poster 2" },
    { img: "/poster_2.jpg", title: "Poster 3" },
    { img: "/poster_4.png", title: "Poster 3" },
  ];

  return (
    <section className="px-6 py-12">
      <h2 className="text-[3rem] font-bold mb-6 text-[#00085E]">Posters</h2>

      <div
        ref={masonryRef}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
        >
            {posters.map((poster, idx) => (
                <div
                key={idx}
                className="relative rounded-lg overflow-hidden shadow-lg group"
                >
                <Image
                    src={poster.img}
                    alt={poster.title}
                    width={500}        // required for Next.js optimization
                    height={500}       // required for Next.js optimization
                    className="w-full h-auto object-cover"
                />
                <div className="absolute bottom-2 left-2 bg-black bg-opacity-60 text-white px-2 py-1 rounded">
                    {poster.title}
                </div>
                </div>
            ))}
        </div>
    </section>
  );
}
