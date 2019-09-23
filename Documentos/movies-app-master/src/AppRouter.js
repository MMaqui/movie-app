import React from 'react';
import Home from './container/home';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const AppRouter = () => {
  return (<div><Router>
    <Route path={'/'} component={Home} />
  </Router>
  </div>)

}

export default AppRouter;
