import React from 'react';
import Main from './Component/Main';
import Dutchwrap from './Component/Dutchwrap';
import NdutchWrap from './Component/NdutchWrap';
import Result from './Component/Result';
import Nresult from './Component/Nresult';
import { Helmet } from 'react-helmet';
// import Main from './Component/Main';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const App = () => {
  return (
    <>
      <Helmet>
        <meta charset="UTF-8" />
        <meta name="keywords" content="더치페이, 개별계산, 계산, 1인계산, " />
        <meta name="description" content="더치페이 사이트" />
        <meta name="author" content="juhee" />
        <meta name="generator" content="react" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="dutchpay" />
        <meta property="og:description" content="더치페이 사이트" />
        <meta property="og:url" content="https://juhee-dutchpay.netlify.app/" />
        <title>Dutch-project</title>
      </Helmet>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Main}></Route>
          <Route path="/Dutchwrap"  component={Dutchwrap}></Route>
          <Route path="/NdutchWrap" component={NdutchWrap}></Route>
          <Route path="/Result" component={Result}></Route>
          <Route path="/Nresult" component={Nresult}></Route>
        </Switch>
      </BrowserRouter>
    </>
  );
};
export default App;
