"use client"

import Image from "next/image";
import { useEffect, useState } from "react";
import { useWallet } from "@solana/wallet-adapter-react";

const HeroSection = () => {

  const [showModal, setShowModal] = useState(false);

   const { connected } = useWallet();
    useEffect(() => {
      if (connected) {
        setShowModal(true); // Show modal on connect
      }
    }, [connected]);

  return (
    <div className="w-full h-screen ">
      {showModal && (

<div onClick={(e) => { e.stopPropagation(); setShowModal(false)}} className="fixed p-2 top-0 left-0 right-0 bottom-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center">

  <div className="md:w-[600px] w-full   rounded-2xl p-6 flex flex-col gap-4 items-center">
    <h1 className="md:text-4xl text-2xl font-bold">you must have 10,000 tokens of
    <span className="text-primary"> $Wefund</span> in order to gain access</h1>
    <div className="w-full h-[250px] bg-[#2f2f2f] rounded-2xl flex items-center justify-center">
    <h1 className="text-white/50 text-2xl">Token Image</h1></div>
    <button className="hover:shadow-2xl transition-all duration-300 shadow-primary cursor-pointer border border-primary w-fit text-white py-2 px-20 rounded-full h-fit"> Buy Token </button>

  </div>

</div>
  )}
      <div className="w-full h-full relative">
        <Image
          src="https://res.cloudinary.com/dkeh0cumc/image/upload/v1749303485/hero_wwv47p.jpg"
          alt="Hero"
          width={1000}
          height={1000}
          className="w-full h-full object-cover opacity-80 blur-md"
        />
        <div className="md:px-8 px-2 absolute top-0 left-0 bottom-0 right-0 w-full h-full flex items-center gap-20 flex-col pt-32">
         

          <div className="md:w-4/6 w-full flex flex-col gap-4 items-center relative ">
            <h1 className="md:text-6xl text-4xl text-center">
              <span className="text-primary">Trade</span> Memecoins. Risk <br />{" "}
              Nothing. Learn <span className="text-primary">Everything.</span>
            </h1>
            <p className="md:w-4/6 mx-auto text-center text-white/50 md:text-xl text-md">
              The paper trading playground for meme traders. Trade. Shill.
              Compete — with demo money.
            </p>
            <button onClick={() => setShowModal(true)} className="hover:shadow-2xl hover:scale-105 transition-all duration-300 shadow-primary cursor-pointer border-2 border-primary w-fit text-white py-3 px-6 rounded-full md:text-base text-[10px]">
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
            <div className=" md:w-[1200px] md:h-[700px] h-[400px] w-full rounded-2xl  absolute top-0 left-0 right-0 mx-auto">
            <Image
            src="/assets/dashboard.png"
            alt="Hero"
            width={10000}
            height={10000}
            className="w-full h-full object-contain rounded-2xl hover:scale-105 transition-all duration-300 cursor-pointer"
            />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
