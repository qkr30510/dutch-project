import React, { useState,useCallback } from 'react';
import Main from './Main';
import styled from 'styled-components';

const Wrap = styled.div`
  border: 1px solid red;
`;
const Realmain = () => {

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
    {
      id: 4,
      title: '중복',
    },
  ];
  const [results, setresults] = useState();
  

  let Paylist = Paylists.map((paycontent) => (
    <div key={paycontent.id}>
      <span>{paycontent.title}</span>
      <Main setresults={setresults} dd={paycontent.id} />
    </div>
  ));

  const onClick = () => {
    console.log(Paylist.length);
  };
  console.log('results',results)
  return (
    <div>
      <Wrap>{Paylist}</Wrap>
      <button type='button' onClick={onClick}>결과 확인</button>
    </div>

  );
};
export default Realmain;
