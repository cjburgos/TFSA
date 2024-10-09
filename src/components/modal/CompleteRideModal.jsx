import React, { useState, useEffect } from 'react';
import { Flex, SelectField, Divider } from '@aws-amplify/ui-react';

import { useNavigate } from 'react-router-dom';
import { parseEther } from 'viem';
import { config } from '../../wagmi';
import { listTransactions } from '../../services/transactions';
import { simulateContract, writeContract,waitForTransactionReceipt } from '@wagmi/core';
import { useAccount } from 'wagmi';
import './Modal.css';
import abi from '../../../smartContractCode/artifacts/contracts/MetroToken.sol/MetroToken.json';
import { parseGwei } from 'viem'

function Modal() {

  const { address } = useAccount({config}); // Get the connected wallet information
  console.log(abi.abi)
  const request = async () => await simulateContract(config, {
    abi: abi.abi,
    address: '0x01f6440Ed36B1CDb3cAdB63C089fecb52Db0C8e0',
    functionName: 'transferFrom',
    args: [
      address,
      '0xaf755fdd0ea69482e61755855714591ba58595da',
      "3"
    ],
  });
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
    const requestData = await request();
    console.log(requestData);
    let hash = await writeContract(config, requestData);
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
        <p> <strong>Started:</strong> {transactions.filter(txn => txn.id === selectedValue).map(txn => txn.timestamp)}</p>  
        <p> <strong>Completed:</strong> {getTimestamp}</p>  

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