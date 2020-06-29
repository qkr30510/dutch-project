import React from 'react';
import Dutchwrap from './Component/Dutchwrap';
import Result from './Component/Result';
// import Main from './Component/Main';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

const App = () => {
  return (
    <>
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
