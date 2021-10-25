import React from 'react';

// ROUTING
import { Route, Switch } from 'react-router-dom';

// COMPONENTS
import Dashboard from './components/Dashboard';

function App() {
  return (
    <div className='min-h-screen bg-sitebackground text-white'>
      <Switch>
        <Route path='/' component={Dashboard} />
      </Switch>
    </div>
  );
}

export default App;
