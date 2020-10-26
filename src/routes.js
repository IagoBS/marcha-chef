import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './routes/Route';
import Home from './pages/Home';
import Cart from './pages/Cart';
import DashBoard from './pages/DashBoard';
import Login from './pages/Login';
import Register from './pages/Register';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/cart" component={Cart} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/dashboard" component={DashBoard} isPrivate />
    </Switch>
  );
}
