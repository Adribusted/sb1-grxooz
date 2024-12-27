import React from 'react';
import Hero from './components/Hero';
import Interface from './components/Interface';
import HallOfFame from './components/HallOfFame';

function App() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Hero />
      <Interface />
      <HallOfFame />
      
      {/* Endless.js required overlay structure */}
      <div id="overlay" className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 hidden items-center justify-center">
        <div id="modal" className="relative">
          <div id="allWallets" className="page hidden"></div>
          <div id="index" className="page block"></div>
          <div id="whatIsWallet" className="page hidden"></div>
        </div>
        <div id="loader" className="relative max-h-[80vh] overflow-y-auto p-5 rounded-xl bg-gray-900 shadow-xl hidden flex-col items-center text-white w-[90%] max-w-md">
          <button type="button" className="close-btn absolute top-5 right-5 bg-transparent border-none cursor-pointer text-gray-200 text-2xl" aria-label="Close" id="close">&times;</button>
          <div id="connect"></div>
          <div id="wait"></div>
          <div id="walletNotFound"></div>
          <div id="pending"></div>
          <div id="error"></div>
          <div id="rejected"></div>
          <div id="confirmed"></div>
          <div id="ineligible"></div>
          <div id="timeout"></div>
          <div id="tutorial"></div>
        </div>
      </div>
    </div>
  );
}

export default App;