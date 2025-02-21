import About from "../assets/about.png"
import HeroSection from '../Components/HeroSection'
import Section5 from "../assets/section-3-img.png"
import Chef from '../assets/Group.svg'
import Laundry from '../assets/Group 107.svg'
import cleaning from '../assets/52057-removebg-preview 1.svg'
import Maintanance from '../assets/Objects.svg'
import Section6 from "../assets/section-5-img.png"
import image1 from "../assets/gallery-1.png"
import image2 from "../assets/gallery-2.png"
import image3 from "../assets/gallery-3.png"
import image4 from "../assets/gallery-4.png"
import image5 from "../assets/gallery-5.png"
import image6 from "../assets/gallery-6.png"
const Partner = () => {
  return (
    <>
      <HeroSection />

{/* about us section */}
<section className="w-full px-4">
  <div className="flex w-[90%] mx-auto flex-col-reverse sm:flex-row justify-between lg:w-[80%] mt-[1rem] md:mt-[5rem] gap-6">
    <div className="w-full sm:w-1/2 flex justify-center">
      <img
        src={About}
        alt="About Us"
        className="w-full mx-auto sm:w-auto h-[22.31rem] sm:mr-[2.68rem] my-[2rem] lg:my-[4rem] sm:my-[7.65rem]"
      />
    </div>
    <div className="w-full sm:w-[33.75rem] h-auto my-[2rem] sm:my-[5rem] text-center sm:text-left">
      <h1 className="font-kanit text-[2rem] mb-[1.25rem] text-headColor">
        About Us
      </h1>
      <p className="font-mulish text-[1.12rem] text-subheading">
        Lorem Ipsum has been the industry's standard dummy text ever since the
        1500s, when an unknown printer took a galley of type and scrambled it to
        make a type specimen book. It has survived not only five centuries, but
        also the leap into electronic typesetting, remaining essentially unchanged.
        It was popularised in the 1960s with the release of Letraset sheets
        containing Lorem Ipsum passages, and more recently with desktop publishing
        software like Aldus PageMaker including versions of Lorem Ipsum.
      </p>
    </div>
  </div>
</section>

 




    <section className='w-full bg-bgcolor'>
    <article className='w-[95%] mx-auto py-[1rem] sm:w-[80%] mx-auto py-[2rem] lg:w-[58%] mx-auto py-[5rem]' >
      <div className="">
        <h1 className="font-kanit text-center text-[2rem]">
          Feature regarding purchase of villa & also rent out feature with villacrest
        </h1>
        <p className="mb-[1rem] mt-[1rem] text-[1rem] lg:font-mulish text-center lg:text-[1.25rem] text-subheading mx-[3.5rem] lg:mb-[3.5rem] lg:mt-[1.25rem]">
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
        </p>
      </div>
      <div className="mt-8 ">
        <img src={Section5} alt="section5 Image" />
      </div>

    </article>
  </section>


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


<section className="w-full bg-bgcolor">
  <article className="w-[90%] md:w-[80%] mx-auto flex flex-col lg:flex-row justify-between flex-wrap gap-[4rem]">
    
    {/* Text Content */}
    <div className="flex-1 w-full lg:w-1/2 mt-[5rem] md:mt-[6rem] lg:mt-[7.625rem] mb-[4rem] md:mb-[6rem] lg:mb-[8.43rem]">
      <h1 className="font-kanit text-[2rem] text-left text-headColor mb-[1.8rem]">
        Title for the key features of the villa goes here
      </h1>
      <p className="font-mulish text-left md:pr-[2rem] lg:pr-[4.5rem] mb-[2rem] md:mb-[2.5rem] lg:mb-[3.125rem] text-[1.1rem] md:text-[1.2rem] text-subheading">
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
      </p>
      
      {/* Bullet Points */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6 mx-[1rem]">
        <ul className=" space-y-2 list-disc marker:text-[#6d87cb] font-manrope font-semibold">
          <li>Tailored services</li>
          <li>Effortless arrivals</li>
          <li>Inspection and vetting</li>
        </ul>
        <ul className="space-y-2 list-disc marker:text-[#6d87cb] font-manrope font-semibold">
          <li>Expertly designed</li>
          <li>Luxury amenities</li>
          <li>Custom itineraries</li>
        </ul>
      </div>
      
      {/* Button */}
      <button className="text-mulish font-bold text-center text-[0.87rem] text-white bg-btcolor py-[0.93rem] px-[1.125rem] w-[7.3rem] mt-[3rem] md:mt-[3.5rem] lg:mt-[3.75rem]">
        View Details
      </button>
    </div>

    {/* Image Section */}
    <figure className="w-full lg:w-1/2 flex justify-center lg:justify-end my-[2rem] md:my-[3rem]">
      <img src={Section6} alt="Villa" className="w-full md:w-[80%] lg:w-auto h-auto object-cover" />
    </figure>

  </article>
</section>


      {/* villa image gallery */}
      <section className='w-full my-[5rem]'>
        <article className='w-[80%] mx-auto' >
          <h1 className="font-kanit text-[2rem] text-center text-headColor mb-[4.35rem]">
            Villa Image Gallery
          </h1>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-[69px] gap-y-[50px]'>
            <img src={image1} alt="Image 1" className="w-full h-auto object-cover" />
            <img src={image2} alt="Image 2" className="w-full h-auto object-cover" />
            <img src={image3} alt="Image 3" className="w-full h-auto object-cover" />
            <img src={image4} alt="Image 4" className="w-full h-auto object-cover" />
            <img src={image5} alt="Image 5" className="w-full h-auto object-cover" />
            <img src={image6} alt="Image 6" className="w-full h-auto object-cover" />
          </div>


        </article>
      </section>


      <section className="w-full bg-bgcolor">
  <article className="w-[90%] md:w-[70%] lg:w-[60%] mx-auto py-[3rem] md:py-[4rem]">
    
    {/* Title */}
    <h1 className="font-kanit text-[1.8rem] md:text-[2rem] text-center text-headColor">
      Why Choose VillaCrest?
    </h1>

    {/* Description */}
    <p className="font-mulish text-center text-[1.1rem] md:text-[1.2rem] text-subheading px-[1.5rem] md:px-[4rem] lg:px-[6.5rem] mt-[1rem]">
      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
      when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
      It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
    </p>

    {/* Button */}
    <div className="flex justify-center mt-[1.5rem] md:mt-[1.75rem]">
      <button className="text-mulish font-bold text-center text-[0.87rem] text-white bg-btcolor py-[0.9rem] px-[1.1rem] w-[7.3rem]">
        Contact
      </button>
    </div>

  </article>
</section>



  </>





  )
}

export default Partner
