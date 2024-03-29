import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './routes/Route';
import Home from './pages/Home';
import Cart from './pages/Cart';
import DashBoard from './Components/DashBoard';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import Menu from './pages/Menu';
import Recipes from './pages/Recipes'
export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/cart" component={Cart} />
      <Route path="/login" component={Login} />
      <Route path="/perfil" component={Profile} />
      <Route path="/receitas" component={Recipes} />
      <Route path="/register" component={Register} />
      <Route path="/menus" component={Menu} />
      <Route path="/dashboard" component={DashBoard} isPrivate />
    </Switch>
  );
}
