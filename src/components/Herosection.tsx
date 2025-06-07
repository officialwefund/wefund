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
          className="w-full h-full object-cover opacity-10 blur-md"
        />
        <div className="md:px-8 px-2 absolute top-0 left-0 bottom-0 right-0 w-full h-full flex items-center gap-20 flex-col">
          <div className="flex justify-between w-full gap-2 items-center ">
            <div className="md:w-24 w-20 ">
              <Image
                src="/assets/logo.svg"
                alt="Logo"
                width={1000}
                height={1000}
              />
            </div>
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-2">
                <Image
                  src="/assets/x.svg"
                  alt="X"
                  width={1000}
                  height={1000}
                  className="md:w-6 md:h-6 w-4 h-4"
                />
                <p className="text-white/50">|</p>
                <Image
                  src="/assets/telegram.svg"
                  alt="Telegram"
                  width={1000}
                  height={1000}
                  className="md:w-6 md:h-6 w-4 h-4"
                />
              </div>
              <button className="bg-[#51515175] text-white flex items-center gap-2 md:py-3 md:px-4 px-2 py-2 rounded-full md:text-base text-xs">
                {" "}
                <Image
                  src="/assets/phantom.svg"
                  alt="Wallet"
                  width={1000}
                  height={1000}
                  className="w-6 h-6"
                />{" "}
                Connect Wallet
              </button>
            </div>
          </div>

          <div className="md:w-4/6 w-full flex flex-col gap-4 items-center relative">
            <h1 className="md:text-6xl text-4xl text-center">
              <span className="text-primary">Trade</span> Memecoins. Risk <br />{" "}
              Nothing. Learn <span className="text-primary">Everything.</span>
            </h1>
            <p className="md:w-4/6 mx-auto text-center text-white/50 md:text-xl text-md">
              The paper trading playground for meme traders. Trade. Shill.
              Compete — with demo money.
            </p>
            <button className="border border-primary w-fit text-white py-3 px-6 rounded-full md:text-base text-[10px]">
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
          <div className="relative md:w-[1000px] w-full">
            <div className="md:w-[1000px] md:h-[600px] h-[400px] w-full rounded-2xl bg-white/10 absolute top-0 left-0"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
