import React, { useState, useEffect } from 'react';
import { useSelector, connect, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';

import { FaShoppingCart } from 'react-icons/fa';

import { ListRestaurants, Container, Section } from './styles';
import api from '../../services/api';

import * as CartActions from '../../store/modules/cart/actions';
import { formatPrice } from '../../ultil/format';

export default function Home() {
  const [menus, setMenus] = useState([]);
  const amount = useSelector((state) =>
    state.cart.reduce((sumAmount, menu) => {
      sumAmount[menu.id] = menu.amount || 0;
      return sumAmount;
    }, {})
  );

  const dispatch = useDispatch();

  useEffect(() => {
    async function loadMenus() {
      const response = await api.get('/products');
      const data = response.data.map((menu) => ({
        ...menu,
        priceFormated: formatPrice(menu.price),
      }));
      setMenus(data);
    }
    loadMenus();
  }, []);

  function handleAddProduct(id) {
    dispatch(CartActions.addToCartRequest(id));
  }

  return (
    <Container>
    <Section>
    <h3>Crie seu cárdapio para seu restaurante</h3>
    <p>Lorem Ipsum is simply dummy text of the printing
    and typesetting industry. Lorem Ipsum has been the industry's
    standard dummy text ever since the 1500s, when an unknown printer took a galley
    of type and scrambled it to make a type specimen book. </p>

    <button>
    <span>Assine agora!</span>
    </button>
    </Section>
      <h1>Restaurantes</h1>
      <ListRestaurants>
        {menus.map((menu) => (
          <li key={menu.id}>
            <img src={menu.image} alt={menu.title} />
            <strong>{menu.title}</strong>
            <span> {menu.priceFormated}</span>
            <button type="button" onClick={() => handleAddProduct(menu.id)}>
              <div>
                <FaShoppingCart size={32} color="#fff" /> {amount[menu.id] || 0}
              </div>
              <span>Adicionar ao carrinho</span>
            </button>
          </li>
        ))}
      </ListRestaurants>
    </Container>
  );
}
