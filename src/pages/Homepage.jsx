import React from 'react'
import Header from '../components/Header'
import SearchBar from '../components/SearchBar'
import EmployeeList from '../components/EmployeeList'
function Homepage(props) {
  return (
    <div className="hpage">
      <Header passedProp={props.yourTitle}/>
      <SearchBar />
      <EmployeeList workers={props.staff}/>
    </div>
  )
}
export default Homepage

