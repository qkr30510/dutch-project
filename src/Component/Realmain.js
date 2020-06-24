import React, { useState } from 'react';
import Main from './Main';
import styled from 'styled-components';
import Input2 from './Input2';
import Input from './Input';

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

const Realmain = () => {
  const [results, setresults] = useState([]);
  const [totalperson, settotalperson] = useState([]);
  const [totalprice, settotalprice] = useState([]);

  let Paylist = Paylists.map((paycontent) => (
    <div key={paycontent.id}>
      <span>{paycontent.title}</span>
      <Main setresults={setresults} dd={paycontent.id} settotalperson={settotalperson} settotalprice={settotalprice}/>
    </div>
  ));

  // console.log('result', results);

  const onClick = () => {
    console.log(Paylist.length);
    // console.log('results',aa/bb)
    console.log('results', '전체+술', results[0] + results[1]);
    console.log('results', '전체+음료', results[0] + results[2]);
    console.log('results', '중복', results[0] + results[1] + results[2]);
    console.log('전체인원',Number(totalperson[0])+Number(totalperson[1])+Number(totalperson[2]) );
    console.log('전체금액',Number(totalprice[0])+Number(totalprice[1])+Number(totalprice[2]));
  };
  // const Totalperson = 
  return (
    <div>
      <Wrap>     
        {Paylist}
        <div >
          <span>중복</span>
          <Input2/>
        </div>
        <div >
          <span>전체인원</span>
          {Number(totalperson[0])+Number(totalperson[1])+Number(totalperson[2])}
        </div>      
        <div >
          <span>전체금액</span>
          {Number(totalprice[0])+Number(totalprice[1])+Number(totalprice[2])}
        </div>          
      </Wrap>
      <button type="button" onClick={onClick}>
        결과 확인
      </button>
    </div>
  );
};
export default Realmain;
