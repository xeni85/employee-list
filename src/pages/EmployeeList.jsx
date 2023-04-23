import React from 'react';
import employees from '../models/employees';
import EmployeeListItem from '../components/EmployeeListItem';
import Header from '../components/Header';
import EmployeePageItem from '../components/EmployeePageItem';
import SearchBar from '../components/SearchBar';



const EmployeeList = () => {
const handleClick = () => {
alert('clicked')
}
return (
<div>
<Header headline='Employee Directory'/>
<SearchBar />
<div className="employee-list">
    {employees.map(key => (
        <EmployeeListItem name={key.name} image={key.img} title={key.title} handleClick={handleClick}/>
    ))}
</div>
</div>
);
};

export default EmployeeList;