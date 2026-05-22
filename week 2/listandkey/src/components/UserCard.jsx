// UserCard.jsx
import React from 'react';

import { getInitials } from '../utils/getInitials';
import Avatar from './Avatar';
import ContactInfo from './ContactInfo';
import CompanyInfo from './CompanyInfo';
import AddressBlock from './AddressBlock';

const UserCard = ({ user }) => {
  const initials = getInitials(user.name);

  return (
    <li className='user-card'>
      <div className='card-inner'>
        {/* Avatar + name row */}
        <div className='identity-row'>
          <Avatar initials={initials} />
          <div className='name-section'>
            <div className='full-name'>{user.name}</div>
            <div className='username'>@{user.username}</div>
          </div>
        </div>

        {/* Contact info group */}
        <ContactInfo
          email={user.email}
          phone={user.phone}
          website={user.website}
        />
        {/* Address block */}

        <AddressBlock address={user.address} />
        {/* Company section */}
        <CompanyInfo company={user.company} />
      </div>
    </li>
  );
};

export default UserCard;
