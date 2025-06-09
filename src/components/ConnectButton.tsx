"use client"

import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { useWallet } from "@solana/wallet-adapter-react";


export const ConnectButton = () => {
  

  const { publicKey, connected } = useWallet();
  
  return (
    <WalletMultiButton>
      
      {connected ? (
        <div>
          <p>Demo...{publicKey?.toBase58().slice(-5)}</p>
        </div>
      ) : (
        <p>Connect Wallet</p>
      )}
    </WalletMultiButton>
  );
};
