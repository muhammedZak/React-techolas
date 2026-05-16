import React from 'react';
import { EmployeeChild } from './EmployeeChild';

const data = {
  employeeName: 'John Doe',
  position: 'Senior Developer',
  salary: '80,000',
};

export const Employeeparent = () => {
  return (
    <EmployeeChild
      employeeName={data.employeeName}
      position={data.position}
      salary={data.salary}
    />
  );
};
