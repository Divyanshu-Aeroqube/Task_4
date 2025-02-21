

import villas from '../Data/VillaData';

import VillaCard from '../Components/VillaCard';

const Villas = () => {

  return (
    <section className='w-full my-[5rem] '>
      <article className='w-[85%] mx-auto'>
        <article className="mb-[4.35rem] text-center">
          <h1 className="font-kanit text-[2rem] text-headColor">
            Let's explore the villas
          </h1>
          <h1 className="font-kanit text-[2rem] text-headColor">
            of your dreams
          </h1>
        </article>

        <div className='grid grid-cols-1 gap-4 md:gap-6 lg:gap-10 lg:space-y-9 sm:grid-cols-2 lg:grid-cols-3'>
          {villas.map((villa) => (
            <VillaCard key={villa.id} villa={villa} />
          ))}
        </div>
      </article>
    </section>
  );
}

export default Villas
