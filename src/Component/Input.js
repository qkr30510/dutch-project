import React from 'react';
const Input = ({payvalue,OnChange}) => {
    return (
        <>
            <input type="number" onChange={OnChange} value={payvalue} />
        </>
    )
}
export default Input