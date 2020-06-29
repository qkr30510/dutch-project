import React from 'react';
const PayInput = ({ payvalue, OnChange}) => {



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
export default PayInput;
