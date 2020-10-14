import { all, select, call, put, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import api from '../../../services/api';
import { formatPrice } from '../../../ultil/format';
import { addToCartSucess, updateAmountSucess } from './actions';
import history from '../../../services/history';

function* addTocart({ id }) {
  const response = yield call(api.get, `/products/${id}`);
  const MenuExists = yield select((state) =>
    state.cart.find((p) => p.id === id)
  );
  const stock = yield call(api.get, `/stock/${id}`);
  const stockAmount = stock.data.amount;
  const stockCurrentAmount = MenuExists ? MenuExists.amount : 0;
  const amount = stockCurrentAmount + 1;

  if (amount > stockAmount) {
    console.tron.warn('ERRO');
    toast.error('Quantidade fora do estoque ');
    return;
  }
  if (MenuExists) {
    yield put(updateAmountSucess(id, amount));
  } else {
    const data = {
      ...response.data,
      amount: 1,
      priceFormated: formatPrice(response.data.price),
    };
    yield put(addToCartSucess(data));
  }
}
function* updateAmount({ id, amount }) {
  if (amount <= 0) return;

  const stock = yield call(api.get, `/stock/${id}`);
  const stockAmount = stock.data.amount;
  if (amount >= stockAmount) {
    toast.error('Quantidade fora do estoque ');
    return;
  }
  yield put(updateAmountSucess(id, amount));
}
export default all([
  takeLatest('@cart/ADD_REQUEST', addTocart),
  takeLatest('@cart/UPDATE_AMOUNT_REQUEST', updateAmount),
]);
