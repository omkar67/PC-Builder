import React from 'react';
import CustList from '../components/custList';
import CustBG from '../components/custBG';

const customizePC = () => {
  return (
    <div style={{ position: 'relative'}}>
      <CustBG />
      <div style={{ position: 'Absolute', top: 50, left: 0, width: '100%', height: '100%', zIndex: 1, }}>
        <CustList />
      </div>
    </div>
  );
};

export default customizePC;
