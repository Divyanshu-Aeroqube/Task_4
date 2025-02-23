import { useState } from 'react';
import villas from '../Data/VillaData';
import { useParams } from 'react-router-dom';

import VCrousel from '../Components/VCrousel'

import loc from '../assets/location.svg'
import bathtub from '../assets/bathtub.svg'
import room from '../assets/double-bed.svg'
import house from '../assets/measured.svg'
import DescriptionSection from '../Components/DescriptionSection'
import AboutSection from '../Components/AboutSection'
import Amenities from '../Components/Amenities'
import SideImagesS from '../Components/SideImagesS';


const DetailedVila = () => {
  const { id } = useParams();
  const villa = villas.find((v) => v.id === Number(id));
  const [activeSection, setActiveSection] = useState('description');

  if (!villa) {
    return <h1>Villa Not Found</h1>;
  }

  return (
    <>
      <section className='w-full  mb-[8rem] mt-[5rem]'>
        <article className='w-[90%] md:w-[80%] mx-auto flex gap-10 '>
          <aside className='w-full mx-auto lg:w-[70%]'>
            <section className='w-full'>
              <VCrousel />
            </section>
            <section className='w-full h-auto rounded-[6.1px] shadow-[0_7.6px_38px_0_rgba(0,0,0,0.07)]'>
              <article className="flex flex-col justify-between gap-2 md:gap-4 p-6 md:p-10 mt-10 md:mt-20">
                <header className="flex justify-between font-bold">
                  <h1 className="font-nunitosans font-bold text-[20px] md:text-[28px] text-[#3e3e3e] leading-[22px] md:leading-[27.2px]">{villa.title}</h1>
                  <h1 className="font-nunitosans font-bold text-[20px] md:text-[28px] text-[#ffa800] leading-[22px] md:leading-[27.2px]">{villa.price}</h1>
                </header>

                <p className="text-left font-nunitosans text-[#aeaeae] text-[16px] md:text-[22px]"><img src={loc} className="inline" />{villa.address}</p>
                <footer className="flex justify-between text-sm w-[90%] md:w-[60%]">
                  <p className="text-left font-semibold font-nunitosans text-[#626262] text-[16px] md:text-[22px]"><img src={bathtub} className="inline" /> {villa.bath}</p>
                  <p className="text-left font-semibold font-nunitosans text-[#626262] text-[16px] md:text-[22px]"><img src={room} className="inline" /> {villa.beds}</p>
                  <p className="text-left font-semibold font-nunitosans text-[#626262] text-[16px] md:text-[22px]"><img src={house} className="inline" /> {villa.size}</p>
                </footer>
              </article>
            </section>



            <section className='w-full bg-[#f4f4f4] max-h-15'>
              <section className=' flex justify-between items-center w-full md:w-[80%] md:ml-10   mt-15'>
                <h1
                  className={` py-3 cursor-pointer font-mulish text-[12px] md:text-[18px] font-bold text-[#8a8a8a] ${activeSection === 'layout' ? 'text-[#181725] border-b-4 border-[#6d87cb]' : ''}`}
                  onClick={() => setActiveSection('layout')}
                >
                  PROPERTY LAYOUT
                </h1>
                <h1
                  className={`py-3 cursor-pointer font-mulish text-[12px] md:text-[18px] font-bold text-[#8a8a8a] ${activeSection === 'description' ? 'text-[#181725] border-b-4 border-[#6d87cb]' : ''}`}
                  onClick={() => setActiveSection('description')}
                >
                  DESCRIPTION
                </h1>


                <h1
                  className={`py-3 cursor-pointer font-mulish text-[12px] md:text-[18px] font-bold text-[#8a8a8a] ${activeSection === 'amenities' ? 'text-[#181725] border-b-4 border-[#6d87cb]' : ''}`}
                  onClick={() => setActiveSection('amenities')}
                >
                  AMENITIES
                </h1>
              </section>
            </section>
            <section className="w-full">
              {activeSection === "description" && <AboutSection layout={villa.desc.layout} />}
              {activeSection === "layout" && <DescriptionSection desc={villa.desc.desc} />}
              {activeSection === "amenities" && <Amenities amenities={villa.desc.aminities} />}
            </section>


          </aside>
          <aside className="hidden lg:block w-[30%]">

            {/* <SideImages images={villa.images} /> */}
            <SideImagesS images={villa.images}/>
          </aside>

        </article>
      </section>
    </>
  )
}

export default DetailedVila
