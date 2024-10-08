// src/components/Modal.jsx
import React, { useState, useEffect } from 'react';
import { Flex, Text, Divider } from '@aws-amplify/ui-react';
import { prepareTransactionRequest } from '@wagmi/core';
import { parseEther } from 'viem';
import { config } from '../../wagmi';
import TokensCollection from '../collections/TokensCollection';

import './Modal.css';


function Modal() {
  const [isVisible,setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);
  
  const closeModal = () => {
      setIsVisible(false);
  }

  const getTimestamp = new Date().toLocaleString();

  const prepareTxn = prepareTransactionRequest(config, {
    to: '0x70997970c51812dc3a010c7d01b50e0d17dc79c8',
    account: '0x70997970c51812dc3a010c7d01b50e0d17dc79c8',
    value: parseEther('1'),
  })

  return (
    <div className={`modal ${isVisible ? 'modal-visible' : ''}`}>
        <h1> Starting New Ride </h1>
        <p> <strong> Current Balance: </strong> 54.33 </p>
        <p> <strong>Timestamp:</strong> {getTimestamp}</p>  
        <Divider orientation="horizontal" />
        <div className="modalSelectAsset">
          <p> <strong> Origin: </strong> {}</p>
        </div>

        <div className="modalBody">
          <p> Select Token </p>
          <TokensCollection/>
        </div>
        
        <div className="modalFooter">
          <button onClick={prepareTxn}> Confirm </button>
          <button onClick={closeModal}> Cancel </button>
        </div>
    </div>
  );
}

export default Modal;