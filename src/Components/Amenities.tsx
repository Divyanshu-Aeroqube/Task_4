import React from 'react';
import { Amenity } from '../types/VillaType';
interface AmenityProps {
  amenities: Amenity[];
}

const Amenities: React.FC<AmenityProps> = ({ amenities }) => {
  return (
    <>
<section className="w-full grid grid-cols-3 gap-x-16 gap-y-10 mt-[40px]">
  {amenities.map((item, index) => (
    <div
      key={index}
      className="h-[15rem] w-full bg-[#6d87cb] flex flex-col justify-center items-center rounded-md gap-4"
    >
      <img src={item.logo} alt="" />
      <p className="text-[#ffffff] font-mulish text-[14px] font-extrabold">
        {item.title}
      </p>
    </div>
  ))}
</section>
    </>
  );
};

export default Amenities;

