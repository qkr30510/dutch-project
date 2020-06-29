import React from 'react';
const Personinput = ({personvalue,OnChange}) => {
    return (
        <>
            <input type="text" onChange={OnChange} value={personvalue} className='personinput'/>
        </>
    )
}
export default Personinput