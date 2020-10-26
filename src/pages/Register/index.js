import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import { signUpRequest } from '~/store/modules/auth/actions';
import logo from '~/assets/images/logo.svg';
import { Wrapper, Content } from './styles';

function Register() {
  const dispatch = useDispatch();

  const schema = Yup.object().shape({
    name: Yup.string().required('O campo nome é obrigátorio'),
    email: Yup.string()
      .email('Insira um e-mail válido')
      .required('O campo e-mail é obrigatório'),
    password: Yup.string().required('O campo senha é obrigátorio'),
    confirm_password: Yup.string().when('password', (password, field) =>
      password ? field.required().oneOf([Yup.ref('password')]) : field
    ),
  });
  function handleSubimit({ name, email, password }) {
    dispatch(signUpRequest(name, email, password));
  }
  return (
    <>
      <Wrapper>
        <Content>
          <img src={logo} height={128} width={128} alt="MarchaChef" />
          <Form schema={schema} onSubmit={handleSubimit}>
            <Input
              type="text"
              name="name"
              id="name"
              placeholder="Digite seu nome"
            />
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
            <Input
              type="password"
              name="confirm_password"
              id="confirm_password"
              placeholder="Confirme sua senha"
            />
            <button type="submit">Crie sua conta</button>
            <Link to="/login">Já tem uma conta?</Link>
          </Form>
        </Content>
      </Wrapper>
    </>
  );
}

export default Register;
