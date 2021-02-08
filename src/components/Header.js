import React, { useState } from 'react';

import '../styles/Header.css';

const Header = ({ isEditing }) => {
  const [name, setName] = useState('Name');
  const [mobile, setMobile] = useState('Mobile');
  const [email, setEmail] = useState('Email');
  const [address, setAddress] = useState('Address');

  const nameInput = document.querySelector('#nameInput');
  const mobileInput = document.querySelector('#mobileInput');
  const emailInput = document.querySelector('#emailInput');
  const addressInput = document.querySelector('#addressInput');

  return (
    <section className='Header'>
      {isEditing ? (
        <form className='Header-form'>
          <label htmlFor='nameInput'>Name</label>
          <input id='nameInput' value={name} />
          <label htmlFor='mobileInput'>Mobile</label>
          <input id='mobileInput' value={mobile} />
          <label htmlFor='emailInput'>Email</label>
          <input id='emailInput' value={email} />
          <label htmlFor='addressInput'>Address</label>
          <input id='addressInput' value={address} />
        </form>
      ) : (
        <>
          <h1 className='Header-name'>{name}</h1>
          <h2 className='Header-info'>{mobile}</h2>
          <h2 className='Header-info'>{email}</h2>
          <h2 className='Header-info'>{address}</h2>
        </>
      )}
    </section>
  );
};

export default Header;
