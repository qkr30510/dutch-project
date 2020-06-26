import React from 'react';
const Input = ({ payvalue, OnChange}) => {



  return (
    <>
      <input
        type="text"
        onChange={OnChange}
        value={payvalue}
        className="payinput"        
      />
    </>
  );
};
export default Input;
