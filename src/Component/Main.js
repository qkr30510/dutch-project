import React from 'react';
import { Link } from 'react-router-dom';
import './../Css/Main.scss';

const Main = () => {
  return (
    <div className="wrap">
      <div className="Main">
        <Link to='/NdutchWrap'>N차 계산</Link>
        <Link to='/Dutchwrap'>술 따로 계산</Link>
      </div>
    </div>
  );
};

export default Main;
