import * as React from 'react';

import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom';

import Top from './components/top-menu';
import Content from './components/content'
import Menu from './components/menu'
import AboutView from './components/aboutView'
import AdoptView from './components/adoptView'
import RegisterView from './components/registerView'
import Bottom from './components/bottom-menu'

const App = () => {
  return (
    <BrowserRouter>
       <Switch>
            <Route path="/" exact>
              <Top />
              <Content />
              <Menu />
              <Bottom />
            </Route>
            <Route path="/about" exact>
              <Top />
              <AboutView />
            </Route>
            <Route path="/adopt" exact>
              <Top />
              <AdoptView />
            </Route>
            <Route path="/register" exact>
              <Top />
              <RegisterView />
            </Route>
        </Switch>
    </BrowserRouter>
  );
};

export default App;

