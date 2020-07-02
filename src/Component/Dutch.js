import React, { useState, useCallback, useEffect } from 'react';
import PayInput from './PayInput';
import Personinput from './Personinput';
import './../Css/Dutchwrap.scss';
import { number } from 'prop-types';

const Dutch = ({ setresults, dd, settotalperson, settotalprice }) => {
  // const Main = ({dd, setaa, setbb }) => {
  const [payvalue, setPayvalue] = useState(0);
  const [personvalue, setPersonvalue] = useState(0);
  const [result, setResult] = useState(0);
  // console.log('result',result)

  const OnChange = useCallback((e) => {
    setPersonvalue(e.target.value);
  }, []);

  const OnChange2 = useCallback((e) => {
    // setPersonvalue;
    setPayvalue(e.target.value);
  }, []);

  const division = payvalue / personvalue;

  useEffect(
    (e) => {
      if (payvalue && personvalue) {
        // setResult(division.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','));
        // setResult(division.toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','))
        setResult(division)
      } else {
        setResult(0);
      }

      setresults((prevState) => {
        const t = [...prevState];
        t[dd - 1] = result;
        return t;
      });
      settotalperson((prev) => {
        const ss = [...prev];
        ss[dd - 1] = personvalue;
        return ss;
      });

      settotalprice((prev) => {
        const s = [...prev];
        s[dd - 1] = payvalue;
        return s;
      });
    },
    
    [personvalue, payvalue, division, setresults, settotalperson, settotalprice, dd, result],
    // [personvalue, payvalue, setresults],
  );
  

  // console.log(result.toFixed(2))
  return (
    <div className="main">
      <div className="personInput">
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
        <span className="oneresult">{result.toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</span>
      </div>
    </div>
  );
};
export default Dutch;
