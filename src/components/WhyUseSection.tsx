import Image from "next/image";

const WhyUseSection = () => {
  const whyUseData = [
    {
      title: "Risk-Free Degening",
      description:
        "Practice trading in real-time market conditions — no actual losses, just the emotional ones.",
    },
    {
      title: "Learn by Doing",
      description:
        "Understand how price movements, volume, and hype affect trades — without getting rekt for real.",
    },
    {
      title: "Meme-Focused Markets",
      description:
        "From $PEPE to $GME2.0, explore a wild list of trending tokens and niche coins just like on-chain.",
    },
    {
      title: "Just Like the Real Thing",
      description:
        "Live charts, simulated order books, and viral token listings. You’ll forget it’s not real (until your bag hits $0 and you feel…nothing 😅).",
    },
  ];
  return (
    <>
      <div className="md:w-[1400px] w-full md:h-screen mx-auto flex flex-col  md:gap-20 gap-10 items-center  md:p-8 px-2 py-20">
        <h1 className="md:text-5xl text-4xl font-bold">
          Why Use <span className="text-primary relative"> We-Fund? <Image src="/assets/line.png" alt="Logo" width={1000} height={1000} className="w-full absolute -bottom-3 left-0" /> </span>
        </h1>
        <div className="flex md:flex-row flex-col-reverse gap-8  items-center ">
          <div className="bg-white/10 rounded-2xl w-full md:h-[500px] h-[300px] "></div>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-8 col-span-2">
            {whyUseData.map((item, index) => (
              <div key={index} className="flex flex-col gap-4 p-4">
                <h1 className="text-3xl ">{item.title}</h1>
                <p className="text-xl text-white/50">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyUseSection;
