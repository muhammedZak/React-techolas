import React from 'react';

const CompanyInfo = ({ company }) => {
  return (
    <div className='company-section'>
      <div className='company-name'>
        <span className='info-icon'>🏢</span>
        <span>{company.name}</span>
      </div>
      {company.catchPhrase && (
        <div className='catch-phrase'>“{company.catchPhrase}”</div>
      )}
    </div>
  );
};

export default CompanyInfo;
