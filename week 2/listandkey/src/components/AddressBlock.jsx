import React from 'react';

import { formatAddress } from '../utils/formatAddress';

const AddressBlock = ({ address }) => {
  const fullAddress = formatAddress(address);
  return (
    <div className='address-block'>
      <div className='address-header'>
        <span className='info-icon'>📍</span>
        <span>residence</span>
      </div>
      <div className='address-detail'>{fullAddress}</div>
    </div>
  );
};

export default AddressBlock;
