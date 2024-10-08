// src/components/Modal.jsx
import React, { useState, useEffect } from 'react';
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
  return (
    <div className={`modal ${isVisible ? 'modal-visible' : ''}`}>
        <h2>New Ride</h2>
        <p> Verify you wallet balance and confirm ride</p>
        <button onClick={closeModal}> Confirm </button>
    </div>
  );
}

export default Modal;