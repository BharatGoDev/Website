export default function Example() {
  return (
    <div className="bg-black px-10 pt-20 pr-40 pl-40">
      <div className="flex items-center">
        <img
          src="/hero.svg"
          alt="hero"
          className="w-80 h-80 mt-0 hidden sm:block md:block"
        />
        <div className="text-right pl-20 ml-20">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            <span style={{ color: "#FF9933" }}>Bhar</span>
            <span style={{ color: "#FFFFFF" }}>atG</span>
            <span style={{ color: "#138808" }}>oDev</span>
          </h1>
          <p>
            <div className="text-center pt-2">
              <span style={{ color: "#FFFFFF" }}>
                Web & Graphic Design Specialists
              </span>
            </div>
          </p>
        </div>
      </div>
    </div>
  );
}
