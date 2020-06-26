import React from 'react';
const Input2 = ({personvalue,OnChange}) => {
    return (
        <>
            <input type="text" onChange={OnChange} value={personvalue} className='personinput'/>
        </>
    )
}
export default Input2