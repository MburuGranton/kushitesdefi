import React, { useState } from 'react';
// import './StakingUI.css'; // Import custom CSS for additional styling

function StakingUI() {
  const [token, setToken] = useState('');
  const [amount, setAmount] = useState('');

  const tokenOptions = ['ICP','USDT', 'ETH', 'CELO']; // Adapt options based on available staking pools

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-white rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-bold mb-6 text-center">Stake Tokens</h2>
        <div className="flex items-center mb-4">
          <select
            value={token}
            onChange={(e) => setToken(e.target.value)}
            className="w-64 rounded-l-md rounded-r-none border border-gray-300 bg-white py-2 px-4 text-left focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">Select Token</option>
            {tokenOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Amount"
            className="w-full pl-8 pr-4 rounded-none rounded-r-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div className="flex items-center mt-4">
          <div className="w-full rounded-md bg-gray-100 p-4">
            <p className="font-semibold text-sm">Estimated APY: 6.5%</p>
            <p className="text-xs text-gray-500">Based on current network conditions</p>
          </div>
          <button className="ml-4 w-full px-4 py-2 bg-blue-500 text-white font-bold rounded-md hover:bg-blue-600">
            Stake
          </button>
        </div>
      </div>
    </div>
  );
}

export default StakingUI;
