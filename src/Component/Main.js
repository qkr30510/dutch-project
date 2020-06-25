import React, { useState, useCallback, useEffect, Children } from 'react';
import Input from './Input';
import Input2 from './Input2';
import Resultmath from './Resultmath';

const Main = ({ setresults, dd,settotalperson,settotalprice}) => {
// const Main = ({dd, setaa, setbb }) => {
  const [payvalue, setPayvalue] = useState('');
  const [personvalue, setPersonvalue] = useState('');
  // const [result, setResult] = useState([]);
  const [result, setResult] = useState();
  // const [resultss, setResultss] = useState();
  
  

  const OnChange = useCallback((e) => {
    setPayvalue(e.target.value);
  }, []);

  const OnChange2 = useCallback((e) => {
    setPersonvalue(e.target.value);
  }, []);

  
  useEffect(
    (e) => {      
      setResult(personvalue / payvalue);    
      setresults((prevState) => {
        const t  = [...prevState]
        t[dd-1] = personvalue / payvalue;
        return  t;
       })
       settotalperson((prev)=>{
         const s = [...prev]
         s[dd-1] = payvalue
         return s;
       })
       settotalprice((prev)=>{
        const s = [...prev]
        s[dd-1] = personvalue
        return s;
      })
    },
    [personvalue, payvalue],
    // [personvalue, payvalue, setresults],
  );

//  console.log('id',dd,'result',result)
  
  return (
    <>
      <Input2 value={payvalue} OnChange={OnChange} /> <span>금액</span>
      <Input value={personvalue} OnChange={OnChange2} />
      <span>1인 부담금</span>
      <Resultmath dd={dd} result={result} ><span>{Children}</span></Resultmath>
    </>
  );
};
export default Main;
