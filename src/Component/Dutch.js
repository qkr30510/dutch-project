import React, { useState, useCallback, useEffect } from 'react';
import PayInput from './PayInput';
import Personinput from './Personinput';
import './../Css/Main.scss';

const Dutch = ({ setresults, dd, settotalperson, settotalprice }) => {
  // const Main = ({dd, setaa, setbb }) => {
  const [payvalue, setPayvalue] = useState('');
  const [personvalue, setPersonvalue] = useState('');
  // const [result, setResult] = useState([]);
  const [result, setResult] = useState();
  // const [resultss, setResultss] = useState();

  const OnChange = useCallback((e) => {
    setPersonvalue(e.target.value);
  }, []);

  const OnChange2 = useCallback((e) => {
    // setPersonvalue;
    setPayvalue(e.target.value);
  }, []);

const division = payvalue/personvalue

 
  useEffect(
    (e) => {      
      setResult(division.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','));
      setresults((prevState) => {
        const t = [...prevState];
        t[dd - 1] =payvalue/personvalue;
        return t;
      });
      settotalperson((prev) => {
        const s = [...prev];
        s[dd - 1] = personvalue;
        return s;
      });
      settotalprice((prev) => {
        const s = [...prev];
        s[dd - 1] = payvalue;
        return s;
      });      
    },

    [personvalue, payvalue, division, setresults, settotalperson, settotalprice, dd],
    // [personvalue, payvalue, setresults],
  );
  
  //  console.log(personvalue.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','));
  

  //  console.log('id',dd,'result',result)

  return (
    <div className='main'>
      <div className='personInput'>
      <Personinput value={personvalue} OnChange={OnChange} />
      <span>명</span>
      </div>
      <div className="pay">
        <span>금액</span>
        <PayInput value={payvalue} OnChange={OnChange2} />
        <span>원</span>
      </div>
      <div className="oneperson">
        <span>1인 부담금</span>
        <span className="oneresult">{result}</span>
      </div>
    </div>
  );
};
export default Dutch;
