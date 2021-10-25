import React from 'react';

// ROUTING
import {Route, Switch } from 'react-router-dom';

// COMPONENTS
import Dashboard from './components/Dashboard';

// STYLING
import './App.css';

function App() {
  return (
    <div className='App'>
      <Switch>
        <Route path='/' component={Dashboard} />
      </Switch>
    </div>
  );
}

export default App;
