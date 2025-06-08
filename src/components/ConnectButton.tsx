// components/ConnectButton.tsx
"use client";

import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { useWallet } from "@solana/wallet-adapter-react";
import { useEffect, useState } from "react";

export const ConnectButton = () => {
  const [showModal, setShowModal] = useState(false);

  const { publicKey, connected } = useWallet();
  useEffect(() => {
    if (connected) {
      setShowModal(true); // Show modal on connect
    }
  }, [connected]);
  return (
    <WalletMultiButton>
      {showModal && (

      <div className="fixed top-0 left-0 right-0 bottom-0 bg-black/20 backdrop-blur-sm z-50 flex items-center justify-center">

        <div className="md:w-[600px] w-full   rounded-2xl p-6 flex flex-col gap-4 items-center">
          <h1 className="md:text-4xl text-2xl font-bold">you must have 10,000 tokens of
          <span className="text-primary"> $Wefund</span> in order to gain access</h1>
          <div className="w-full h-[250px] bg-[#2f2f2f] rounded-2xl flex items-center justify-center">
          <h1 className="text-white/50 text-2xl">Token Image</h1></div>
          <button className="hover:shadow-2xl transition-all duration-300 shadow-primary cursor-pointer border border-primary w-fit text-white py-2 px-20 rounded-full h-fit"> Buy Token </button>

        </div>

      </div>
        )}
      {connected ? (
        <div>
          <p>Connected Wallet: {publicKey?.toBase58().substring(0, 7)}</p>
        </div>
      ) : (
        <p>Wallet not connected</p>
      )}
    </WalletMultiButton>
  );
};
