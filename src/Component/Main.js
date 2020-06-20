import React, { useState, useCallback, useEffect } from 'react';
import styled from 'styled-components';
import Input from './Input';
import Input2 from './Input2';

const Wrap = styled.div`
  border: 1px solid red;
  margin-bottom: 2rem;
  max-width: 640px;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
const Titlebox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 55%;
`;
const PayBox = styled.div``;
const Main = () => {
  const [payvalue, setPayvalue] = useState('');
  const [personvalue, setPersonvalue] = useState('');
  const [result, setResult] = useState([]);

  const Title = [
    {
      name: '전체인원',
      id: 1,
      pay: '금액',
    },
    {
      name: '술먹은 인원',
      id: 2,
      pay: '금액',
    },
    {
      name: '음료먹은 인원',
      id: 3,
      pay: '금액',
    },
    {
      name: '술과 음료를 먹은 인원',
      id: 4,
      pay: '금액',
    },
  ];

  const OnChange = useCallback((e) => {
    setPayvalue(e.target.value);
  }, []);

  const OnChange2 = useCallback((e) => {
    setPersonvalue(e.target.value);
  }, []);

  useEffect(
    (e) => {
      setResult(personvalue / payvalue);
      
    },
    [personvalue, payvalue],
  );

  
  let Tities = Title.map((Titless) => (
    <Wrap key={Titless.id} id={Titless.id} result={result}>
      <Titlebox id={Titless.id}>
        <span>{Titless.id}</span>
        <span>{Titless.name}</span>
        <Input value={payvalue} OnChange={OnChange} />
      </Titlebox>
      <PayBox id={Titless.id}>
        <span>{Titless.id}</span>
        <span>{Titless.pay}</span>
        <Input2 value={personvalue} OnChange={OnChange2} />
      </PayBox>
      <span>{result}</span>
    </Wrap>
  ));

  console.log('체크' , Tities[1].props.result);
  console.log('x', payvalue, 'c', personvalue);

  const onClick = (()=>{
    console.log('계산', result);
    // setRealmain(result)
  },[])

  // const onClick = (()=>{
  //   console.log('계산', result);
  //   setRealmain(result)

  // },[])

  return (
    <div>
      {Tities}
      <button type="button" onClick={onClick}>클릭</button>
    </div>
  );
};
export default Main;
