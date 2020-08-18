import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Content = styled.header`
  max-width: 1500px;
  background: #ffff;
  padding: 0 30px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Navigation = styled.nav`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap');
  ul {
    display: flex;
    list-style: none;
  }
  li {
    display: flex;
    align-items: center;
    font-family: 'Roboto', sans-serif;
    font-weight: bold;
    font-size: 16px;

    line-height: 18px;
    color: #ff8a00;
    margin-left: 16px;
  }

  li:first-child {
    margin: 0;
  }
  img {
    margin-right: 8px;
  }
`;
export const List = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  transition: opacity 0.2;
  margin-right: 48px;
  &:hover {
    opacity: 0.7;
  }
  color: #ff8a00;
`;
export const Side = styled.div`
  display: flex;
  align-items: center;
  margin-right: 16px;
`;
export const Cart = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  transition: opacity 0.2;
  margin-right: 24px;
  &:hover {
    opacity: 0.7;
  }
  div {
    text-align: right;
    margin-right: 10px;
  }
  strong {
    display: block;
    font-size: 16px;
    color: #5c5c5c;
  }
  span {
    font-size: 12px;
    color: #a6aab4;
  }
`;
export const Perfil = styled(Link)`
  display: flex;
  bottom: 95.53%;
  align-items: center;
  text-decoration: none;
  transition: opacity 0.2;
  justify-content: center;

  img {
    height: 34px;
    width: 35px;
    border-radius: 50%;
  }
  strong {
    display: flex;
    align-items: center;
    color: '#fff';
    font-weight: bold;
  }
  &:hover {
    opacity: 0.7;
  }
`;
export const Logo = styled.div`
  display: flex;
  align-items: center;
  margin-left: 32px;
`;
