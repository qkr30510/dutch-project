import React, { useCallback,useState } from 'react';
import styled from 'styled-components';

import Onchange from './Onchange';

const PersonInput = () => {
  const PersonInput = styled.div`
    border: 1px solid red;
  `;

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

  

  const Insert = useCallback((id)=>{
    console.log('나오나',id)
  },[])

const valueChx = useCallback((state) => {
    console.log('?',state)
},[])
  
//   console.log('나오나',Insert)


  let InputBoxs = InputBox.map((InputBoxLi, index) => (
    <div key={index}>
      <span>{InputBoxLi.id}</span>
      <span>{InputBoxLi.title}</span>
      <Onchange Insert={()=>Insert(InputBoxLi.id)} valueChx={valueChx} />
    </div>
  ));

  return (
    <>
      <PersonInput >{InputBoxs}</PersonInput>
    </>
  );
};

export default PersonInput;
