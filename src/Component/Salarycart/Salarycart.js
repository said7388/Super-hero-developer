import React from "react";
import Hired from "../Hired/Hired";
import "./Salarycart.css";

const Salarycart = (props) => {
  let hiredPersons = props.hirePerson;
  const totalEmploy = hiredPersons.length;
  const salaryCost = hiredPersons.reduce((prev, cur) => cur.salary + prev ,0)

  return (
    <div className="hired-card">
      <p className='employ-total'>
        <i class='fas fa-user'></i> Developers Hired: {totalEmploy}
      </p>
      <p className="employ-total">
          Total Cost: $ {salaryCost}
      </p>
      <div>
          {
              hiredPersons.map(developer => <Hired developer={developer} key={developer.id}></Hired> )
          }
      </div>
    </div>
  );
};

export default Salarycart;
