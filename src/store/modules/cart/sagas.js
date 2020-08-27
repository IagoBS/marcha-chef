import { all, select, call, put, takeLatest } from 'redux-saga/effects';
import api from '../../../services/api';
import { formatPrice } from '../../../ultil/format';
import { addToCartSucess, updateAmount } from './actions';

function* addTocart({ id }) {
  const response = yield call(api.get, `/products/${id}`);
  const MenuExists = yield select((state) =>
    state.cart.find((p) => p.id === id)
  );

  if (MenuExists) {
    const amount = MenuExists.amount + 1;
    yield put(updateAmount(id, amount));
  } else {
    const data = {
      ...response.data,
      amount: 1,
      priceFormated: formatPrice(response.data.price),
    };
    yield put(addToCartSucess(data));
  }
}
export default all([takeLatest('@cart/ADD_REQUEST', addTocart)]);
