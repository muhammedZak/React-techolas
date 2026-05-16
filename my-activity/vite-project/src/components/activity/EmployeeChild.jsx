import React from 'react';

export const EmployeeChild = ({ employeeName, position, salary }) => {
  return (
    <div id='profile-card' style={{ marginTop: '10px' }}>
      <p>
        {employeeName} - {position} - {salary}
      </p>
    </div>
  );
};
