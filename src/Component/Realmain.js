import React, { useState } from 'react';
import Main from './Main';
import Input2 from './Input2';
import Input from './Input';
import { Link, Redirect } from 'react-router-dom';
import './../Css/Realmain.scss';

const Paylists = [
  {
    id: 1,
    title: '전체인원',
  },
  {
    id: 2,
    title: '술 마신 인원',
  },
  {
    id: 3,
    title: '음료 마신 인원',
  },
];

const Realmain = ({ history }) => {
  const [results, setresults] = useState([]);
  const [totalperson, settotalperson] = useState([]);
  const [totalprice, settotalprice] = useState([]);
  const [move, setmove] = useState(false);

  let Paylist = Paylists.map((paycontent) => (
    <div key={paycontent.id} className="sbox">
      <span>{paycontent.title}</span>
      <Main
        setresults={setresults}
        dd={paycontent.id}
        settotalperson={settotalperson}
        settotalprice={settotalprice}
      />
    </div>
  ));

  // console.log('result', results);

  const onClick = () => {
    console.log(Paylist.length);
    // console.log('results',aa/bb)
    console.log(
      // '전체+술',
      // results[0] + results[1],
      // '전체+음료',
      // results[0] + results[2],
      // '중복',
      // results[0] + results[1] + results[2],
      // '전체인원',
      // Number(totalperson[0]) + Number(totalperson[1]) + Number(totalperson[2]),
      // '전체금액',
      // Number(totalprice[0]) + Number(totalprice[1]) + Number(totalprice[2]),
      results,
    );
    setmove(true);
  };
  // console.log(results)
  // const Totalperson =

  const totalfee = Number(totalprice[0])+Number(totalprice[1])+Number(totalprice[2])
  
  
  return (
    <div className="wrap">
      <h1>편하게 더치페이 </h1>
      <div className="col-xs-7 col-md-7 boxwrap">
        {Paylist}
        <div  className="sbox">
          <div className='main'>
          <span className='duble'>술과 음료 모두 먹은 인원</span>
          <Input2 />
          <span>명</span>
          </div>
          <div>
            <span>전체금액</span>
            <span className='oneresult'>
            {totalfee.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
            </span>
            
          </div>
        </div>
        {/* <div >
          <span>전체인원</span>
          {Number(totalperson[0])+Number(totalperson[1])+Number(totalperson[2])}
        </div>       */}
      </div>
      <button className="btn btn-primary" type="button" onClick={onClick}>
        결과 확인
      </button>
      {move && <Redirect to={{ pathname: './Result', state: { results } }} />}
    </div>
  );
};
export default Realmain;
