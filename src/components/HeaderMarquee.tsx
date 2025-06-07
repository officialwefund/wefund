import Marquee from "react-fast-marquee";
import UserMarquee from "./UserMarquee";

const CustomMarquee = () => {
    return (
        <Marquee 
            speed={50} 
            pauseOnHover={true}
            gradient={false}
            className="py-2"
        >
            {[1,2,3,4,5,6].map((item) => (
                <div key={item} className="mx-2">
                    <UserMarquee />
                </div>
            ))}
        </Marquee>
    )
}

export default CustomMarquee;