import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';

import Navbar from './components/Navbar';
import AddPlant from './views/AddPlant';
import Home from './views/Home';
import SignIn from './views/SignIn';
import SignUp from './views/SignUp';
import UpdateUser from './views/UpdateUser';

function App() {
  return (
    <div className='App'>
      <Navbar />

      <Switch>
        <Route path='/add-plant' component={AddPlant} />{' '}
        {/*Make Pricate Route*/}
        <Route path='/home' component={Home} /> {/*Make Pricate Route*/}
        <Route path='sign-up' component={SignUp} />
        <Route path='/' component={SignIn} />
      </Switch>
    </div>
  );
}

export default App;
