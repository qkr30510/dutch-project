import React from 'react';
import styled from 'styled-components';

import Onchange from './Onchange';

const CostInputs = styled.div`
    border: 1px solid blue;
  `;

const CostInput = ({onChange,state,setId, setIds}) => {
  

  const CostBox = [
    {
      id: 1,
      title: '총 금액',
    },
    {
      id: 2,
      title: '금액',
    },
    {
      id: 3,
      title: '금액',
    },
    {
      id: 4,
      title: '금액',
    },
  ];

  let CostBoxs = CostBox.map((costBoxLi, index) => (
    <div key={index} setIds={setIds(costBoxLi.id)}>
      <span>{costBoxLi.id}</span>
      <span>{costBoxLi.title}</span>
      <Onchange value={state}   onChange={onChange}/>
    </div>
  ));

  return (
    <>
      <CostInputs>{CostBoxs}</CostInputs>
    </>
  );
};

export default CostInput;
