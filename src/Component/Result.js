import React from 'react';
import './../Css/Result.scss';

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
  console.log(
    location.state.totalfee,
    location.state.totalperson,
    location.state.totalprice,
  );
  return (
    <div className="wrap">
      <div className="boxwrap">
        <h1>결과</h1>
        <ul>
          <li>전체금액 {location.state.totalfee}</li>
          <li>음식만 먹은사람: {fir}</li>
          <li>음식+술만 먹은사람: {fir + fir2}</li>
          <li>음식 + 음료만 먹은사람: {fir + fir3}</li>
          <li>음식 + 술 + 음료만 먹은사람: {fir + fir2 + fir3}</li>
        </ul>
        <ul className="detail">
          <h2>상세 내역</h2>
          <li>
            <h2>음식 엔빵</h2>
            <div>
              <p>
                전체금액: <span>{location.state.totalprice[0]}</span>
              </p>
              <p>
                인원:<span>{location.state.totalperson[0]}</span>
              </p>
              <p>
                1인금액:{' '}
                <span>
                  {' '}
                  {location.state.totalprice[0] / location.state.totalperson[0]}
                </span>
              </p>
            </div>
          </li>
          <li>
            <h2>술 엔빵</h2>{' '}
            <div>
              <p>
                전체금액:<span>{location.state.totalprice[1]}</span>
              </p>
              <p>
                인원: <span>{location.state.totalperson[1]}</span>
              </p>
              <p>
                1인금액:{' '}
                <span>
                  {' '}
                  {location.state.totalprice[0] / location.state.totalperson[1]}
                </span>
              </p>
            </div>
          </li>
          <li>
            <h2>음료 엔빵:</h2>{' '}
            <div>
              <p>
                전체금액:<span>{location.state.totalprice[2]}</span>
              </p>
              <p>
                인원: <span>{location.state.totalperson[2]}</span>
              </p>
              <p>
                1인금액:{' '}
                <span>
                  {' '}
                  {location.state.totalprice[0] / location.state.totalperson[2]}
                </span>
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Result;
