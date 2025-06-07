const FeatureSection = () => {
    return (
        <>
        <div className="md:w-[1400px] w-full md:h-screen mx-auto flex md:flex-row flex-col items-center gap-20 md:p-8 p-2 mt-[340px]">
            <div className="md:w-1/2 w-full flex flex-col gap-6">
            <p className="md:text-xl text-lg text-white/50">No wallets. | No fees. | No real losses.</p>
            <h1 className="md:text-6xl text-4xl font-bold">What is We-Fund?</h1>
            <p className="md:text-2xl text-lg text-white/50">We-Fund is where the hype meets the sandbox. It&apos;s a fun, fast, and zero-risk way to learn how memecoin markets work — and how to win at them.</p>
            <button className="border border-primary w-fit text-white py-3 px-6 rounded-full"><span className="text-primary">$$$</span> Get Funded Now <span className="text-primary">$$$</span></button>

            
            </div>
            <div className="md:w-1/2 w-full bg-white/10 rounded-2xl h-[600px]"></div>
        </div>
        </>
    )
}

export default FeatureSection