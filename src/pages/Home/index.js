import React, { useState, useEffect } from 'react';
import { useSelector, connect, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { FaShoppingCart, FaShare, FaSearch, FaPlus } from 'react-icons/fa';
import { Input } from '@rocketseat/unform';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.svg';
import imageTest from '../../assets/images/sanduichao.jpeg';
import grid1 from '~/assets/images/grid1.jpg';
import grid2 from '~/assets/images/grid2.jpg';
import ifood from '~/assets/images/ifood.jpg';
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
  HeroListRestaurant,
  Feature,
  TitleFilter,
  FeatureTitle,
  Date,
  DateFilter,
  Fatured,
  Box,
  About,
  FaturedPosts,
  Post,
  Dish,
  Calendario,
  RecipeTypes,
  TypeCategory,
  Subscribe,
  RestaurantTops,
  DateRestaurantTops,
  SelectedRestaurant,
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
        {/* <ContainerHero>
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
        </ContainerHero> */}
        {/* <ContainerHero>
          <HeroCard>
            <Link to="/">
              <Promocoes>
                <h1>MarchaChef</h1>
              </Promocoes>
            </Link>
            <Promocoes></Promocoes>
            <Promocoes></Promocoes>
          </HeroCard>
        </ContainerHero> */}

        <h5>Grid Restaurantes</h5>
        <Container>
          <HeroListRestaurant>
            <Feature>
              <img src={grid1} alt="MarchaChef" />
              <TitleFilter></TitleFilter>
              <FeatureTitle>
                <p>
                  Categoria: <a href="">Iago</a>
                </p>
                <h1>Salada de fruta com tomate seco</h1>
              </FeatureTitle>
            </Feature>
            <Feature>
              <img src={grid2} alt="MarchaChef" />
              <TitleFilter></TitleFilter>
              <FeatureTitle>
                <p>
                  Categoria: <a href="">Iago</a>
                </p>
                <h1>Salada de fruta com tomate seco</h1>
              </FeatureTitle>
            </Feature>
            <Feature>
              <img src={grid2} alt="MarchaChef" />
              <TitleFilter></TitleFilter>
              <FeatureTitle>
                <p>
                  Categoria: <a href="">Iago</a>
                </p>
                <h1>Salada de fruta com tomate seco</h1>
              </FeatureTitle>
            </Feature>
            <Feature>
              <img src={grid2} alt="MarchaChef" />
              <TitleFilter></TitleFilter>
              <FeatureTitle>
                <p>
                  Categoria: <a href="">Iago</a>
                </p>
                <h1>Salada de fruta com tomate seco</h1>
              </FeatureTitle>
            </Feature>
            <Feature>
              <img src={grid2} alt="MarchaChef" />
              <TitleFilter></TitleFilter>
              <FeatureTitle>
                <p>
                  Categoria: <a href="">Iago</a>
                </p>
                <h1>Salada de fruta com tomate seco</h1>
              </FeatureTitle>
            </Feature>
            <Feature>
              <img src={grid2} alt="MarchaChef" />
              <TitleFilter></TitleFilter>
              <FeatureTitle>
                <div />
                <p>
                  Categoria: <a href="">Iago</a>
                </p>
                <h1>Salada de fruta com tomate seco</h1>
              </FeatureTitle>
            </Feature>
            <Feature>
              <img src={grid2} alt="MarchaChef" />
              <TitleFilter></TitleFilter>
              <FeatureTitle>
                <div />
                <p>
                  Categoria: <a href="">Iago</a>
                </p>
                <h1>Salada de fruta com tomate seco</h1>
              </FeatureTitle>
            </Feature>
          </HeroListRestaurant>
          {/* Fatura de destaque */}
          <Fatured>
            <Box>
              <About>
                <h2>
                  Sobre<span>MARCHACHEF</span>
                </h2>
                <img src={logo} alt="MarchaChef" />
                <p>
                  iFood é uma empresa brasileira fundada em 2011, atuante no
                  ramo de entrega de comida pela internet, sendo líder no setor
                  na América Latina, com presença na Argentina, no México e na
                  Colômbia.{' '}
                </p>
              </About>
              <FaturedPosts>
                <h2>
                  Promoções<span>MARCHACHEF</span>
                </h2>
                <Post>
                  <Calendario>
                    <p>
                      09<span>Dez</span>
                    </p>
                  </Calendario>
                  <Dish>
                    <h1>Coxinha de frango com catupiry</h1>
                    <p>
                      Coxinha de franco recada com catupiry e um monte de coisas
                    </p>
                  </Dish>
                </Post>
                <Post>
                  <Calendario>
                    <p>
                      09<span>Dez</span>
                    </p>
                  </Calendario>
                  <Dish>
                    <h1>Coxinha de frango com catupiry</h1>
                    <p>
                      Coxinha de franco recada com catupiry e um monte de coisas
                    </p>
                  </Dish>
                </Post>
                <Post>
                  <Calendario>
                    <p>
                      09<span>Dez</span>
                    </p>
                  </Calendario>
                  <Dish>
                    <h1>Coxinha de frango com catupiry</h1>
                    <p>
                      Coxinha de franco recada com catupiry e um monte de coisas
                    </p>
                  </Dish>
                </Post>
              </FaturedPosts>

              <RecipeTypes>
                <h2>
                  Categorias <span>MARCHACHEF</span>
                </h2>
                <TypeCategory>
                  <a href="">
                    #Pizza <span>11</span>
                  </a>
                </TypeCategory>
                <TypeCategory>
                  <a href="">
                    #Pizza <span>11</span>
                  </a>
                </TypeCategory>
                <TypeCategory>
                  <a href="">
                    #Pizza <span>11</span>
                  </a>
                </TypeCategory>
                <TypeCategory>
                  <a href="">
                    #Pizza <span>11</span>
                  </a>
                </TypeCategory>
              </RecipeTypes>
            </Box>
            <RestaurantTops>
              <DateRestaurantTops>
                <p>
                  Destaque da semana: <span>Pizza</span>
                </p>
              </DateRestaurantTops>
              <img src={grid2} alt="MarchaChef" />
              <h1>Pizza com arroz e feijão</h1>
              <p>
                is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy
              </p>
              <button type="button">Veja o destaque da semana</button>
            </RestaurantTops>
            <SelectedRestaurant>
              {/* <ListRestaurants>
                {menus.map((menu) => (
                  <li key={menu.id}>
                    <img src={menu.image} alt={menu.title} />
                    <strong>{menu.title}</strong>
                    <span> {menu.priceFormated}</span>
                    <button
                      type="button"
                      onClick={() => handleAddProduct(menu.id)}
                    >
                      <div>
                        <FaShoppingCart size={32} color="#fff" />{' '}
                        {amount[menu.id] || 0}
                      </div>
                      <span>Adicionar ao carrinho</span>
                    </button>
                  </li>
                ))}
              </ListRestaurants>
            </SelectedRestaurant> */}
              <ListRestaurants>
                <li>
                  <img src={grid2} alt="MarchaChef" />
                  <strong>MAnoa</strong>
                  <span>R$12,00</span>
                  <button type="button">
                    <div>
                      <FaShoppingCart size={32} color="#fff" />{' '}
                    </div>
                    <span>Adicionar ao carrinho</span>
                  </button>
                </li>
                <li>
                  <img src={grid2} alt="MarchaChef" />
                  <strong>MAnoa</strong>
                  <span>R$12,00</span>
                  <button type="button">
                    <div>
                      <FaShoppingCart size={32} color="#fff" />{' '}
                    </div>
                    <span>Adicionar ao carrinho</span>
                  </button>
                </li>
                <li>
                  <img src={grid2} alt="MarchaChef" />
                  <strong>MAnoa</strong>
                  <span>R$12,00</span>
                  <button type="button">
                    <div>
                      <FaShoppingCart size={32} color="#fff" />{' '}
                    </div>
                    <span>Adicionar ao carrinho</span>
                  </button>
                </li>
                <li>
                  <img src={grid2} alt="MarchaChef" />
                  <strong>MAnoa</strong>
                  <span>R$12,00</span>
                  <button type="button">
                    <div>
                      <FaShoppingCart size={32} color="#fff" />{' '}
                    </div>
                    <span>Adicionar ao carrinho</span>
                  </button>
                </li>
              </ListRestaurants>
            </SelectedRestaurant>
          </Fatured>
          <Subscribe>
            <h1>
              Saiba mais <span>MARCHACHEF</span>
            </h1>
            <p>
              Saiba mais sobre o funcionamento, e receba notificações no seu
              e-mail sobre o MARCHACHEF
            </p>
            <Input
              type="email"
              name="email"
              id="email"
              placeholder="Digite seu e-mail"
            />
            <button type="button">
              <span>Saiba Mais</span>
            </button>
          </Subscribe>
        </Container>
        {/* <h1>Restaurantes</h1>
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
        </ListRestaurants> */}
      </Container>
    </>
  );
}
