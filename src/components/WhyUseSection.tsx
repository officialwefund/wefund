const WhyUseSection = () => {
    const whyUseData = [
        {
            title: "Risk-Free Degening",
            description: "Practice trading in real-time market conditions — no actual losses, just the emotional ones."
        },
        {
            title: "Learn by Doing",
            description: "Understand how price movements, volume, and hype affect trades — without getting rekt for real."
        },
        {
            title: "Meme-Focused Markets",
            description: "From $PEPE to $GME2.0, explore a wild list of trending tokens and niche coins just like on-chain."
        },
        {
            title: "Just Like the Real Thing",
            description: "Live charts, simulated order books, and viral token listings. You’ll forget it’s not real (until your bag hits $0 and you feel…nothing 😅)."
        },
    ]
    return (
        <>

        <div className="w-[1400px] h-screen mx-auto flex flex-col gap-20 items-center  p-8 ">
            <h1 className="text-5xl font-bold">Why Use <span>We-Fund?</span></h1>
            <div className="grid grid-cols-3 gap-8 items-center">
            <div className="bg-white/10 rounded-2xl w-full h-[500px] "></div>
            <div className="grid grid-cols-2 gap-8 col-span-2">
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
    )
}

export default WhyUseSection