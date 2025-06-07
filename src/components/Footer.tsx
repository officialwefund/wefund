import Image from "next/image";

const Footer = () => {
    const footerData = [{
        title: "Join We-Fund",
        
    }, 

{
    title: "Join We-Fund",
    
},
{
    title: "Join We-Fund",
    
},
{
    title: "Join We-Fund",
    
},

]
    
  return (
    <div className="w-full h-[500px] p-8 flex flex-col gap-10 ">
      <div className="flex items-center justify-between">
       {footerData.map((item, index) => (
        <div key={index} className="flex items-center gap-2">
            <Image src="/assets/star.svg" alt="Logo" width={1000} height={1000} className="w-6 h-6" />
            <p>{item.title}</p>
        </div>
       ))}
      </div>
      <div className="w-full h-full relative">
        <Image
          src="/assets/footerimg.jpg"
          alt="Hero"
          width={1000}
          height={1000}
          className="w-full h-full object-cover opacity-10 blur-md"
        />
        <div className="w-full h-full absolute top-0 left-0 right-0 bottom-0 gradient-to-b from-black/50 to-black/10"></div>
        <div className=" absolute top-0 left-0 bottom-0 right-0 w-full h-full flex flex-col justify-between items-center">
          <div className="w-4/6 flex flex-col gap-4 items-center relative">
            <h1 className="text-6xl text-center">
            Start Trading With 
            zero-risk, Zero Capital
            </h1>
            
            <button className="bg-primary w-fit text-black py-3 px-10 text-sm rounded-full">
             Get Started
            
            </button>

            
          </div>

          <div className="flex justify-between w-full gap-2 items-center p-8     ">
            <div className="w-24 ">
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
                  className="w-6 h-6"
                />
                <p className="text-white/50">|</p>
                <Image
                  src="/assets/telegram.svg"
                  alt="Telegram"
                  width={1000}
                  height={1000}
                  className="w-6 h-6"
                />
              </div>
              <button className="bg-[#51515175] text-white flex items-center gap-2 py-3 px-4 rounded-full">
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
         
        </div>
      </div>
    </div>
  );
};

export default Footer;
