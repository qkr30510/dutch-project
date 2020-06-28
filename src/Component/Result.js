import React from 'react';

const Result = ({ history, results, location, props }) => {
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

  console.log(location.state.results);
  const fir = location.state.results[0];
  const fir2 = location.state.results[1];
  const fir3 = location.state.results[2];

  console.log(fir + fir2);

  return (
    <>
      <h2>결과</h2>
      <ul>
        <li>음식 : {fir}</li>
        <li>음식+술: {fir + fir2}</li>
        <li>음식 + 음료: {fir + fir3}</li>
        <li>음식 + 술 + 음료: {fir + fir2 + fir3}</li>
      </ul>
      <ul>
        <li>전체금액: (전체금액),(인원),(1인금액)</li>
        <li>음식 엔빵: (전체금액),(인원),(1인금액) </li>
        <li>술 엔빵: (전체금액),(인원),(1인금액)</li>
        <li>음료 엔빵: (전체금액),(인원),(1인금액)</li>
      </ul>
    </>
  );
};
export default Result;
