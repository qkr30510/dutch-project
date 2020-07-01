import React from 'react';
const Personinput = ({personvalue,OnChange}) => {
    return (
        <>
            <input type="number" onChange={OnChange} value={personvalue} className='personinput' pattern='\d*' />
        </>
    )
}
export default Personinput