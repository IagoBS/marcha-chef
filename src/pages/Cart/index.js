import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { FaTrashAlt, FaMinusSquare, FaPlus } from 'react-icons/fa';
import { formatPrice } from '../../ultil/format';
import * as CartActions from '../../store/modules/cart/actions';
import { Container, ProductTable, Side, Total } from './styles';

function Cart({ cart, total, removeToCart, updateAmount }) {
  function increment(menu) {
    updateAmount(menu.id, menu.amount + 1);
  }
  function decrement(menu) {
    updateAmount(menu.id, menu.amount - 1);
  }
  return (
    <Container>
      <ProductTable>
        <thead>
          <tr>
            <th />
            <th>Produto</th>
            <th>Quantidade</th>
            <th>Preço</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((menu) => (
            <tr>
              <td>
                <img src={menu.image} alt={menu.title} />
              </td>
              <td>
                <strong>{menu.title}</strong>
                <span>{menu.priceFormated}</span>
              </td>
              <td>
                <div>
                  <button type="button" onClick={() => decrement(menu)}>
                    <FaMinusSquare size={20} color="#FF8A00" />
                  </button>
                  <input type="number" readOnly value={menu.amount} />
                  <button type="button" onClick={() => increment(menu)}>
                    <FaPlus size={20} color="#FF8A00" />
                  </button>
                </div>
              </td>
              <td>
                <strong>{menu.subTotal}</strong>
              </td>
              <td>
                <button type="button" onClick={() => removeToCart(menu.id)}>
                  <FaTrashAlt size={20} color="#ff0000" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </ProductTable>
      <Side>
        <button type="button">Finalizar pedido</button>
        <Total>
          <span>TOTAL</span>
          <strong>{total}</strong>
        </Total>
      </Side>
    </Container>
  );
}
const mapStateProps = (state) => ({
  cart: state.cart.map((menu) => ({
    ...menu,
    subTotal: formatPrice(menu.price * menu.amount),
  })),
  total: formatPrice(
    state.cart.reduce((total, menu) => {
      return total + menu.price * menu.amount;
    }, 0)
  ),
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(CartActions, dispatch);
export default connect(mapStateProps, mapDispatchToProps)(Cart);
