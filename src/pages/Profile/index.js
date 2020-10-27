import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import { useSelector, useDispatch } from 'react-redux';
import { singOut } from '~/store/modules/auth/actions';
import { Container } from './styles';
import { updateProfileRequest } from '~/store/modules/user/actions';
import AvatarInput from './AvatarInput';

function Profile() {
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.user.profile);
  function handdleSubmmit(data) {
    dispatch(updateProfileRequest(data));
  }
  function handdleSingout() {
    dispatch(singOut());
  }
  return (
    <Container>
      <Form initialData={profile} onSubmit={handdleSubmmit}>
        <AvatarInput name="file_id" />
        <Input name="name" placeholder="Nome completo" />
        <Input name="email" placeholder="Trocar" />
        <hr />
        <Input
          type="password"
          name="oldPassword"
          placeholder="Sua senha antiga"
        />
        <Input
          type="password"
          name="newPassword"
          placeholder="Sua nova senha"
        />
        <Input
          type="password"
          name="confirm_password"
          placeholder="Confirme sua nova senha"
        />
        <hr />
        <button type="submit">Atualizar perfil</button>
      </Form>
      <button type="submit" onClick={() => handdleSingout()}>
        Sair do MarchaChef
      </button>
    </Container>
  );
}

export default Profile;
