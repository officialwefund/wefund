import UserMarquee from "./UserMarquee"

const Marquee = () => {
    return (
        <div className="flex items-center  gap-2 p-2 overflow-y-scroll overflow-x-hidden ">
            {[1,2,3,4,5,6].map((item) => (
                <UserMarquee key={item} />
            ))}
        </div>
    )
}

export default Marquee