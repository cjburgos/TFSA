import React, { useState, useEffect } from 'react';
import { Flex, SelectField, Divider } from '@aws-amplify/ui-react';

import { useNavigate } from 'react-router-dom';
import { parseEther } from 'viem';
import { config } from '../../wagmi';
import { listTransactions } from '../../services/transactions';
import { simulateContract, writeContract,waitForTransactionReceipt } from '@wagmi/core';
import { getAccount,useAccount } from '@wagmi/core';

import './Modal.css';

import abi from '../../../smartContractCode/abi.json';

function Modal() {

  const { address, isConnected } = useAccount(); // Get the connected wallet information
  const { request } = async () => await simulateContract(config, {
    abi,
    address: '0x8412B9446aE027a3E734d478B10935c0a6421288',
    functionName: 'transferFrom',
    args: [
      address,
      '0xe755336a328066D67A50D1bc08Cb3DFF864f4baC',
      123n,
    ],
  })

  const [isVisible,setIsVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);
  
  const closeModal = () => {
      setIsVisible(false);
      navigate('/');
  }

  const getTimestamp = new Date().toLocaleString();

  const submitTxn = async () =>{
    let hash = await writeContract(config, request);
    const transactionReceipt = waitForTransactionReceipt(config, {
      hash: hash,
    })
    console.log(transactionReceipt)
    navigate('/');
  } 

  

  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
      const fetchTransactions = async () => {
          let txns = await listTransactions();
          setTransactions(txns.data?.filter(txn => txn.status === 'pending'))
      };

      fetchTransactions();
  }, []);
  const [selectedValue, setSelectedValue] = useState('');
  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <div className={`modal ${isVisible ? 'modal-visible' : ''}`}>
        <h1> Complete Ride </h1>
        <p> <strong> Current Balance: </strong> 54.33 </p>
        <p> <strong> Amount Due: </strong> 3.56 </p>
        <p> <strong>Ride Started On:</strong> {transactions.filter(txn => txn.id === selectedValue).map(txn => txn.timestamp)}</p>  
        <p> <strong>Timestamp:</strong> {getTimestamp}</p>  

        <div className="modalSelectAssetSection">
          {/* <p> <strong> Origin: </strong> </p> */}
          <SelectField className="modalSelectAsset" label="Select Ride" value={selectedValue} onChange={handleChange}>
              {transactions.map((txn, index) => (
                <option key={index} value={txn.id}>
                  {txn.id}
                </option>
              ))}
            </SelectField>
        </div>
        
        <div className="modalFooter">
          <button onClick={submitTxn}> Confirm </button>
          <button onClick={closeModal}> Cancel </button>
        </div>
    </div>
  );
}

export default Modal;