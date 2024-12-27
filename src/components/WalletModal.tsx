import React from 'react';
import { ASSETS_URL } from '../services/walletService';
import { Wallet2, X } from 'lucide-react';
import { useWalletConnection } from '../hooks/useWalletConnection';
import { hideModal } from '../services/walletService';

export default function WalletModal() {
  const { connectPhantom, connectSolflare, connecting } = useWalletConnection();

  return (
    <div 
      id="overlay" 
      className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 hidden"
      onClick={(e) => e.target === e.currentTarget && hideModal()}
    >
      <div className="relative max-w-md w-full mx-auto mt-20">
        <div className="bg-gray-900 rounded-xl border border-gray-800 p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold text-white">Connect Wallet</h2>
            <button 
              onClick={hideModal}
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="Close"
            >
              <X size={24} />
            </button>
          </div>
          
          <hr className="border-gray-800 mb-6" />
          
          <div className="space-y-4">
            <button 
              onClick={connectPhantom}
              disabled={connecting}
              className="w-full flex items-center gap-3 p-4 rounded-lg border border-gray-800 hover:bg-gray-800/50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <img src={`${ASSETS_URL}images/phantom_wallet.svg`} alt="Phantom" className="w-8 h-8" />
              <span className="text-white">Phantom Wallet</span>
            </button>
            
            <button 
              onClick={connectSolflare}
              disabled={connecting}
              className="w-full flex items-center gap-3 p-4 rounded-lg border border-gray-800 hover:bg-gray-800/50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <img src={`${ASSETS_URL}images/solflare_wallet.svg`} alt="Solflare" className="w-8 h-8" />
              <span className="text-white">Solflare Wallet</span>
            </button>

            <a 
              href="https://phantom.app/ul/browse/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center gap-3 p-4 rounded-lg bg-purple-600 hover:bg-purple-700 transition-colors"
            >
              <Wallet2 className="w-6 h-6 text-white" />
              <span className="text-white font-semibold">Get a Wallet</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}