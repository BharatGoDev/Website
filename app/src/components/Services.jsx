import { Carousel } from "flowbite-react";

export default function Services() {
  return (
    <section id="services">
      <div className="top-14 h-35 w-full sm:py-5 sm:h-[50vh] sm:w-full xl:h-[40vh] bg-clip-content bg-transparent shadow-2xl pt-4">
        <h2 className="text-2xl font-bold tracking-tight text-white">
          Our Services
        </h2>
        <Carousel slideInterval={1000} className="overflow-y-clip rounded py-5">
          <div className="relative  h-full w-full mix-blend-overlay py-2">
            <img
              src="./app-services.svg"
              alt="..."
              className="relative h-3/4 w-full  object-contain  sm:justify-center"
            />
            <span className="text-white">App Development</span>
          </div>
          <div className="relative h-full w-full mix-blend-overlay py-2">
            <img
              src="./website-services.svg"
              alt="..."
              className="relative h-3/4 w-full object-contain "
            />
            <span className="text-white">Web Development</span>
          </div>
          <div className="relative  h-full w-full mix-blend-overlay py-2">
            <img
              src="./design-services.svg"
              alt="..."
              className="relative h-3/4 w-full object-contain "
            />
            <span className="text-white">Graphic Design</span>
          </div>
        </Carousel>
      </div>
    </section>
  );
}
