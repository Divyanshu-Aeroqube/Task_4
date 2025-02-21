import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface HorizontalImageScrollerProps {
  images: string[];
}

export default function HorizontalImageScroller({ images }: HorizontalImageScrollerProps) {
  const scrollRef = useRef<HTMLDivElement | null>(null); // Explicitly typed

  const scroll = (direction: "left" | "right") => { // Explicit direction type
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -300 : 300,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto p-4 sm:block hidden">
      <div className="flex items-center gap-2">
        <button
          onClick={() => scroll("left")}
          className="p-2 border rounded-full shadow-md hover:bg-gray-100 transition"
        >
          <ChevronLeft />
        </button>
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto scroll-smooth scrollbar-hide"
          style={{ scrollSnapType: "x mandatory" }}
        >
          {images.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Image ${index + 1}`}
              className="w-72 h-48 object-cover rounded-lg shadow-md"
              style={{ scrollSnapAlign: "center" }}
            />
          ))}
        </div>
        <button
          onClick={() => scroll("right")}
          className="p-2 border rounded-full shadow-md hover:bg-gray-100 transition"
        >
          <ChevronRight />
        </button>
      </div>
    </div>
  );
}
