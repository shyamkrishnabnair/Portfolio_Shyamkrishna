"use client";
import useMasonry from "@/hooks/useMasonry";

export default function Gallery() {
  const masonryRef = useMasonry();

  return (
    <div
      ref={masonryRef}
      className="grid grid-cols-3 gap-4"
    >
      <div className="bg-blue-200 h-40">Item 1</div>
      <div className="bg-red-200 h-64">Item 2</div>
      <div className="bg-green-200 h-32">Item 3</div>
      <div className="bg-yellow-200 h-80">Item 4</div>
      <div className="bg-pink-200 h-52">Item 5</div>
    </div>
  );
}
