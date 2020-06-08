import React from 'react';
import styled from 'styled-components';
import CostInput from './CostInput';
import PersonInput from './PersonInput';


const Total = () => {
  const Center = styled.div`
    border: 1px solid #000;
    display: flex;
    justify-content: space-around;
    width: 770px;
  `;

  return (
    <>
      <Center>
        <PersonInput/>
        <CostInput />
      </Center>
      <button className="btn btn-default">확인</button>
    </>
  );
};
export default Total;
