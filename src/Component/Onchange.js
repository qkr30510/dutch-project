import React from 'react';


const Onchange = ({ onChange, state }) => {
 
  return (
    <>
      <input type="text" value={state} onChange={onChange}/>
    </>
  );
};

export default Onchange;
