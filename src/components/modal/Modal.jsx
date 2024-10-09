import React, { useState, useEffect } from 'react';
import { Flex, SelectField, Divider } from '@aws-amplify/ui-react';
import { prepareTransactionRequest } from '@wagmi/core';
import { useNavigate } from 'react-router-dom';
import { parseEther } from 'viem';
import { config } from '../../wagmi';
import TokensCollection from '../collections/TokensCollection';
import {listLocations} from '../../services/locations';
import { createTransaction } from '../../services/transactions';

import './Modal.css';


function Modal() {
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

  const prepareTxn = async () =>{
    let transaction = await prepareTransactionRequest(config, {
      to: '0x70997970c51812dc3a010c7d01b50e0d17dc79c8',
      account: '0x70997970c51812dc3a010c7d01b50e0d17dc79c8',
      value: parseEther('1'),
    })

    let response = await createTransaction({
      amount: transaction.value.toString(),
      status: 'pending',
      gas: transaction.gas.toString(),
      gasPrice: transaction.gasPrice.toString(),
      from: transaction.from,
      to: transaction.to,
      chainId: transaction.chainId,
      nonce: transaction.nonce,
      hash: '',
      timestamp: getTimestamp
    },  
    {
      authMode: 'userPool',
    })
    console.log(response)
    navigate('/');
  } 

  const [locations, setLocations] = useState([]);

  useEffect(() => {
    const fetchLocations = async () => {
      let locations = await listLocations({
          authMode: 'userPool',
      });
      console.log(locations);
      setLocations(['Foggy-Bottom', 'Dupont-Circle', 'Georgetown']);
    };
    fetchLocations();
  }, []);

  return (
    <div className={`modal ${isVisible ? 'modal-visible' : ''}`}>
        <h1> Starting New Ride </h1>
        <p> <strong> Current Balance: </strong> 54.33 </p>
        <p> <strong>Timestamp:</strong> {getTimestamp}</p>  

        <div className="modalSelectAssetSection">
          {/* <p> <strong> Origin: </strong> </p> */}
          <SelectField className="modalSelectAsset" label="Select Origin">
              {locations.map((location, index) => (
                <option key={index} value={location}>
                  {location}
                </option>
              ))}
            </SelectField>
        </div>

        <div className="modalBody">
          <SelectField className="modalSelectAsset" label="Select Token">
              <option value="Metro">Metro Token (Metro)</option>
              <option value="TFSA">TFSA (TFSA)</option>
            </SelectField>
        </div>
        
        <div className="modalFooter">
          <button onClick={prepareTxn}> Confirm </button>
          <button onClick={closeModal}> Cancel </button>
        </div>
    </div>
  );
}

export default Modal;