import React,{useCallback,useState,useEffect} from 'react';



const Onchange = ({Insert,valueChx} ) => {
    const [state, Setstate] = useState('');

    const onChange = useCallback((e) => {
        Setstate(e.target.value);
        Insert(state)
        valueChx(state)
      }, [Insert, state,valueChx]);
      
      console.log(state)

    
      
    return (
        <>
            <input type="text" value={state} onChange={onChange} valueChx ={()=>valueChx(state)}/>
        </>
    )
}

export default Onchange;