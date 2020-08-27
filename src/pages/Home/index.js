import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { FaShoppingCart } from 'react-icons/fa';
import { ListRestaurants, Container } from './styles';
import api from '../../services/api';
import * as CartActions from '../../store/modules/cart/actions';
import { formatPrice } from '../../ultil/format';

class Home extends Component {
  state = {
    menus: [],
  };

  async componentDidMount() {
    const response = await api.get('/products');
    const data = response.data.map((menu) => ({
      ...menu,
      priceFormated: formatPrice(menu.price),
    }));
    this.setState({ menus: data });
  }

  handleAddProduct = (id) => {
    const { addToCartRequest } = this.props;
    addToCartRequest(id);
  };

  render() {
    const { menus } = this.state;
    const { amount } = this.props;
    return (
      <Container>
        <h1>Restaurantes</h1>
        <ListRestaurants>
          {menus.map((menu) => (
            <li key={menu.id}>
              <img src={menu.image} alt={menu.title} />
              <strong>{menu.title}</strong>
              <span> {menu.priceFormated}</span>
              <button
                type="button"
                onClick={() => this.handleAddProduct(menu.id)}
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
      </Container>
    );
  }
}
const mapStateToProps = (state) => ({
  amount: state.cart.reduce((amount, menu) => {
    amount[menu.id] = menu.amount || 0;
    return amount;
  }, {}),
});
const mapDisPatchToProps = (dispatch) =>
  bindActionCreators(CartActions, dispatch);

export default connect(mapStateToProps, mapDisPatchToProps)(Home);
