import React from 'react';
import { Amenity } from '../types/VillaType';
interface AmenityProps {
  amenities: Amenity[];
}

const Amenities: React.FC<AmenityProps> = ({ amenities }) => {
  return (
    <>
<section className="w-full grid grid-cols-2 lg:grid-cols-3 gap-10 mt-[40px]">
  {amenities.map((item, index) => (
    <div
      key={index}
      className="h-[10rem] w-[10rem] md:h-[12rem] md:w-[12rem] bg-[#6d87cb] flex flex-col justify-center items-center rounded-md gap-4 mx-auto"
    >
      <img src={item.logo} alt="" />
      <p className="text-[#ffffff] font-mulish text-[10px] sm:text-[14px] font-extrabold">
        {item.title}
      </p>
    </div>
  ))}
</section>
    </>
  );
};

export default Amenities;

