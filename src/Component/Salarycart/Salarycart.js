import React from "react";
import Hired from "../Hired/Hired";
import "./Salarycart.css";

const Salarycart = (props) => {
  let hiredPersons = props.hirePerson; // Recivied all hired persons
  const totalEmploy = hiredPersons.length;
  const salaryCost = hiredPersons.reduce((prev, cur) => cur.salary + prev, 0);

  // Return Salarycart
  return (
    <div className='hired-card'>
      <div className='card-info'>
        <p className='employ-total'>
          <i class='fas fa-user'></i> Developers Hired: {totalEmploy}
        </p>
        <p className='employ-total'>
          <i class='fas fa-dollar-sign'></i> Total Cost: {salaryCost}
        </p>
      </div>
      <div>
        {hiredPersons.map((developer) => (
          <Hired developer={developer} key={developer.id}></Hired>
        ))}
      </div>
    </div>
  );
};

export default Salarycart;
