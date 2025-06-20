import Image from "next/image"
import { ConnectButton } from "./ConnectButton"
import Link from "next/link"

const Header = () => {
    return (
        <div className="md:py-3 p-2 bg-black absolute top-0 left-0 right-0 z-10 ">
            <div className=" md:w-[1300px] mx-auto flex justify-between w-full gap-2 items-center ">
                        <div className="md:w-24 w-20 ">
                          <Image
                            src="/assets/logonew.svg"
                            alt="Logo"
                            width={1000}
                            height={1000}
                          />
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="flex items-center gap-2">
                            <Link href="https://x.com/WeFundSOL">
                            <Image
                              src="/assets/x.svg"
                              alt="X"
                              width={1000}
                              height={1000}
                              className="md:w-6 md:h-6 w-4 h-4"
                            />
                            </Link>
                            {/* <p className="text-white/50">|</p>
                            <Image
                              src="/assets/telegram.svg"
                              alt="Telegram"
                              width={1000}
                              height={1000}
                              className="md:w-6 md:h-6 w-4 h-4"
                            /> */}
                          </div>
                         
                          <ConnectButton />
                        </div>
                      </div>
        </div>
    )
}

export default Header