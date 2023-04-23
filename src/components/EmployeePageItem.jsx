import React from 'react'

const EmployeePageItem = (props) => {
  return (
        <div className="employee-page">
    <img src={props.image} />
    <h2>{props.name}</h2>
    <p>{props.title}</p>
    <p>{props.callOffice}</p>
    <p>{props.callMobile} </p>
    <p>{props.sms} </p>
    <p>{props.email} </p>
</div>
  )
}

export default EmployeePageItem