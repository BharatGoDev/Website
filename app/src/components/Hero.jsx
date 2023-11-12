import { Carousel } from "flowbite-react";
import code from "../assets/code.svg";
import app from "../assets/app.svg";
import design from "../assets/design.svg";
import programming from "../assets/programming.svg";
import contact from "../assets/contact.svg";

export default function Example() {
  return (
    <section id="about">
      <div className="bg-black lg:px-10 lg:pt-20 lg:pr-40 lg:pb-10 lg:pl-40">
        <div className="lg:flex lg:items-center">
          <Carousel
            leftControl=" "
            rightControl=" "
            slideInterval={1000}
            className="overflow-y-clip rounded-none"
          >
            <div className="relative object-contain py-2 sm:h-0 sm:w-0 md:h-0 md:w-0 lg:h-full lg:w-full">
              <img
                src={code}
                alt="Code BharatGoDev"
                className=" hidden lg:block lg:w-80 lg:h-80 lg:mt-0 "
              />
            </div>
            <div className="relative h-full w-full py-2">
              <img
                src={app}
                alt="App BharatGoDev"
                className=" hidden lg:block lg:w-80 lg:h-80 lg:mt-0"
              />
            </div>
            <div className="relative h-full w-full  py-2">
              <img
                src={design}
                alt="Design BharatGoDev"
                className=" hidden lg:block lg:w-80 lg:h-80 lg:mt-0"
              />
            </div>
            <div className="relative h-full w-full  py-2">
              <img
                src={programming}
                alt="Programming BharatGoDev"
                className=" hidden lg:block lg:w-80 lg:h-80 lg:mt-0"
              />
            </div>
            <div className="relative h-full w-full  py-2">
              <img
                src={contact}
                alt="Hero BharatGoDev"
                className=" hidden lg:block lg:w-80 lg:h-80 lg:mt-0"
              />
            </div>
          </Carousel>
          <div className="sm:pb-0 lg:text-right  text-center pt-2 lg:pl-20 lg:ml-20 ">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl  ">
              <span style={{ color: "#FF9933" }}>Bhar</span>
              <span style={{ color: "#FFFFFF" }}>atG</span>
              <span style={{ color: "#138808" }}>oDev</span>
            </h1>
            <p className="text-center pt-2 sm:pb-0 md:pb-10">
              <span style={{ color: "#FFFFFF" }}>
                Website, App & Graphic Design Specialists
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
