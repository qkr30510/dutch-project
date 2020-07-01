import React, { useState } from 'react';
import Dutch from './Dutch';
// import Input2 from './Input2';
// import Input from './Input';
import { Redirect } from 'react-router-dom';
import './../Css/Dutchwrap.scss';

const Paylists = [
  {
    id: 1,
    title: '음식만 먹은 인원',
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

const Dutchwrap = ({ history }) => {
  const [results, setresults] = useState([0,0,0]);
  const [totalperson, settotalperson] = useState([0, 0, 0]);
  const [totalprice, settotalprice] = useState([0, 0, 0]);
  const [move, setmove] = useState(false);
  console.log('results',results)
  let Paylist = Paylists.map((paycontent) => (
    <div key={paycontent.id} className="sbox">
      <span className="tit">{paycontent.title}</span>
      <Dutch
        setresults={setresults}
        dd={paycontent.id}
        settotalperson={settotalperson}
        settotalprice={settotalprice}
      />
    </div>
  ));

  let totalfee = 0;
  for (let i = 0; i < totalprice.length; i++) {
    totalfee += Number(totalprice[i]);
  }

  let people = 0;
  for (let pp = 0; pp < totalperson.length; pp++) {
    people += Number(totalperson[pp]);
  }



  const onClick = () => {
    if (totalprice[0] === undefined) {
      alert('값을 입력해주세요.');
      return false;
    } else {
      setmove(true);
    }
  };

  return (
    <div className="wrap">
      <div className="col-xs-2 dutchcontainer">
        <h1>편하게 더치페이 </h1>
        {Paylist}
        <div className="tatalsbox">
          <div className="main">
            <span className="duble">총 인원</span>
            {people}
            <span>명</span>
          </div>
          <div>
            <span>전체금액</span>
            <span className="oneresult">
              {totalfee.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
            </span>
          </div>
        </div>
        <button className="btn btn-primary" type="button" onClick={onClick}>
          결과 확인
        </button>
      </div>
      {move && (
        <Redirect
          to={{
            pathname: './Result',
            state: { results, totalfee, totalperson, totalprice },
          }}
        />
      )}
    </div>
  );
};
export default Dutchwrap;
