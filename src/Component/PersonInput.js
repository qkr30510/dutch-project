import React, { useCallback } from 'react';
import styled from 'styled-components';

import Onchange from './Onchange';

const PersonInputs = styled.div`
  border: 1px solid red;
`;
const PersonInput = ({onChange,state,setId, setIds}) => {
  const InputBox = [
    {
      id: 1,
      title: '전체인원',
    },
    {
      id: 2,
      title: '술 먹은 인원',
    },
    {
      id: 3,
      title: '음료 먹은 인원',
    },
    {
      id: 4,
      title: '술과 음료를 먹은 인원',
    },
  ];

  
  let InputBoxs = InputBox.map((InputBoxLi, index) => (
    <div key={index} setIds={setIds(InputBoxLi.id)}>
      <span>{InputBoxLi.id}</span>
      <span>{InputBoxLi.title}</span>
      <Onchange value={state}   onChange={onChange} />
    </div>
  ));

  return (
    <>
      <PersonInputs>{InputBoxs}</PersonInputs>
    </>
  );
};

export default PersonInput;
