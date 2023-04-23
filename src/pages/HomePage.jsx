import React from 'react'
import EmployeeList from './EmployeeList';
import EmployeePage from './EmployeePage';

const HomePage = () => {
    return (
        <div className="App">
          <>
          <EmployeeList />
          <EmployeePage />
          </>
        </div>
      );
}

export default HomePage