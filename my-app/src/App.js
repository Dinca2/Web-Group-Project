import * as React from 'react';

import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom';

import Top from './components/top-menu';
import Content from './components/content'

const App = () => {
  return (
    <BrowserRouter>
       <Switch>
            <Route path="/" exact>
              <Top />
              <Content />
            </Route>
        </Switch>
    </BrowserRouter>
  );
};

export default App;

