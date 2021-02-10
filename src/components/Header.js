import React, { useState } from 'react';

import '../styles/Header.css';

const Header = ({ isEditing }) => {
  const [name, setName] = useState('Name');
  const [mobile, setMobile] = useState('Mobile');
  const [email, setEmail] = useState('Email');
  const [address, setAddress] = useState('Address');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleMobileChange = (e) => {
    setMobile(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  return (
    <header className='Header'>
      {isEditing ? (
        <form className='Header-form'>
          <label htmlFor='nameInput'>Name</label>
          <input
            id='nameInput'
            value={name}
            onChange={handleNameChange}
            className='Header-input'
          />
          <label htmlFor='mobileInput'>Mobile</label>
          <input
            id='mobileInput'
            value={mobile}
            onChange={handleMobileChange}
            className='Header-input'
          />
          <label htmlFor='emailInput'>Email</label>
          <input
            id='emailInput'
            value={email}
            onChange={handleEmailChange}
            className='Header-input'
          />
          <label htmlFor='addressInput'>Address</label>
          <input
            id='addressInput'
            value={address}
            onChange={handleAddressChange}
            className='Header-input'
          />
        </form>
      ) : (
        <>
          <h1 className='Header-name'>{name}</h1>
          <h2 className='Header-info'>{mobile}</h2>
          <h2 className='Header-info'>{email}</h2>
          <h2 className='Header-info'>{address}</h2>
        </>
      )}
    </header>
  );
};

export default Header;
