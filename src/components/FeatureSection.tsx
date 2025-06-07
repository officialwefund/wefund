const FeatureSection = () => {
    return (
        <>
        <div className="w-[1400px] h-screen mx-auto flex items-center gap-20 p-8 mt-[340px]">
            <div className="w-1/2 flex flex-col gap-6">
            <p className="text-xl text-white/50">No wallets. | No fees. | No real losses.</p>
            <h1 className="text-6xl font-bold">What is We-Fund?</h1>
            <p className="text-2xl text-white/50">We-Fund is where the hype meets the sandbox. It&apos;s a fun, fast, and zero-risk way to learn how memecoin markets work — and how to win at them.</p>
            <button className="border border-primary w-fit text-white py-3 px-6 rounded-full"><span className="text-primary">$$$</span> Get Funded Now <span className="text-primary">$$$</span></button>

            
            </div>
            <div className="w-1/2 bg-white/10 rounded-2xl h-[600px]"></div>
        </div>
        </>
    )
}

export default FeatureSection