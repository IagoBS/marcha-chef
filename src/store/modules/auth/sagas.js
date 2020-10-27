import { takeLatest, put, call, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '../../../services/api';
import { signInSucess, signFail } from './actions';
import history from '../../../services/history';

export function* signIn({ payload }) {
  try {
    const { email, password } = payload;
    const response = yield call(api.post, 'login', {
      email,
      password,
    });
    const { token, user } = response.data;
    if (!user.provider) {
      toast.error('Esse usuário não tem permissão para acessar a página');
    }
    api.defaults.headers.Authorization = `Bearer ${token}`;
    yield put(signInSucess(token, user));
    history.push('dashboard');
  } catch (err) {
    toast.error('Erro na autenticação, verifique seus dados');
    yield put(signFail());
  }
}
export function* singUp({ payload }) {
  try {
    const { name, email, password } = payload;
    yield call(api.post, 'user', {
      name,
      email,
      password,
    });
    history.push('/');
  } catch (err) {
    toast.error(
      'Falha em cadastrar usuário, verifique seus dados, ou tente novamente'
    );
    yield put(signFail());
  }
}
export function setToken({ payload }) {
  if (!payload) {
    return;
  }
  const { token } = payload.auth;
  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`;
  }
}
export function* SingOutUser() {
  yield call(api.post, 'logout');
  history.push('/');
}
export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@auth/SINGIN_REQUEST', signIn),
  takeLatest('@auth/@auth/SINGUP_REQUEST', singUp),
  takeLatest('@auth/SIGN_OUT', SingOutUser),
]);
