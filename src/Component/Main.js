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

const Main = ({setresults}) => {
  const [payvalue, setPayvalue] = useState('');
  const [personvalue, setPersonvalue] = useState('');
  const [result, setResult] = useState();

  const OnChange = useCallback((e) => {
    setPayvalue(e.target.value);
  }, []);

  const OnChange2 = useCallback((e) => {
    setPersonvalue(e.target.value);
  }, []);

  useEffect(
    (e) => {
      setResult(personvalue / payvalue);
      setresults(result);
    },
    [setresults, personvalue, payvalue,result],
  );
  return (
    <div setresults={setresults}>
      <Input2 value={payvalue} OnChange={OnChange} /> <span>금액</span>
      <Input value={personvalue} OnChange={OnChange2} />
      <span>1인 부담금</span>
      <span>{result}</span>
    </div >
  );
};
export default Main;
