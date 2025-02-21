import React from 'react';

type SideImagesProps = {
  images: string[];
};

const SideImages: React.FC<SideImagesProps> = ({ images }) => {
  return (
<section className='w-full'>
<article className="grid grid-cols-2 gap-6">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          className="rounded-lg object-contain"
          alt=""
        /> 
      ))}
    </article>
</section>
  );
};

export default SideImages;


