import React, { useState } from 'react'
import Main from './Main';
const Realmain = () => {
    const [realmain, setRealmain] = useState();
    console.log('나오나',realmain)
    return (
        <div>
            <Main/>
            <span realmain={setRealmain}>z</span>
        </div>
    )
}
export default Realmain