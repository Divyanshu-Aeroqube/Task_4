import React from "react";

type SideImagesProps = {
  images: string[];
};

const SideImagesS: React.FC<SideImagesProps> = ({ images }) => {
  return (
    <section className="w-full h-[500px] overflow-y-auto p-2   [&::-webkit-scrollbar]:w-2
  [&::-webkit-scrollbar-track]:rounded-full
  [&::-webkit-scrollbar-track]:bg-gray-100
  [&::-webkit-scrollbar-thumb]:rounded-full
  [&::-webkit-scrollbar-thumb]:bg-gray-300
  dark:[&::-webkit-scrollbar-track]:bg-neutral-700
  dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500">
      <article className="grid grid-cols-2 gap-4">
        {images.map((image, index) => (
          <div key={index} className="w-full h-30 flex items-center justify-center bg-white rounded-lg overflow-hidden">
            <img
              src={image}
              className="w-full h-full object-cover"
              alt={`Image ${index}`}
            />
          </div>
        ))}
      </article>
    </section>
  );
};

export default SideImagesS;
