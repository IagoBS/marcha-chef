import React, { Component } from 'react';
import { FaShoppingCart } from 'react-icons/fa';

import { ListRestaurants, Container } from './styles';
import api from '../../services/api';
import { formatPrice } from '../../ultil/format';

export default class Home extends Component {
  state = {
    restaurants: [],
  };

  async componentDidMount() {
    const response = await api.get('/products');
    const data = response.data.map((restaurant) => ({
      ...restaurant,
      priceFormated: formatPrice(restaurant.price),
    }));
    this.setState({ restaurants: data });
  }

  render() {
    const { restaurants } = this.state;
    return (
      <Container>
        <h1>Restaurantes</h1>
        <ListRestaurants>
          {restaurants.map((restaurant) => (
            <li key={restaurant.id}>
              <img src={restaurant.image} alt={restaurant.title} />
              <strong>{restaurant.title}</strong>
              <span> {restaurant.priceFormated}</span>
              <button type="button">
                <div>
                  <FaShoppingCart size={32} color="#fff" /> 3
                </div>
                <span>Adicionar ao carrinho</span>
              </button>
            </li>
          ))}
        </ListRestaurants>
      </Container>
    );
  }
}
