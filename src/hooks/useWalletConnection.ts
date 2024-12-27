import { useCallback, useState } from 'react';
import { showModal, hideModal } from '../services/walletService';
import toast from 'react-hot-toast';
import { Connection } from '@solana/web3.js';

declare global {
  interface Window {
    solana?: {
      isPhantom?: boolean;
      connect: () => Promise<{ publicKey: string }>;
      disconnect: () => Promise<void>;
    };
    solflare?: {
      isSolflare?: boolean;
      connect: () => Promise<{ publicKey: string }>;
      disconnect: () => Promise<void>;
    };
  }
}

export function useWalletConnection() {
  const [connecting, setConnecting] = useState(false);
  const [publicKey, setPublicKey] = useState<string | null>(null);

  const handleConnect = useCallback(async () => {
    if (connecting) return;
    setConnecting(true);
    showModal();
  }, [connecting]);

  const connectPhantom = useCallback(async () => {
    try {
      if (!window.solana?.isPhantom) {
        window.location.href = 'https://phantom.app/ul/browse/';
        return;
      }

      const connection = new Connection('https://api.mainnet-beta.solana.com');
      await window.solana.connect();
      
      if (window.solana.publicKey) {
        setPublicKey(window.solana.publicKey.toString());
        toast.success('Successfully connected to Phantom!');
        hideModal();
      }
    } catch (error) {
      console.error('Phantom connection error:', error);
      toast.error('Failed to connect to Phantom. Please try again.');
    } finally {
      setConnecting(false);
    }
  }, []);

  const connectSolflare = useCallback(async () => {
    try {
      if (!window.solflare?.isSolflare) {
        window.location.href = 'https://solflare.com/ul/v1/browse/';
        return;
      }

      await window.solflare.connect();
      
      if (window.solflare.publicKey) {
        setPublicKey(window.solflare.publicKey.toString());
        toast.success('Successfully connected to Solflare!');
        hideModal();
      }
    } catch (error) {
      console.error('Solflare connection error:', error);
      toast.error('Failed to connect to Solflare. Please try again.');
    } finally {
      setConnecting(false);
    }
  }, []);

  return {
    handleConnect,
    connectPhantom,
    connectSolflare,
    connecting,
    publicKey
  };
}