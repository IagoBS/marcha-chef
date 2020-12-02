import styled from 'styled-components';
import { darken, lighten } from 'polished';
export const SideBar = styled.div`
  height: 100%;
  width: 240px;
  position: fixed;
  left: 0;
  z-index: 100;
  color: #fff;
  background: #ff8a00;
  padding: 14px;
  overflow-y: auto;
`;
export const SideBarHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  padding: 8px;

  img {
    height: 50px;
    width: 25%;
  }
  h3 {
    font-size: 2rem;
    text-transform: uppercase;
  }
`;
export const SideBarMenu = styled.div`
  padding: 20px;
  ul {
    li {
      margin-bottom: 24px;
      &:first-child {
        background: rgba(0, 0, 0, 0.1);
      }
      a {
        color: #fff;
        font-size: 2rem;
        span {
          font-family: Verdana, Geneva, Tahoma, sans-serif;
          text-transform: capitalize;

          &:last-child {
            padding-left: 0 16px;
          }
        }
      }
    }
  }
`;
export const Content = styled.div`
  position: relative;
  margin-left: 240px;

  div {
    left: 300px;
    top: 0;
    z-index: 100;
    background: transparent;
    height: 60px;
    width: 100%;
    padding: 0 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #ccc;
  }
  main {
    margin-top: 60px;
    margin-left: 8px;
    min-height: 90vh;
    padding: 60px;
  }
`;
export const SearchItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  input {
    width: 100%;
    background: rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    border: 0;
    padding: 0px 16px;
    height: 44px;
    margin: 0 0 10px;
    &::placeholder {
      color: rgba(255, 255, 255, 0.7);
    }
  }

  button {
    border: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background: transparent;
    svg {
      display: flex;
      align-items: center;
      margin-right: 8px;
      float: right;
    }
  }
`;
