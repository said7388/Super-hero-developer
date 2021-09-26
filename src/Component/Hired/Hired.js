import React from "react";
import "./Hired.css";

const Hired = (props) => {
  const developer = props.developer;
  return (
    <div className="hired-gap">
      <div className='hired'>
        <div>
          <img className='hired img' src={developer.image} alt='' />
        </div>
        <div className='hired-name'>
          <p>{developer.name}</p>
        </div>
      </div>
    </div>
  );
};

export default Hired;
