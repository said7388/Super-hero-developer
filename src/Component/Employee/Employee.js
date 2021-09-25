import React from "react";
import "./Employee.css";

const Employee = (props) => {
  const employee = props.employee;
  return (
    <div className='g-2 col'>
      <div className='card employee'>
        <div className='img-box'>
          <img className='employee-img' src={employee.image} alt='' />
        </div>
        <div className='info'>
          <p>Name: {employee.name}</p>
          <p>Gender: {employee.gender}</p>
          <p>Age: {employee.age}</p>
          <p>Phone: {employee.phone}</p>
          {/* <p>Email: {employee.email}</p> */}
          <p>Salary: {employee.salary}</p>
          <div className='hire-btn-area'>
            <button className='hire-btn'>
              <i class='fab fa-hire-a-helper'></i> Hire Me
            </button>
          </div>
          <div className='social-icon'>
            <i class='fab fa-facebook iconia-f'></i>
            <i class='fab fa-twitter iconia-t'></i>
            <i class='fab fa-linkedin-in iconia-l'></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Employee;
