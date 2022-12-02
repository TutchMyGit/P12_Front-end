import React from 'react';
import EmployeesTable from '../components/table/EmployeesTable';
import Header from '../components/Header';

function EmployeesList() {
    return (
      <React.Fragment>
        <Header />
        <div className='container'>
          <EmployeesTable />
        </div>
      </React.Fragment>
    );
  }
  
  export default EmployeesList;