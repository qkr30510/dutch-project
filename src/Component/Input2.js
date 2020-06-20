import React from 'react';
const Input2 = ({personvalue,OnChange,}) => {
    return (
        <>
            <input type="number" onChange={OnChange} value={personvalue}/>
        </>
    )
}
export default Input2