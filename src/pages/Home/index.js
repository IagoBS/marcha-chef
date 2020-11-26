import React, { useState, useEffect } from 'react';
import { useSelector, connect, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { FaShoppingCart, FaShare, FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.svg';
import imageTest from '../../assets/images/sanduichao.jpeg';
import {
  ListRestaurants,
  Container,
  Section,
  Hero,
  ContainerNavigation,
  Separator,
  HeadLine,
  Single,
  ContainerProduct,
  NewProduct,
  ToolsProduct,
  Search,
  Order,
  ContentProduct,
  Filters,
  HeroCard,
  Promocoes,
  ContainerHero,
} from './styles';
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
    <>
      <Hero>
        <ContainerNavigation>
          <h2>
            <span>S</span>eja bem-vindo
          </h2>
          <h1>MarchaChef</h1>
          <HeadLine>
            <Separator>
              <div className="line line-left" />
              <div className="astericks">
                <img src={logo} height={40} width={40} alt="MarchaChef" />
              </div>
              <div className="line line-right" />
            </Separator>
            <Single>
              <h5>Faça o cárdapio para seu restaurante</h5>
              <a href="#">Assine já</a>
            </Single>
          </HeadLine>
        </ContainerNavigation>
      </Hero>
      <Container>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 200 100"
          preserveAspectRatio="none"
        >
          <circle fill="white" cx="0" cy="100" r="100" />
          <circle fill="white" cx="200" cy="100" r="100" />
        </svg>
        <ContainerHero>
          <ContentProduct>
            <NewProduct>
              <p>MARCHACHEF</p>
              <p>Cárdapio para seu restaurante</p>
              <button type="submit">Saiba mais</button>
            </NewProduct>
            <ToolsProduct>
              <Search>
                <p>Procurar Restaurante</p>
                <div>
                  <input
                    type="text"
                    placeholder="Buscar restaurante ou pratos "
                  ></input>
                  <button type="button">Procurar</button>
                </div>
              </Search>
              <Order>
                <p>Filtrar</p>

                <Filters>
                  <div>
                    <FaSearch size={12}></FaSearch>
                  </div>
                  <div>
                    <FaSearch size={12}></FaSearch>
                  </div>
                  <div>
                    <FaSearch size={12}></FaSearch>
                  </div>
                  <div>
                    <FaSearch size={12}></FaSearch>
                  </div>
                </Filters>
              </Order>
            </ToolsProduct>
          </ContentProduct>
        </ContainerHero>
        <ContainerHero>
          <HeroCard>
            <Link to="/">
              <Promocoes>
                <h1>MarchaChef</h1>
              </Promocoes>
            </Link>
            <Promocoes></Promocoes>
            <Promocoes></Promocoes>
          </HeroCard>
        </ContainerHero>
        <h1>Restaurantes</h1>
        <ListRestaurants>
          {menus.map((menu) => (
            <li key={menu.id}>
              <img src={menu.image} alt={menu.title} />
              <strong>{menu.title}</strong>
              <span> {menu.priceFormated}</span>
              <button type="button" onClick={() => handleAddProduct(menu.id)}>
                <div>
                  <FaShoppingCart size={32} color="#fff" />{' '}
                  {amount[menu.id] || 0}
                </div>
                <span>Adicionar ao carrinho</span>
              </button>
            </li>
          ))}
        </ListRestaurants>

      </Container>
    </>
  );
}
