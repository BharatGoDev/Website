export default function Example() {
  return (
    <div className="bg-black pb-3">
      <div className="mx-auto max-w-2xl pb-0 px-4 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-white">
          {" "}
          Our Work
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 lg:grid-cols-3 sm:grid-cols-2 xl:gap-x-8">
          <div className="group relative h-full flex flex-col items-center">
            {" "}
            {/* Center text using flexbox */}
            <div className="w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:h-50">
              <img
                src="./Stoccoin.jpeg"
                alt="Stoccoin-Website"
                className="h-full w-full object-cover object-center lg:h-full lg:w-full"
              />
            </div>
            <div className="mt-4">
              <h3 className="text-sm text-white">
                <a href="https://github.com/Stoccoin-Official/Stoccoin-Website" target="blank">
                  <span aria-hidden="true" className="absolute inset-0"></span>
                  Stoccoin Website
                </a>
              </h3>
            </div>
          </div>

          <div className="group relative h-full flex flex-col items-center">
            {" "}
            {/* Center text using flexbox */}
            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-70">
              <img
                src="./Ember.jpeg"
                alt="Ember"
                className="h-full w-full object-cover object-center lg:h-full lg:w-full"
              />
            </div>
            <div className="mt-4">
              <h3 className="text-sm text-white">
                <a href="https://github.com/EmberTechWorks/Ember" target="blank">
                  <span aria-hidden="true" className="absolute inset-0"></span>
                  Ember App
                </a>
              </h3>
            </div>
          </div>

          <div className="group relative h-full flex flex-col items-center">
            {" "}
            {/* Center text using flexbox */}
            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-70">
              <img
                src="Sevak.jpeg"
                alt="Sevak"
                className="h-full w-full object-cover object-center lg:h-full lg:w-full"
              />
            </div>
            <div className="mt-4">
              <h3 className="text-sm text-white">
                <a href="https://github.com/Sevak-Official/Sevak" target="blank">
                  <span aria-hidden="true" className="absolute inset-0"></span>
                  Sevak Website
                </a>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
