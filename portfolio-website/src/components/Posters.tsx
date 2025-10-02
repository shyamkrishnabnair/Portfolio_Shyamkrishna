import Image from "next/image";

const posters_1 = [
  { img: "/poster_1.jpg", title: "Sanctity?" },
  { img: "/poster_3.png", title: "Dreaming" },
  { img: "/poster_4.png", title: "Realize.    " },
  { img: "/poster_2.jpg", title: "I Think I Like When It Rains" },
];

const posters_2=[
    { img: "/poster_4.png", title: "Realize.    " },
  { img: "/poster_2.jpg", title: "I Think I Like When It Rains" },
];

export default function Posters() {
  return (
    <section className="px-6 py-12">
      <h2 className="text-[3rem] font-bold mb-6 text-[#00085E]">Posters</h2>

      <div className="grid gap-4 grid-cols-2 ">
        {posters_1.map((poster, idx) => (
          <div key={idx} className="border flex justify-center items-center">
            <Image
              src={poster.img}
              alt={poster.title}
              width={300}       // max width
              height={0}        // let Next auto-calc from aspect ratio
              className="h-[300px] w-auto rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105 hover:shadow-2xl"
            />

            {/* Title overlay */}
            <div className="absolute bottom-2 left-2 bg-black/60 text-white px-3 py-1 rounded">
              {poster.title}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
