import React, { useState } from 'react';
import Main from './Main';
import styled from 'styled-components';
import Input2 from './Input2';
import Input from './Input';
import { Link, Redirect } from 'react-router-dom';

const Wrap = styled.div`
  border: 1px solid red;
`;

const Paylists = [
  {
    id: 1,
    title: '전체인원',
  },
  {
    id: 2,
    title: '술',
  },
  {
    id: 3,
    title: '음료',
  },
];

const Realmain = ({ history }) => {
  const [results, setresults] = useState([]);
  const [totalperson, settotalperson] = useState([]);
  const [totalprice, settotalprice] = useState([]);
  const [move, setmove] = useState(false);

  let Paylist = Paylists.map((paycontent) => (
    <div key={paycontent.id}>
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
      results
    );
    setmove(true);
  };
  // console.log(results)
  // const Totalperson =
  return (
    <div>
      <p>편하게 더치페이 </p>
      <Wrap>
        {Paylist}
        <div>
          <span>중복</span>
          <Input2 />
        </div>
        {/* <div >
          <span>전체인원</span>
          {Number(totalperson[0])+Number(totalperson[1])+Number(totalperson[2])}
        </div>       */}
        <div>
          <span>전체금액</span>
          {Number(totalprice[0]) +
            Number(totalprice[1]) +
            Number(totalprice[2])}
        </div>
      </Wrap>
      <button type="button" onClick={onClick}>
        결과 확인
      </button>
      {move && <Redirect to={{ pathname: './Result', state: { results}}}/>}
    </div>
  );
};
export default Realmain;
