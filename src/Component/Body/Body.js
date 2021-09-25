import React, { useEffect, useState } from "react";
import Employee from "../Employee/Employee";
import "./Body.css";

const Body = () => {
  const [employees, setEmployees] = useState([]);
  useEffect(() => {
    fetch("./Employees.JSON")
      .then((response) => response.json())
      .then((data) => setEmployees(data));
  }, []);
  return (
    <div className='body'>
      <div className='container'>
        <div className='row row-cols-md-3 row-cols-sm-1  card-group'>
          {employees.map((employee) => (
            <Employee employee={employee} key={employee.id}></Employee>
          ))}
        </div>
      </div>
      <div className=''>our body</div>
    </div>
  );
};

export default Body;
