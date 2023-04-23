import React from 'react'
import EmployeePageItem from './EmployeePageItem'

const EmployeeListItem = (props) => {

//   const handleClick = () => {
// //     <EmployeePageItem     <img src={props.image} />
// //     <h2>{props.name}</h2>
// // //     <p>{props.title}</p>
// //     <p>{props.callOffice}</p>
// //     <p>{props.callMobile} </p>
// //     <p>{props.sms} </p>
// //     <p>{props.email} </p> />
// //   }
  return (
    <div className="employee-card">
    <img onClick={props.handleClick} src={props.image} />
    <h2 onClick={props.handleClick}>{props.name}</h2>
    <p>{props.title}</p>
</div>
  )
}

export default EmployeeListItem