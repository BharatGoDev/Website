import { Carousel } from 'flowbite-react';

export default function Services() {
    return (
        <div className="h-80 w-full sm:h-[40vh] sm:w-full xl:h-[40vh] bg-clip-content bg-transparent shadow-2xl pt-4">
            <h2 className="text-2xl font-bold tracking-tight text-white">
          {" "}
          Our Services
        </h2>
          <Carousel slideInterval={3000} className="overflow-y-clip rounded py-5">
          <div className="relative h-full w-full mix-blend-overlay object-contain py-2">
            <img src="./app-services.svg" alt="App-Services BharatGoDev" className="absolute h-full w-full object-contain " />
            <div className="absolute -z-10 h-full w-full" />
            </div>
            <div className="relative h-full w-full mix-blend-overlay py-2">
            <img src="./website-services.svg" alt="Website-Services BharatGoDev" className="absolute h-full w-full object-contain " />
            <div className="absolute -z-10 h-full w-full" />
            </div>
            <div className="relative h-full w-full mix-blend-overlay py-2">
            <img src="./design-services.svg" alt="Design-Services BharatGoDev" className="absolute h-full w-full object-contain " />
            <div className="absolute -z-10 h-full w-full" />
            </div>
          </Carousel>

        </div> 
    );
}