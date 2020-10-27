import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FaCartPlus } from 'react-icons/fa';
import { Cart, Perfil, Content, Container } from './styles';
import Notifications from '~/Components/Notifications/index';
import logo from '../../assets/images/logo.svg';
import perfil from '../../assets/images/cara.svg';

export default function Header() {
  const cartSize = useSelector((state) => state.cart.length);
  return (
    <Container>
      <Content>
        <nav>
          <Link to="/">
            <img src={logo} alt="MarchaChef" height={64} />
          </Link>
        </nav>
        <aside>
          <Cart to="/cart">
            <div>
              <strong>Meu carrinho</strong>
              <span>{cartSize} itens</span>
            </div>
            <FaCartPlus size={36} color="#FFC000" />
          </Cart>
          <Perfil>
            <div>
              <Link to="/perfil">
                <strong>Iago</strong>
                meu perfil
              </Link>
            </div>
            <Link to="/perfil">
              <img src={perfil} alt="Perfil" />
            </Link>
          </Perfil>
          <Notifications />
        </aside>
      </Content>
    </Container>
  );
}
