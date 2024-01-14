// // import React from 'react';
// // import './Swapp.css';


// // function SwapUI() {
// //   return (
// //     <div className="flex items-center justify-center h-screen">
// //       <div className="bg-white rounded-lg shadow-md p-8">
// //         <h2 className="text-2xl font-bold mb-6 text-center">Swap Tokens</h2>
// //         <div className="flex items-center mb-4">
// //           <input
// //             type="text"
// //             className="w-64 px-4 py-2 mr-4 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
// //             placeholder="From Token"
// //           />
// //           <i className="fas fa-exchange-alt text-xl text-blue-500"></i>
// //           <input
// //             type="text"
// //             className="w-64 px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
// //             placeholder="To Token"
// //           />
// //         </div>
// //         <button className="w-full px-4 py-2 bg-blue-500 text-white font-bold rounded-md hover:bg-blue-600">
// //           Swap
// //         </button>
// //         <button className="mt-4 w-full px-4 py-2 bg-gray-800 text-white font-bold rounded-md hover:bg-gray-700">
// //           Buy
// //         </button>
// //         <button className="mt-4 w-full px-4 py-2 bg-blue-500 text-white font-bold rounded-md hover:bg-blue-600">
// //           Connect Wallet
// //         </button>
// //       </div>
// //     </div>
// //   );
// // }

// // export default SwapUI;


import React, { useState } from 'react';
import './Swapp.css';

function SwapUI() {
  const [fromToken, setFromToken] = useState('');
  const [toToken, setToToken] = useState('');

  const fromTokenOptions = ['USDT', 'USDC', 'ETH', 'BTC'];
  const toTokenOptions = ['ETH', 'USDT', 'CELO', 'ICP'];

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-white rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-bold mb-6 text-center">Swap Tokens</h2>
        <div className="flex items-center mb-4">
          <div className="relative">
            <select
              value={fromToken}
              onChange={(e) => setFromToken(e.target.value)}
              className="absolute left-0 w-64 rounded-l-md rounded-r-none border border-gray-300 bg-white py-2 px-4 text-left focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">From Token</option>
              {fromTokenOptions.map((token) => (
                <option key={token} value={token}>
                  {token}
                </option>
              ))}
            </select>
            <input
              type="number"
              placeholder="Amount"
              className="w-full pl-8 pr-4 rounded-none rounded-r-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <i className="fas fa-exchange-alt text-xl text-blue-500 mx-4"></i>
          <div className="relative">
            <select
              value={toToken}
              onChange={(e) => setToToken(e.target.value)}
              className="absolute left-0 w-64 rounded-l-md rounded-r-none border border-gray-300 bg-white py-2 px-4 text-left focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">To Token</option>
              {toTokenOptions.map((token) => (
                <option key={token} value={token}>
                  {token}
                </option>
              ))}
            </select>
            <input
              type="number"
              placeholder="Amount"
              className="w-full pl-8 pr-4 rounded-none rounded-r-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>
        <button className="w-full px-4 py-2 mt-4 bg-blue-500 text-white font-bold rounded-md hover:bg-blue-600">
          Swap
        </button>
        <button className="mt-4 w-full px-4 py-2 bg-gray-800 text-white font-bold rounded-md hover:bg-gray-700">
          Buy
        </button>
        <button className="mt-4 w-full px-4 py-2 bg-blue-500 text-white font-bold rounded-md hover:bg-blue-600">
          Connect Wallet
        </button>
      </div>
    </div>
  );
}

export default SwapUI;
