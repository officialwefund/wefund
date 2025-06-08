// components/ConnectButton.tsx
'use client';

import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { useWallet } from '@solana/wallet-adapter-react';
// import { useState } from 'react';

export const ConnectButton = () => {
  // const [modal, setModal] = useState(false)
    const { publicKey, connected } = useWallet();
    return <WalletMultiButton>
         {connected ? (
        <div>
          <p>Connected Wallet: {publicKey?.toBase58()}</p>
        
        </div>

      ) : (
        <p>Wallet not connected</p>
      )}
    </WalletMultiButton>;
};
