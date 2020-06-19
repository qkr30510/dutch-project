import React from 'react';
const Input = ({payvalue,OnChange}) => {
    return (
        <>
            <input type="text" onChange={OnChange} value={payvalue} />
        </>
    )
}
export default Input