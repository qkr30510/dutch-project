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
  const [results, setresults] = useState([]);
  const [totalperson, settotalperson] = useState([]);
  const [totalprice, settotalprice] = useState([]);
  const [move, setmove] = useState(false);

  let Paylist = Paylists.map((paycontent) => (
    <div key={paycontent.id} className="sbox">
      <span className='tit'>{paycontent.title}</span>
      <Dutch
        setresults={setresults}
        dd={paycontent.id}
        settotalperson={settotalperson}
        settotalprice={settotalprice}
      />
    </div>
  ));



  const onClick = () => {    
    setmove(true);
  };

  const totalfee =
    Number(totalprice[0]) + Number(totalprice[1]) + Number(totalprice[2]);

  return (
    <div className="wrap">
      <div className="col-xs-2 dutchcontainer">
        <h1>편하게 더치페이 </h1>
        {Paylist}
        <div className="tatalsbox">
          <div className="main">
            <span className="duble">총 인원</span>
            {Number(totalperson[0]) + Number(totalperson[1]) + Number(totalperson[2])}
            <span>명</span>
          </div>
          <div>
            <span>전체금액</span>
            <span className="oneresult">
              {totalfee.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
            </span>
            
          </div>
        </div>
        <button className="btn btn-primary" type="button" onClick={onClick}>
          결과 확인
        </button>
      </div>

      {move && <Redirect to={{ pathname: './Result', state: { results,totalfee, totalperson,totalprice} }} />}
    </div>
  );
};
export default Dutchwrap;
