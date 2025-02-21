import Carousel from './Crousel'

const HeroSection = () => {
  return (
    <section className="w-full bg-bgcolor">
      <article className='lg:w-[80%] mx-auto pt-[3.81rem]'>
        <div className='px-[2rem] sm:px[4rem] md:px-[8.125rem]'>
          <h1 className="font-kanit text-center leading-[2rem] md:leading-[4rem] text-[25px] sm:[28px] md:text-forlg text-headColor lg:leading-[4.06rem] tracking-[1px]">
            Take your <span className='font-semibold'>real estate</span> experience to new heights in the <span className='font-semibold'>Himalayas</span>
          </h1>
          <p className="font-mulish text-center tracking-[0.3px] leading-[30px] text-subheading  mt-[0.95rem] sm: mx-[1rem] md:mx-[3rem] text-[1rem] lg:mx-[5rem] lg:text-[1.25rem]">
            Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam no suscipit quaerendum. At nam minimum ponderum. Est audiam animal molestiae te.
          </p>
        </div>

        {/* Carousel Section */}
      </article>
      <div className="mt-8 pb-[2.58rem]">
        <Carousel />
      </div>
    </section>
  )
}

export default HeroSection
