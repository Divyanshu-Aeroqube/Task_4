import React from 'react'
import Chef from '../assets/Group.svg'
import Laundry from '../assets/Group 107.svg'
import cleaning from '../assets/52057-removebg-preview 1.svg'
import Maintanance from '../assets/Objects.svg'
const Services = () => {
  return (
    <>

    <section className='w-full mt-[5rem] mb-[2.5rem] '>
      <h1 className='font-kanit text-[1.5rem] md:text-[2rem] w-[85%] text-center text-headColor md:w-[56%] font-medium mx-auto'>
      “Our Team have Awesome handpicked Services these for your next big group celebration, a romantic getaway or peaceful sneak away”
      </h1>
    </section>


          {/* Services Section */}
          <section className='w-full mt[1rem] md:mt[2.5rem]  lg:mt-[5rem]'>
<article className="my-[2rem] w-[90%] mx-auto flex flex-col md:flex-col lg:flex-row items-center lg:my-[6rem]">
  <div className="flex flex-col w-[90%] lg:w-1/2 mx-auto md:mx-[1rem] lg:mx-[10rem] my-[3rem] lg:my-[5rem]">
    <h1 className="mb-[2rem] font-kanit text-[2rem] text-headColor text-left">
      On Call Cook
    </h1>
    <p className="text-[1rem] sm:text-[1.25rem] font-mulish text-left text-subheading">
      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
      when an unknown printer took a galley of type and scrambled it to make a type specimen book.
      It has survived not only five centuries, but also the leap into electronic typesetting,
      remaining essentially unchanged.
    </p>
  </div>
  <img 
    src={Chef} 
    alt="On Call Cook" 
    className="w-[90%] sm:w-[80%] md:w-[60%] lg:w-[21.68rem] h-auto max-h-[25rem] mx-auto lg:mr-[15rem]" 
  />
</article>

<article className="my-[2rem] lg:my-[6rem] w-[90%] mx-auto flex flex-col-reverse md:flex-col-reverse lg:flex-row items-center">
  <img 
    src={Laundry} 
    alt="Laundry Services" 
    className="w-[90%] sm:w-[80%] md:w-[60%] lg:w-[21.68rem] h-auto max-h-[25rem] mx-auto lg:ml-[15rem]" 
  />
  <div className="flex flex-col w-[90%] lg:w-1/2 mx-auto md:mx-[1rem] lg:mx-[10rem] my-[3rem] lg:my-[5rem]">
    <h1 className="mb-[2rem] font-kanit text-[2rem] text-headColor text-left">
      Laundry Services
    </h1>
    <p className="text-[1rem] sm:text-[1.25rem] font-mulish text-left text-subheading">
      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
      when an unknown printer took a galley of type and scrambled it to make a type specimen book.
      It has survived not only five centuries, but also the leap into electronic typesetting,
      remaining essentially unchanged.
    </p>
  </div>
</article>

<article className="my-[2rem]  lg:my-[6rem] w-[90%] mx-auto flex flex-col md:flex-col lg:flex-row items-center">
  <div className="flex flex-col w-[90%] lg:w-1/2 mx-auto md:mx-[1rem] lg:mx-[10rem] my-[3rem] lg:my-[5rem]">
    <h1 className="mb-[2rem] font-kanit text-[2rem] text-headColor text-left">
      Facility Cleaning Services
    </h1>
    <p className="text-[1rem] sm:text-[1.25rem] font-mulish text-left text-subheading">
      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
      when an unknown printer took a galley of type and scrambled it to make a type specimen book.
      It has survived not only five centuries, but also the leap into electronic typesetting,
      remaining essentially unchanged.
    </p>
  </div>
  <img 
    src={cleaning} 
    alt="Facility Cleaning Services" 
    className="w-[90%] sm:w-[80%] md:w-[60%] lg:w-[21.68rem] h-auto max-h-[25rem] mx-auto lg:mr-[15rem]" 
  />
</article>

<article className="my-[2rem]  lg:my-[6rem] w-[90%] mx-auto flex flex-col-reverse md:flex-col-reverse lg:flex-row items-center">
  <img 
    src={Maintanance} 
    alt="Maintenance & Repairs" 
    className="w-[90%] sm:w-[80%] md:w-[60%] lg:w-[21.68rem] h-auto max-h-[25rem] mx-auto lg:ml-[15rem]" 
  />
  <div className="flex flex-col w-[90%] lg:w-1/2 mx-auto md:mx-[1rem] lg:mx-[10rem] my-[3rem] lg:my-[5rem]">
    <h1 className="mb-[2rem] font-kanit text-[2rem] text-headColor text-left">
      Maintenance & Repairs
    </h1>
    <p className="text-[1rem] sm:text-[1.25rem] font-mulish text-left text-subheading">
      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
      when an unknown printer took a galley of type and scrambled it to make a type specimen book.
      It has survived not only five centuries, but also the leap into electronic typesetting,
      remaining essentially unchanged.
    </p>
  </div>
</article>

</section>
    </>
  )
}

export default Services
