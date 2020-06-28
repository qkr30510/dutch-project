import React, { useState, useCallback, useEffect } from 'react';
import Input from './Input';
import Input2 from './Input2';
import './../Css/Main.scss';

const Main = ({ setresults, dd, settotalperson, settotalprice }) => {
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
    // setPersonvalue;
    setPersonvalue(e.target.value);
  }, []);
const check = personvalue / payvalue

 
  useEffect(
    (e) => {      
      setResult(check.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','));
      setresults((prevState) => {
        const t = [...prevState];
        t[dd - 1] = personvalue / payvalue;
        return t;
      });
      settotalperson((prev) => {
        const s = [...prev];
        s[dd - 1] = payvalue;
        return s;
      });
      settotalprice((prev) => {
        const s = [...prev];
        s[dd - 1] = personvalue;
        return s;
      });      
    },

    [personvalue, payvalue, check, setresults, settotalperson, settotalprice, dd],
    // [personvalue, payvalue, setresults],
  );
  
   console.log(personvalue.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','));
  

  //  console.log('id',dd,'result',result)

  return (
    <div className="main">
      <Input2 value={payvalue} OnChange={OnChange} />
      <span>명</span>
      <div className="pay">
        <span>금액</span>
        <Input value={personvalue} OnChange={OnChange2} />
        <span>원</span>
      </div>
      <div className="oneperson">
        <span>1인 부담금</span>
        <span className="oneresult">{result}</span>
      </div>
    </div>
  );
};
export default Main;
