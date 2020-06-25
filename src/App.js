import React from 'react';
import Realmain from './Component/Realmain';
import Result from './Component/Result';
// import Main from './Component/Main';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Realmain}></Route>
          <Route path="/Result"  component={Result}></Route>
        </Switch>
      </BrowserRouter>
    </>
  );
};
export default App;
