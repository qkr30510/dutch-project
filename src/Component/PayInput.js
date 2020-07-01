import React from 'react';
const PayInput = ({ payvalue, OnChange}) => {



  return (
    <>
      <input
        type="number"
        onChange={OnChange}
        value={payvalue}
        className="payinput"  
        pattern='\d*'       
      />
    </>
  );
};
export default PayInput;
