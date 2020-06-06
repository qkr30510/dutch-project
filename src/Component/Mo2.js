import React,{useCallback,useState} from 'react';



const Mo = ({ConstClick} ) => {
    const [state, Setstate] = useState('');


    const onChange = useCallback((e) => {
        Setstate(e.target.value);
      }, []);
 
    return (
        <>
            <input type="text" value={state} onChange={onChange} onClick={()=>ConstClick(state)}/>
        </>
    )
}

export default Mo;