import React from 'react';
import Dutchwrap from './Component/Dutchwrap';
import Result from './Component/Result';
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
          <Route path="/" exact component={Dutchwrap}></Route>
          <Route path="/Result" component={Result}></Route>
        </Switch>
      </BrowserRouter>
    </>
  );
};
export default App;
