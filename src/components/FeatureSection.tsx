"use client"

import Image from "next/image";
import { useState } from "react";
import { useWallet } from "@solana/wallet-adapter-react";

const FeatureSection = () => {
    const [showModal, setShowModal] = useState(false);
    
      const { connected } = useWallet();
  return (
    <>
     {
            showModal && (
              <div
                onClick={(e) => {
                  e.stopPropagation();
                  setShowModal(false);
                }}
                className="fixed p-2 top-0 left-0 right-0 bottom-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center"
              >
                <div className="md:w-[600px] w-full   rounded-2xl p-6 flex flex-col gap-4 items-center">
                  {connected ? (
                    <>
                    <h1 className="md:text-4xl text-2xl font-bold">
                    you must have 10,000 tokens of
                    <span className="text-primary"> $Wefund</span> in order to gain
                    access
                  </h1>
                  <div className="w-full h-[250px] rounded-2xl flex items-center justify-center">
                    <Image
                    src="/assets/wefund22.png"
                    alt="Hero"
                    width={10000}
                    height={10000}
                    className="w-full h-full object-contain"
                    />
                  </div>
                  <button onClick={() => setShowModal(false)} className="hover:shadow-2xl transition-all duration-300 shadow-primary cursor-pointer border border-primary w-fit text-white py-2 px-20 rounded-full h-fit">
                    {" "}
                    Buy Token{" "}
                  </button>
                    </>
                  ) : (
                    <>
                    <h1 className="md:text-4xl text-2xl font-bold">
                   Connect Wallet
                  </h1>
                  <button onClick={() => setShowModal(false)} className="hover:shadow-2xl transition-all duration-300 shadow-primary cursor-pointer border border-primary w-fit text-white py-2 px-20 rounded-full h-fit">
                    Cancel
                  </button>
                    </>
                  )}
                </div>
              </div>
            )
          }
      <div className="md:w-[1400px] w-full md:h-screen mx-auto flex md:flex-row flex-col items-center gap-20 md:p-8 p-2 ">
        <div className="md:w-1/2 w-full flex flex-col gap-6">
          <p className="md:text-xl text-lg text-white/50">
            No SOL. | No fees. | No real losses.
          </p>
          <h1 className="md:text-6xl text-4xl font-bold">What is We-Fund?</h1>
          <p className="md:text-2xl text-lg text-white/50">
            We-Fund is where the hype meets the sandbox. It&apos;s a fun, fast,
            and zero-risk way to learn how memecoin markets work and how to
            win at them.
          </p>
          <button onClick={() => setShowModal(true)} className="hover:scale-105 hover:shadow-2xl transition-all duration-300 shadow-primary cursor-pointer border border-primary w-fit text-white py-3 px-6 rounded-full">
            <span className="text-primary">$$$</span> Get Funded Now{" "}
            <span className="text-primary">$$$</span>
          </button>
        </div>
        <div className="md:w-1/2 w-full grid grid-cols-3 gap-2 ">
          {["/assets/i1.png", "/assets/i2.png", "/assets/i3.png", "/assets/i4.png", "/assets/i5.png", "/assets/i6.png", "/assets/i7.png", "/assets/i8.png", "/assets/i9.png"].map(
            (item, index) => {
              return (
                <Image
                  key={index}
                  src={item}
                  alt="Hero"
                  width={10000}
                  height={10000}
                  className={`${index === 0 ? "rounded-ss-[60px]" : ""} ${index === 2 ? "rounded-se-[60px]" : ""} ${index === 6 ? "rounded-es-[60px]" : ""} ${index === 8 ? "rounded-ee-[60px]" : ""} w-full h-full object-cover hover:scale-110 transition-all duration-300 cursor-pointer`}
                />
              );
            }
          )}
        </div>
      </div>
    </>
  );
};

export default FeatureSection;
