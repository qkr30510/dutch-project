import React, { useCallback } from 'react';
import styled from 'styled-components';

import Mo from './Mo';
const Center = styled.div`
  border: 1px solid #000;
  display: flex;
  justify-content: space-around;
  width: 770px;
`;

const PersonInput = styled.div`
  border: 1px solid red;

  div {
    display: flex;
    justify-content: space-between;
  }
`;

const CostInput = styled.div`
  border: 1px solid blue;
`;

const InputBox = () => {
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

  // const InputBoxLis = useCallback((InputBoxLi) => {
  //   //   console.log(id)
  //   console.log(InputBoxLi.id);
  //   //   console.log('zz')
  // }, []);

  const InputClick = useCallback((id,state) => {
    console.log('InputClick', id,state);
  }, []);
  
  const ConstClick = useCallback((id, value) => {
    console.log('ConstClick', id, value);
    return id;
  }, []);

  const Math = () => {
    console.log('값', ConstClick / InputClick);
    console.log('값', ConstClick / InputClick);
  };

  const SetValue = useCallback((SetValue) => {

    console.log(SetValue)
  },[])
  

  let InputBoxs = InputBox.map((InputBoxLi, index) => (
    <div key={index}>
      <span>{InputBoxLi.title}</span>
      <Mo InputClick={() => InputClick(InputBoxLi.id)} InputBox={InputBox} SetValue={SetValue}/>
    </div>
  ));

  let CostBoxs = CostBox.map((costBoxLi, index) => (
    <div key={index}>
      <span>{costBoxLi.title}</span>
      <Mo
        InputClick={() => ConstClick(costBoxLi.id)}
        InputBox={InputBox}
      />
    </div>
  ));

  return (
    <Center>
      <PersonInput>{InputBoxs}</PersonInput>
      <CostInput>{CostBoxs}</CostInput>
      <button type="button" Math={Math}></button>
    </Center>
  );
};
export default InputBox;
