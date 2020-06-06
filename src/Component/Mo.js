import React,{useCallback,useState} from 'react';



const Mo = ({InputClick,SetValue} ) => {
    const [state, Setstate] = useState();


    const onChange = useCallback((e) => {
        Setstate(e.target.value);
      }, []);
      
      const carryValue = () =>{
          SetValue(state)
      }
    return (
        <>
            <input type="text" value={state} onChange={onChange} onClick={()=>InputClick()} carryValue={carryValue}/>
        </>
    )
}

export default Mo;