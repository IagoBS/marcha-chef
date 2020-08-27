import { all, call, put, takeLatest } from 'redux-saga/effects';
import api from '../../../services/api';
import { addToCartSucess } from './actions';

function* addTocart({ id }) {
  const response = yield call(api.get, `/products/${id}`);
  yield put(addToCartSucess(response.data));
}
export default all([takeLatest('@cart/ADD_REQUEST', addTocart)]);
