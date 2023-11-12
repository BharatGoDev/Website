import { Carousel } from "flowbite-react";

export default function Services() {
  return (
    <section id="services">
      <div className="w-full sm:py-5 sm:h-[50vh] sm:w-full xl:h-[40vh] bg-clip-content bg-transparent shadow-2xl pt-4">
        <h2 className="text-2xl font-bold tracking-tight text-white">
          Our Services
        </h2>
        <Carousel slideInterval={3000} className="first-div">
        <div className="relative h-full w-full py-2" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
  <img src="./app-services.svg" alt="..." className="relative h-1/2  w-full object-contain" />
  <br/>
  <span className="text-white">
    App Development <br /> We specialize in creating cool and
    easy-to-use mobile apps. They work on different devices so more
    people can enjoy them. From planning to launching, we take care of
    the whole process to give users a hassle-free experience.
  </span>
</div>

<div className=" relative h-full w-full py-2" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
  <img src="./website-services.svg" alt="..." className="relative h-1/2 w-full object-contain " /><br/>
  <span className="text-white">
  Web Development <br /> We are really good at making websites that
              look great and work well. We use the latest tech to make sure
              everything runs smoothly. Plus, we customize our solutions to fit
              exactly what you need, making sure your online presence stands
              out.
  </span>
</div>

          <div className="relative  h-full w-full  py-2" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
            <img
              src="./design1.svg"
              alt="..."
              className="relative h-1/2 w-full object-contain "
            /><br/>
            <span className="text-white">
              Graphic Design <br /> We love making things look awesome, like
              logos and promo stuff. Every little detail matters to us, creating
              a unique and memorable look for your brand. Our creative designs
              make sure your brand gets noticed and remembered by everyone.
            </span>
          </div>
        </Carousel>

        
        <Carousel slideInterval={3000} className="carousel-hidden ">
  <div className="relative h-1/2 w-full py-2" >
    <img src="./app-services.svg" alt="..." className="relative h-full  w-full object-contain" />
    <span className="text-white">
      App Development <br /> We specialize in creating cool and
      easy-to-use mobile apps. They work on different devices so more
      people can enjoy them. From planning to launching, we take care of
      the whole process to give users a hassle-free experience.
    </span>
  </div>

  <div className=" relative h-1/2 w-full py-2" >
    <img src="./website-services.svg" alt="..." className="relative h-full w-full object-contain " />
    <span className="text-white">
      Web Development <br /> We are really good at making websites that
      look great and work well. We use the latest tech to make sure
      everything runs smoothly. Plus, we customize our solutions to fit
      exactly what you need, making sure your online presence stands
      out.
    </span>
  </div>

  <div className="relative  h-1/2 w-full  py-2">
    <img
      src="./design1.svg"
      alt="..."
      className="relative h-full w-full object-contain "
    />
    <span className="text-white">
      Graphic Design <br /> We love making things look awesome, like
      logos and promo stuff. Every little detail matters to us, creating
      a unique and memorable look for your brand. Our creative designs
      make sure your brand gets noticed and remembered by everyone.
    </span>
  </div>
</Carousel>



      </div>
    </section>
  );
}

