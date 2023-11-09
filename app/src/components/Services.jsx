import { Carousel } from 'flowbite-react';

export default function Services() {
    return (
        <div className="top-14 h-30 w-full sm:h-[40vh] sm:w-full xl:h-[40vh] bg-clip-content bg-transparent shadow-2xl pt-4">
            <h2 className="text-2xl font-bold tracking-tight text-white">
          {" "}
          Our Services
        </h2>
          <Carousel slideInterval={1000} className="overflow-y-clip rounded py-5">
          <div className="relative h-full w-full mix-blend-overlay object-contain py-2">
            <img src="./app-services.svg" alt="..." className="absolute h-full w-full object-contain " />
            <div className="absolute -z-10 bg-gradient-to-b from-stone-800 via-black to-black h-full w-full" />
            </div>
            <div className="relative h-full w-full mix-blend-overlay py-2">
            <img src="./website-services.svg" alt="..." className="absolute h-full w-full object-contain " />
            <div className="absolute -z-10 bg-gradient-to-b from-stone-800 via-black to-black h-full w-full" />
            </div>
            <div className="relative h-full w-full mix-blend-overlay py-2">
            <img src="./design-services.svg" alt="..." className="absolute h-full w-full object-contain " />
            <div className="absolute -z-10 bg-gradient-to-b from-stone-800 via-black to-black h-full w-full" />
            </div>
          </Carousel>

        </div> 
    );
}