import React, { useState } from 'react';
import StartRideModal from '../modal/StartRideModal'; // Adjust the import path as necessary
import {ConnectWallet} from "../web3/ConnectWallet.jsx";

import './SidePanel.css';
import '../modal/Modal.css';
import '../web3/ConnectWallet.css';

const SidePanel = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="side-panel">        
            <ConnectWallet className="connectWallet" />
            <button className="side-action-button" onClick={openModal}>Start Ride</button>
            {isModalOpen && <StartRideModal visible={isModalOpen} closeModal={closeModal}/>}
        </div>
    );
};

export default SidePanel;