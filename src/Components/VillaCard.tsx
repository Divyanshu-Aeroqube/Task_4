import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Villa } from '../types/VillaType';
import loc from '../assets/location.svg';
import bathtub from '../assets/bathtub.svg';
import room from '../assets/double-bed.svg';
import house from '../assets/measured.svg';

type VillaCardProps = {
  villa: Villa;
};

const VillaCard: React.FC<VillaCardProps> = ({ villa }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/villa/${villa.id}`);
  };

  return (  
    <section
      key={villa.id}
      className="relative h-[350px] cursor-pointer"
      onClick={handleClick}
    >
      {/* Image */}
      <figure className="shadow-lg">
        <img src={villa.image} alt={villa.title} className="w-full object-cover rounded-md" />
      </figure>

      {/* Villa Details Box */}
      <div className="absolute bottom-[5%] lg:bottom-[-4%] left-1/2 -translate-x-1/2 bg-white p-4 shadow-md rounded-sm w-[90%]">
        <article className="flex flex-col space-y-2">
          <header className="flex justify-between font-bold">
            <h1 className="font-nunitosans font-bold text-4 text-[#3e3e3e] leading-[27.2px]">{villa.title}</h1>
            <h1 className="font-nunitosans font-bold text-4 text-[#ffa800] leading-[27.2px]">{villa.price}</h1>
          </header>

          <p className="text-left font-nunitosans text-[#aeaeae] text-[14px]">
            <img src={loc} className="inline" alt="location" /> {villa.address}
          </p>
          <footer className="flex justify-between text-sm">
            <p className="text-left font-semibold font-nunitosans text-[#626262] text-[14px]">
              <img src={bathtub} className="inline" alt="bathroom" /> {villa.bath}
            </p>
            <p className="text-left font-semibold font-nunitosans text-[#626262] text-[14px]">
              <img src={room} className="inline" alt="bedroom" /> {villa.beds}
            </p>
            <p className="text-left font-semibold font-nunitosans text-[#626262] text-[14px]">
              <img src={house} className="inline" alt="size" /> {villa.size}
            </p>
          </footer>
        </article>
      </div>
    </section>
  );
};

export default VillaCard;
