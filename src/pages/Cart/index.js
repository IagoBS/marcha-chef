import React from 'react';

import { FaTrashAlt, FaMinusSquare, FaPlus } from 'react-icons/fa';
import { Container, ProductTable, Side, Total } from './styles';
import restaurant from '../../assets/images/image11.jpg';

function Cart() {
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
          <tr>
            <td>
              <img src={restaurant} alt="" />
            </td>
            <td>
              <strong>Coxinha de frango</strong>
              <span>R$ 4,99</span>
            </td>
            <td>
              <div>
                <button type="button">
                  <FaMinusSquare size={20} color="#FF8A00" />
                </button>
                <input type="number" readOnly value={1} />
                <button type="button">
                  <FaPlus size={20} color="#FF8A00" />
                </button>
              </div>
            </td>
            <td>
              <strong>R$ 10,00</strong>
            </td>
            <td>
              <button type="button">
                <FaTrashAlt size={20} color="#ff0000" />
              </button>
            </td>
          </tr>
        </tbody>
      </ProductTable>
      <Side>
        <button type="button">Finalizar pedido</button>
        <Total>
          <span>TOTAL</span>
          <strong>R$1000,99</strong>
        </Total>
      </Side>
    </Container>
  );
}

export default Cart;
