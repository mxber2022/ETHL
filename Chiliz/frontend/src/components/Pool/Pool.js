// src/Pool.js
import React, { useState } from 'react';
import { abi } from "./abi.js";
import { useContractWrite, usePrepareContractWrite } from 'wagmi';
import { parseEther } from 'viem';
import './Pool.css';

function Pool() {
  const CONTRACT_ADDRESS = "0x36a20007846639De19d63C3da976f8b5Ea1BfeDc";

  const { config } = usePrepareContractWrite({
    address: CONTRACT_ADDRESS,
    abi: abi,
    functionName: 'enter',
    args: [],
    value: parseEther("0.1"),
  });

  const { data, isLoading, isSuccess, isError, write } = useContractWrite(config);

  const [isTransactionPending, setTransactionPending] = useState(false);

  const handleButtonClick = async () => {
    setTransactionPending(true);
    await write?.();
    setTransactionPending(false);
  };

  return (
    <div className="pool-container">
    <h2 className="pool-title">🌊 Immerse Yourself in the Crypto Abyss!</h2>
    <p className="pool-description">
        Embark on an aquatic journey by contributing your essence to the ChilizJackpotPool. Plunge into the excitement, take a chance, and who knows, you might emerge as the triumphant explorer! 🌟
    </p>
    <button
        className={`pool-button ${isTransactionPending ? 'pending' : isSuccess ? 'success' : ''}`}
        disabled={isTransactionPending}
        onClick={handleButtonClick}
    >
        {isTransactionPending ? 'Delving Deep...' : isSuccess ? '🎉 Dive Successful!' : '💰 Plunge Into the Depths'}
    </button>
</div>

  );
}

export default Pool;
