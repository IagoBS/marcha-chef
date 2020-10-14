import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
  FaHamburger,
  FaHome,
  FaPizzaSlice,
  FaAddressCard,
  FaCalendarPlus,
  FaCartPlus,
  FaClosedCaptioning
} from 'react-icons/fa';
import { Cart, Navigation, Perfil, Logo, Content, List } from './styles';

import logo from '../../assets/images/logo.svg';
import perfil from '../../assets/images/cara.svg';

export default function Header() {
  const cartSize = useSelector((state) => state.cart.length);
  return (
    <Content>
      <Logo>
        <Link to="/">
          <img src={logo} alt="MarchaChef" height={64} />
        </Link>
      </Logo>
      <Navigation>
        <ul>
          <li>
            <List>
              <FaHome size={32} />
              Home
            </List>
          </li>
          <li>
            <List to="restaurants">
              <FaHamburger size={32} />
              Restaurantes
            </List>
          </li>
          <li>
            <List>
              <FaPizzaSlice size={32} />
              Receitas
            </List>
          </li>
          <li>
            <List>
              <FaAddressCard size={32} />
              Sobre
            </List>
          </li>
          <li>
            <List>
              <FaCalendarPlus size={32} />
              Templates
            </List>
          </li>
        </ul>
      </Navigation>
      <Cart to="/cart">
        <div>
          <strong>Meu carrinho</strong>
          <span>{cartSize} itens</span>
        </div>
        <FaCartPlus size={36} color="#FFC000" />
      </Cart>
      <Perfil>
        <div>
          <img src={perfil} alt="Perfil" />
        </div>
      </Perfil>
    </Content>
  );
}
