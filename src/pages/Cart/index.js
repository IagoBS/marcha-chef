import React from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { FaTrashAlt, FaMinusSquare, FaPlus } from 'react-icons/fa';
import { formatPrice } from '../../ultil/format';
import * as CartActions from '../../store/modules/cart/actions';
import { Container, ProductTable, Side, Total } from './styles';

export default function Cart() {
  const total = useSelector((state) =>
    formatPrice(
      state.cart.reduce((totalSum, menu) => {
        return totalSum + menu.price * menu.amount;
      }, 0)
    )
  );
  const cart = useSelector((state) =>
    state.cart.map((menu) => ({
      ...menu,
      subTotal: formatPrice(menu.price * menu.amount),
    }))
  );
  const dispatch = useDispatch();
  function increment(menu) {
    dispatch(CartActions.updateAmountRequest(menu.id, menu.amount + 1));
  }
  function decrement(menu) {
    dispatch(CartActions.updateAmountRequest(menu.id, menu.amount - 1));
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
                <button
                  type="button"
                  onClick={() => dispatch(CartActions.removeToCart(menu.id))}
                >
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
