import React from 'react';
import { Route, Switch } from 'react-router-dom';

import AddPlant from './views/AddPlant';
import Home from './views/Home';
import SignIn from './views/SignIn';
import SignUp from './views/SignUp';
import UpdateUser from './views/UpdateUser';
import Navbar from './components/Navbar';
import AboutUs from './views/AboutUs';

function App() {
  return (
    <div className='App'>
      <Switch>
        <Route path='/add-plant'>
          <Navbar />
          <AddPlant />
        </Route>

        <Route path='/update-profile'>
          <Navbar />
          <UpdateUser />
        </Route>

        <Route path='/about'>
          <Navbar />
          <AboutUs />
        </Route>

        <Route path='/home'>
          <Navbar />
          <Home />
        </Route>

        <Route path='sign-up'>
          <SignUp />
        </Route>

        <Route path='/'>
          <SignIn />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
