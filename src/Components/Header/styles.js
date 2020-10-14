import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Content = styled.header`
  width: 100%;
  background: #ffff;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.09);
`;

export const Navigation = styled.nav`
  ul {
    display: flex;
    align-items: center;
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
