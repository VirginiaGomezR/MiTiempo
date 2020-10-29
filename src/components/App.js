import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './Home';
import Current from './time/Current';
import '../stylesheets/App.scss';


const App = () => {

  return (
    <div className="app">
       <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/current" component={Current}/>
        </Switch>
    </div>
  );
}

export default App;
