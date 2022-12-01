import React from 'react';
import EmployeeTable from '../components/EmployeeTable';
import TestTable from '../components/TestTable';
import Header from '../components/Header';
import Search from '../components/Search';

function EmployeesList() {
    return (
      <React.Fragment>
        <Header />
        <div className='container'>
          <TestTable />
        </div>
      </React.Fragment>
    );
  }
  
  export default EmployeesList;