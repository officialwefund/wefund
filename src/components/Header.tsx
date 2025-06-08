import Image from "next/image"
import { ConnectButton } from "./ConnectButton"

const Header = () => {
    return (
        <div className="md:p-8 p-2 bg-black">
            <div className="flex justify-between w-full gap-2 items-center ">
                        <div className="md:w-24 w-20 ">
                          <Image
                            src="/assets/logo.svg"
                            alt="Logo"
                            width={1000}
                            height={1000}
                          />
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="flex items-center gap-2">
                            <Image
                              src="/assets/x.svg"
                              alt="X"
                              width={1000}
                              height={1000}
                              className="md:w-6 md:h-6 w-4 h-4"
                            />
                            <p className="text-white/50">|</p>
                            <Image
                              src="/assets/telegram.svg"
                              alt="Telegram"
                              width={1000}
                              height={1000}
                              className="md:w-6 md:h-6 w-4 h-4"
                            />
                          </div>
                         
                          <ConnectButton />
                        </div>
                      </div>
        </div>
    )
}

export default Header