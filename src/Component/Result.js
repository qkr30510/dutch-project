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

  // console.log(location.state.results);
  const fir = location.state.results[0];
  const fir2 = location.state.results[1];
  const fir3 = location.state.results[2];

  // console.log(fir + fir2);
  // console.log(
  //   location.state.totalfee,
  //   location.state.totalperson,
  //   location.state.totalprice,
  // );
  const detaillists = [
    {
      title: '음식 엔빵',
      totalprice: `${location.state.totalprice[0]}`,
      totalperson: `${location.state.totalperson[0]}`,
    },
    {
      title: '술 엔빵',
      totalprice: `${location.state.totalprice[1]}`,
      totalperson: `${location.state.totalperson[1]}`,
    },
    {
      title: '음료 엔빵',
      totalprice: `${location.state.totalprice[2]}`,
      totalperson: `${location.state.totalperson[2]}`,
    },
  ];

  let detaillist = detaillists.map((detailcontent, index) => (
    <li key={index}>
      <h3>{detailcontent.title}</h3>
      <div>
        <p>
          전체금액:{' '}
          <span>
            {detailcontent.totalprice
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
          </span>
        </p>
        <p>
          인원:<span>{detailcontent.totalperson}</span>
        </p>
        <p>
          1인금액:{' '}
          <span className='bold'>
            {' '}
            {(detailcontent.totalprice / detailcontent.totalperson)
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
          </span>
        </p>
      </div>
    </li>
  ));
  return (
    <div className="wrap">
      <div className="boxwrap">
        <ul>
          <h2>1인 부담금</h2>
          <li>
            전체금액{' '}
            <span className='bold'>
              {location.state.totalfee
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
            </span>
          </li>
          <li>
            음식만 먹은사람:{' '}
            <span className='bold'>{fir.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</span>
          </li>
          <li>
            음식+술 먹은사람:{' '}
            <span className='bold'>
              {(fir + fir2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
            </span>
          </li>
          <li>
            음식 + 음료 먹은사람:{' '}
            <span className='bold'>
              {(fir + fir3).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
            </span>
          </li>
          <li>
            음식 + 술 + 음료 먹은사람:{' '}
            <span className='bold'>
              {(fir + fir2 + fir3)
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
            </span>
          </li>
        </ul>
        <ul >
          <h2>상세 내역</h2>

          {detaillist}
        </ul>
      </div>
    </div>
  );
};
export default Result;
