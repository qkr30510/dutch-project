import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import CostInput from './CostInput';
import PersonInput from './PersonInput';

const Center = styled.div`
  border: 1px solid #000;
  display: flex;
  justify-content: space-around;
  width: 770px;
`;

const Total = () => {
  const [value, setValue] = useState();
  const [state, setState] = useState();
  const [id, setId] = useState();

  const [inputInfo, setinputInfo] =useState( [
    {
      id: 1,
      state: '',
    },
  ]
)
  const onChange = useCallback(
    (e) => {
      setState(e.target.value);
    },
    [setState],
  );


  console.log('state',state)

  const setIds =useCallback((id)=>{
    setId(id)
    console.log('잉', {state,id});
    // console.log('id',id)
  },[state])
  
  
  // s
  const onClick = () => {
    // if(PersonInput.id === CostInput.id)    
  }
  return (
    <>
      <Center>
        <PersonInput value={state} onChange={onChange} setIds={setIds}/>
        <CostInput value={state} onChange={onChange} setIds={setIds} />
      </Center>
      <button className="btn btn-default" onClick={onClick}>
        {' '}
        확인
      </button>
    </>
  );
};
export default Total;
