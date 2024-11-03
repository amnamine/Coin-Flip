import React, { useState } from 'react';

const CoinFlip = () => {
  const [flipping, setFlipping] = useState(false);
  const [side, setSide] = useState(null);

  // Simulate the coin flip
  const flipCoin = () => {
    setFlipping(true);
    
    setTimeout(() => {
      const result = Math.random() > 0.5 ? 'heads' : 'tails';
      setSide(result);
      setFlipping(false);
    }, 2000); // 2 seconds for animation
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 text-white p-5">
      <h1 className="text-5xl font-extrabold mb-10 text-center tracking-wide animate-bounce">
        Flip the Coin!
      </h1>
      <div className="relative w-40 h-40 flex items-center justify-center mb-10">
        <div
          className={`w-40 h-40 bg-gradient-to-br from-yellow-400 via-yellow-300 to-yellow-200 rounded-full shadow-lg flex items-center justify-center border-4 border-yellow-600
            ${flipping ? 'animate-flip' : ''}`}
        >
          <p className="text-3xl font-extrabold text-black">{side ? side.toUpperCase() : "?"}</p>
        </div>
      </div>
      <button
        onClick={flipCoin}
        className="bg-white text-purple-600 font-bold text-lg px-8 py-4 rounded-full shadow-lg hover:bg-purple-700 hover:text-white transition duration-300 ease-in-out transform hover:scale-110"
      >
        {flipping ? 'Flipping...' : 'Flip Coin'}
      </button>
    </div>
  );
};

export default CoinFlip;
