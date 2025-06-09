import Image from "next/image";
import Marquee from "react-fast-marquee";

const Footer = () => {
  const footerData = [
    {
      title: "Join We-Fund",
    },

    {
      title: "Claim Demo Funds",
    },
    {
      title: "Trade Live Markets",
    },
    {
      title: "Reset balance",
    },
  ];

  return (
    <div className="w-full h-[500px] md:p-8 flex flex-col gap-10 ">
      <div className="flex items-center justify-between">
        <Marquee
          speed={50}
          pauseOnHover={true}
          gradient={false}
          className="py-2"
        >
          {footerData.map((item, index) => (
            <div key={index} className="flex items-center gap-2 mx-28">
              <Image
                src="/assets/star.svg"
                alt="Logo"
                width={1000}
                height={1000}
                className="w-6 h-6"
              />
              <p>{item.title}</p>
            </div>
          ))}
        </Marquee>
      </div>
      <div className="w-full h-full relative">
        <Image
          src="https://res.cloudinary.com/dkeh0cumc/image/upload/v1749303676/footerimg_zmrq1x.png"
          alt="Hero"
          width={1000}
          height={1000}
          className="w-full h-full object-cover opacity-30"
        />
        <div className="w-full h-full absolute top-0 left-0 right-0 bottom-0 gradient-to-b from-black/50 to-black/10"></div>
        <div className=" absolute top-0 left-0 bottom-0 right-0 w-full h-full flex flex-col justify-center items-center">
          <div className="md:w-4/6 w-full flex flex-col gap-8 items-center relative">
            <h1 className="md:text-6xl text-4xl text-center">
              Start Trading With <br /> zero-risk, Zero Capital
            </h1>

            <button className="hover:scale-105 hover:shadow-2xl transition-all duration-300 shadow-primary cursor-pointer bg-primary w-fit text-black py-3 px-10 text-sm md:text-lg rounded-full">
              Get Started
            </button>
          </div>

          <div className="flex justify-between py-4 w-full gap-2 items-center  absolute bottom-0 ">
            <div className="md:w-24 w-20 ">
              <Image
                src="/assets/logonew.svg"
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
                {/* <p className="text-white/50">|</p>
                <Image
                  src="/assets/telegram.svg"
                  alt="Telegram"
                  width={1000}
                  height={1000}
                  className="md:w-6 md:h-6 w-4 h-4"
                /> */}
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
