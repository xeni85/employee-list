import React from 'react'
import Header from '../components/Header'
function EmployeePage(props) {
  return (
    <div className='ePage'>
      <Header passedProp={props.yourTitle}/>
      
    </div>
  )
}
export default EmployeePage