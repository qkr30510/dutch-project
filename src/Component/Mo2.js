import React,{useCallback,useState} from 'react';



const Mo = () => {
    const [state, Setstate] = useState('');


    const onChange = useCallback((e) => {
        Setstate(e.target.value);
      }, []);
 
    return (
        <>
            <input type="text" value={state} onChange={onChange} />
        </>
    )
}

export default Mo;