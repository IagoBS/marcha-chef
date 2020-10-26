import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import logo from '~/assets/images/logo.svg';
import { signInRequest } from '~/store/modules/auth/actions';
import { Wrapper, Content } from './styles';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Insira um e-mail válido')
    .required('O campo e-mail é obrigatório'),
  password: Yup.string().required('O campo senha é obrigátorio'),
});
function Login() {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.auth.loading);
  function handleSubimit({ email, password }) {
    dispatch(signInRequest(email, password));
  }
  return (
    <>
      <Wrapper>
        <Content>
          <img src={logo} height={128} width={128} alt="MarchaChef" />
          <Form schema={schema} onSubmit={handleSubimit}>
            <Input
              type="email"
              name="email"
              id="email"
              placeholder="Digite seu e-mail"
            />
            <Input
              type="password"
              name="password"
              id="password"
              placeholder="Digite sua senha"
            />
            <button type="submit">
              {loading ? 'Carregando...' : 'Acessar'}
            </button>
            <Link to="register">Crie sua conta</Link>
          </Form>
        </Content>
      </Wrapper>
    </>
  );
}

export default Login;
