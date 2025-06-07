import Image from "next/image"

const HeroSection = () => {
    return (
        <div className="w-full h-screen ">
            <div className="w-full h-full relative">
                <Image src="/assets/hero.jpg" alt="Hero" width={1000} height={1000} className="w-full h-full object-cover opacity-10 blur-md" />
                <div className="px-8 absolute top-0 left-0 bottom-0 right-0 w-full h-full flex items-center gap-20 flex-col">
                    <div className="flex justify-between w-full gap-2 items-center ">
                        <div className="w-24 ">
                            <Image src="/assets/logo.svg" alt="Logo" width={1000} height={1000} />
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="flex items-center gap-2">
                                <Image src="/assets/x.svg" alt="X" width={1000} height={1000} className="w-6 h-6" />
                                <p className="text-white/50">|</p>
                                <Image src="/assets/telegram.svg" alt="Telegram" width={1000} height={1000} className="w-6 h-6" />
                            </div>
                            <button className="bg-[#51515175] text-white flex items-center gap-2 py-3 px-4 rounded-full"> <Image src="/assets/phantom.svg" alt="Wallet" width={1000} height={1000} className="w-6 h-6" /> Connect Wallet</button>
                        </div>
                    </div>

                    <div className="w-4/6 flex flex-col gap-4 items-center relative">
                        <h1 className="text-6xl text-center"><span className="text-primary">Trade</span> Memecoins. Risk <br /> Nothing. Learn <span className="text-primary">Everything.</span></h1>
                        <p className="w-4/6 mx-auto text-center text-white/50 text-xl">The paper trading playground for meme traders. Trade. Shill. Compete — with demo money.</p>
                        <button className="border border-primary w-fit text-white py-3 px-6 rounded-full"><span className="text-primary">$$$</span> Get Funded Now <span className="text-primary">$$$</span></button>

                        <Image src="/assets/moon.png" alt="Hero Bottom" width={1000} height={1000} className="w-16 h-16 bg-blend-hard-light object-cover absolute bottom-0 right-0" />
                        <Image src="/assets/moon.png" alt="Hero Bottom" width={1000} height={1000} className="w-16 h-16 bg-blend-hard-light object-cover absolute top-0 left-0" />
                        <Image src="/assets/star.svg" alt="Hero Bottom" width={1000} height={1000} className="w-12 h-12 bg-blend-hard-light object-cover absolute top-0 right-0" />
                        <Image src="/assets/star.svg" alt="Hero Bottom" width={1000} height={1000} className="w-12 h-12 bg-blend-hard-light object-cover absolute bottom-0 left-0" />
                    </div>
<div className="relative w-[1000px]">
<div className="w-[1000px] h-[600px] rounded-2xl bg-white/10 absolute top-0 left-0"></div>

</div>
                </div>
            </div>
        </div>
    )
}

export default HeroSection