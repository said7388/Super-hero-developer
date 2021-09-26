import React, { useEffect, useState } from "react";
import Employee from "../Employee/Employee";
import Salarycart from "../Salarycart/Salarycart";
import "./Body.css";

const Body = () => {
  const [employees, setEmployees] = useState([]);
  const [hirePerson, setHirePerson] = useState([]);
  // Loadind Data from JSON file
  useEffect(() => {
    fetch("./Employees.JSON")
      .then((response) => response.json())
      .then((data) => setEmployees(data));
  }, []);

  // Create Hire button function
  const hireMethod = (person) => {
    if (hirePerson.indexOf(person) === -1) {
      const newhired = [...hirePerson, person];
      setHirePerson(newhired);
    }
    
  };

  // console.log(hirePerson);
  // Return Body data
  return (
    <div className='body'>
      <div className='container'>
        <div className='row row-cols-md-3 row-cols-sm-1  card-group'>
          {/* Loop through all data array and send to Employee component as props*/}
          {employees.map((employee) => (
            <Employee
              employee={employee}
              hireMethod={hireMethod}
              key={employee.id}></Employee>
          ))}
        </div>
      </div>
      {/* Salary cart */}
      <div className=''>
        <Salarycart hirePerson={hirePerson}></Salarycart>
      </div>
    </div>
  );
};

export default Body;
