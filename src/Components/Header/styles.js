import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.header`
  height: 64px;
  background-color: #fbab7e;
  background-image: linear-gradient(62deg, #fbab7e 0%, #f7ce68 100%);
  padding: 0 px;
`;

export const Content = styled.div`
  height: 64px;
  width: 90%;
  max-width: 900px;
  margin: 0 auto;

  display: flex;
  justify-content: space-between;
  align-items: center;
  nav {
    display: flex;
    align-items: center;
    img {
      margin-right: 20px;
      margin-left: 20px;
      border-right: 1px solid #ff8a00;
    }
    a {
      font-weight: bold;
      color: #888;
    }
    ul {
      display: flex;
      align-items: center;
      list-style: none;
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
    }
  }
  aside {
    display: flex;
    align-items: center;
  }
  @media (max-width: 767.98px) {
    nav {
      display: none;
    }
    .one,
    .two,
    .three {
      align-items: center;
      background: #ffff;
      height: 8px;
      width: 100%;
      margin: 6px;
      transition-duration: 0.3ms;
    }
    .menu-toggle {
      width: 40px;
      height: 30px;
      margin-right: 20px;
    }
    .menu-section.on {
      position: absolute;
      top: 0;
      left: 0;
      background-color: #ff8a18;
      width: 50vw;
      height: 100vh;
      z-index: 10;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .menu-section.on nav {
      display: block;
    }
    .menu-section.on .menu-toggle {
      position: absolute;
      right: 0;
      top: 15px;
    }
    .menu-section.on .menu-toggle .one {
      transform: rotate(45deg) translate(7px 7px);
    }
    .menu-section.on .menu-toggle .two {
      opacity: 0;
    }
    .menu-section.on .menu-toggle .three {
      transform: rotate(45deg) translate(8px -7px);
    }
    .menu-section.on nav ul {
      text-align: center;
      display: block;
    }
    .menu-section nav ul a {
      transition-duration: 0.5s;
      font-size: 3rem;
      line-height: 8rem;
    }
  }
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
  margin-left: 20px;
  padding-left: 20px;
  border-left: 1px solid #ff8a00;
  div {
    text-align: right;
    margin-right: 10px;
    strong {
      display: block;

      color: #333;
    }
    a {
      display: block;
      margin-top: 2px;
      font-size: 12px;
      color: #999;
    }
  }
  img {
    width: 32px;
    height: 32px;
    border-radius: 50%;
  }
  &:hover {
    opacity: 0.7;
  }
`;
export const Logo = styled.div`
  display: flex;
  align-items: center;
  margin-left: 64px;
`;
