import React from 'react';
import { Amenity } from '../types/VillaType';
import logo from '../assets/Group (1).svg';
interface AmenityProps {
  amenities: Amenity[];
}

const Amenities: React.FC<AmenityProps> = ({ amenities }) => {
  return (
    <>
<section className='w-full grid grid-cols-3 gap-10 mt-4 mt-[60px]'>
  {
    amenities.map((item,index)=>(
      <div className='h-[12.5rem] w-[12.5rem] bg-[#6d87cb] flex flex-col justify-center items-center rounded-sm gap-4'>
      <img src={item.logo} alt="" />
      <p className='text-[#ffffff] font-mulish text-[14px] font-extrabold'>{item.title}</p>
    </div>
    ))
  }
    </section>
    </>
  );
};

export default Amenities;

