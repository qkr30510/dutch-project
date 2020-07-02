import React from 'react';
import './../Css/Result.scss';

const Result = ({ location }) => {
  
  console.log(location.state.results)

  const fir =  parseInt(location.state.results[0]);
  const fir2 = parseInt(location.state.results[1]);
  const fir3 = parseInt(location.state.results[2]);
  console.log(Number(fir)+Number(fir2))
  const detaillists = [
    {
      title: '음식 엔빵',
      totalprice: `${location.state.totalprice[0]}`,
      totalperson: `${location.state.totalperson[0]}`,
      result: `${fir}`,
    },
    {
      title: '술 엔빵',
      totalprice: `${location.state.totalprice[1]}`,
      totalperson: `${location.state.totalperson[1]}`,
      result: `${fir2}`,
    },
    {
      title: '음료 엔빵',
      totalprice: `${location.state.totalprice[2]}`,
      totalperson: `${location.state.totalperson[2]}`,
      result: `${fir3}`,
    },
  ];

  let detaillist = detaillists.map((detailcontent, index) => (
    <li key={index}>
      <h3>{detailcontent.title}</h3>
      <div className='detaillist'>
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
          1인금액: <span className="bold"> {detailcontent.result.toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</span>
        </p>
      </div>
    </li>
  ));
  return (
    <div className="wrap">
      <div className="dutchcontainer boxwrap ">
        <ul>
          <h2>1인 부담금</h2>
          <li>
            전체금액{' '}
            <span className="bold">
              {location.state.totalfee
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
            </span>
          </li>
          <li>
            음식만 먹은사람:{' '}
            <span className="bold">
              {fir.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
            </span>
          </li>
          <li>
            음식+술 먹은사람:{' '}
            <span className="bold">
              {(fir+fir2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
            </span>
          </li>
          <li>
            음식 + 음료 먹은사람:{' '}
            <span className="bold">
              {(fir+fir3).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
            </span>
          </li>
          <li>
            음식 + 술 + 음료 먹은사람:{' '}
            <span className="bold">
              {(fir+fir2+fir3)
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
            </span>
          </li>
        </ul>
        <ul>
          <h2>상세 내역</h2>

          {detaillist}
        </ul>
      </div>
    </div>
  );
};
export default Result;
