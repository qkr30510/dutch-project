import React, { useState, useCallback, useEffect } from 'react';
import Input from './Input';
import Input2 from './Input2';
import Resultmath from './Resultmath';

const Main = ({ setresults, dd }) => {
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
    [setresults, personvalue, payvalue, result],
  );

  console.log('id',dd)
  console.log('value',dd.value)
    
  return (
    <div>
      <Input2 value={payvalue} OnChange={OnChange} /> <span>금액</span>
      <Input value={personvalue} OnChange={OnChange2} />
      <span>1인 부담금</span>
      <Resultmath dd={dd} result={result} />
    </div>
  );
};
export default Main;
