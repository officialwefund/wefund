import Image from "next/image"

const UserMarquee = () => {
    return (
        <div className="flex items-center gap-2 p-2 ">
            <h1 className="font-semibold md:text-base text-sm">Fwog</h1>
            <div className="w-8 h-8 rounded-full">
                <Image src="/assets/pfp.png" alt="Fwog" width={1000} height={1000} className="rounded-full" />
            </div>

            <h1 className=" text-white/50 md:text-sm text-xs">XDF...ssZ Bought</h1>
        </div>
    )
}

export default UserMarquee