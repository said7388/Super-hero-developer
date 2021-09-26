import React from "react";
import "./Employee.css";

const Employee = (props) => {
  const hireMethod = props.hireMethod;
  const employee = props.employee;
  const {name, gender, age, phone, salary, image, experience} = employee;
  return (
    <div className='g-2 col'>
      <div className='card employee'>
        <div className='img-box'>
          <img className='employee-img' src={image} alt='' />
        </div>
        <div className='info'>
          <p>Name: {name}</p>
          <p>Gender: {gender}</p>
          <p>Age: {age}</p>
          <p>Phone: {phone}</p>
          <p>Experience: {experience}</p>
          <p>Salary: {salary}</p>
          <div className='hire-btn-area'>
            <button onClick={() => hireMethod(employee)} className='hire-btn'>
              <i className='fab fa-hire-a-helper'></i> Hire Me
            </button>
          </div>
          <div className='social-icon'>
            <a href="/facebook"><i className='fab fa-facebook iconia-f'></i></a>
            <a href="/twitter"><i className='fab fa-twitter iconia-t'></i></a>
            <a href="/lienkedin"><i className='fab fa-linkedin-in iconia-l'></i></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Employee;
