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
    <div className='bg-gray-200'>
      <Switch>
        <Route path='/update-profile'>
          <Navbar />
          <UpdateUser />
        </Route>

        <Route path='/add-plant'>
          <AddPlant />
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
          {/* <SignIn /> */}
          <SignUp />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
