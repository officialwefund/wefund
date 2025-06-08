import CustomMarquee from "@/components/HeaderMarquee"

const Memecoin = () => {
    return (
        <>
        <div className="md:w-[1400px] w-full mx-auto flex flex-col gap-4 h-screen">
            <div className="py-4">
                <div>
                    <p>Scan</p>
                </div>
            </div>
            <div className="h-full">

            </div>

           <div className="absolute bottom-0 left-0 right-0">
           <CustomMarquee />
           </div>
        </div>
        </>
    )
}

export default Memecoin