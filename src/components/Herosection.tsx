import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="w-full h-screen ">
      <div className="w-full h-full relative">
        <Image
          src="https://res.cloudinary.com/dkeh0cumc/image/upload/v1749303485/hero_wwv47p.jpg"
          alt="Hero"
          width={1000}
          height={1000}
          className="w-full h-full object-cover opacity-80 blur-md"
        />
        <div className="md:px-8 px-2 absolute top-0 left-0 bottom-0 right-0 w-full h-full flex items-center gap-20 flex-col pt-20">
         

          <div className="md:w-4/6 w-full flex flex-col gap-4 items-center relative">
            <h1 className="md:text-6xl text-4xl text-center">
              <span className="text-primary">Trade</span> Memecoins. Risk <br />{" "}
              Nothing. Learn <span className="text-primary">Everything.</span>
            </h1>
            <p className="md:w-4/6 mx-auto text-center text-white/50 md:text-xl text-md">
              The paper trading playground for meme traders. Trade. Shill.
              Compete — with demo money.
            </p>
            <button className="hover:shadow-2xl transition-all duration-300 shadow-primary cursor-pointer border-2 border-primary w-fit text-white py-3 px-6 rounded-full md:text-base text-[10px]">
              <span className="text-primary">$$$</span> Get Funded Now{" "}
              <span className="text-primary">$$$</span>
            </button>

            <Image
              src="/assets/moon.png"
              alt="Hero Bottom"
              width={1000}
              height={1000}
              className="md:w-16 md:h-16 w-12 h-12 bg-blend-hard-light object-cover absolute md:bottom-0 md:right-0 -bottom-20 -right-0"
            />
            <Image
              src="/assets/moon.png"
              alt="Hero Bottom"
              width={1000}
              height={1000}
              className="md:w-16 md:h-16 w-12 h-12 bg-blend-hard-light object-cover absolute md:top-0 md:left-0 top-20 -left-8"
            />
            <Image
              src="/assets/star.svg"
              alt="Hero Bottom"
              width={1000}
              height={1000}
              className="md:w-12 md:h-12 w-6 h-6 bg-blend-hard-light object-cover absolute md:top-0 md:right-0 top-20 -right-4"
            />
            <Image
              src="/assets/star.svg"
              alt="Hero Bottom"
              width={1000}
              height={1000}
              className="md:w-12 md:h-12 w-8 h-8 bg-blend-hard-light object-cover absolute bottom-0 left-0"
            />
          </div>
          <div className="relative md:w-[1200px] w-full">
            <div className="md:w-[1100px] md:h-[600px] h-[400px] w-full rounded-2xl bg-white/10 absolute top-0 left-0 right-0 mx-auto">
            <Image
            src="/assets/dashboard.png"
            alt="Hero"
            width={10000}
            height={10000}
            className="w-full h-full object-cover"
            />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
