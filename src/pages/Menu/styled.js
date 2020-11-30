import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Hero = styled.section`
  display: flex;
  padding: 32px;
  align-items: center;
  justify-content: center;
  .restaurantImg {
    display: block;
    border-radius: 4px;
    max-width: 100%;
  }
  .logoRestaurant {
    display: block;
    justify-content: start;
    align-items: center;
    margin-left: 16px;
    height: 100px;
    max-width: 100%;
  }
  p {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    line-height: 50px;
    font-weight: bold;
    font-size: 1.3rem;
    color: #fff;
    &:nth-child(1) {
      font-size: 1.9rem;
    }
    &:nth-child(2) {
      font-size: 2rem;
    }
    > span {
      width: 16px;
      height: 16px;
      background-color: green;
      border-radius: 100%;
      margin-left: 8px;
    }
    small {
      display: flex;
      font-size: 1.5rem;
      text-transform: uppercase;
      margin-left: 8px;
    }
  }
  span {
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    text-align: end;
    font-size: 1.6rem;
  }
`;
export const Title = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;

  margin: 60px;
  text-transform: capitalize;

  color: #5c5c5c;
  font-size: 3rem;
  position: relative;
  font-family: italic sans-serif;
`;
export const Wrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 100px auto;
`;
export const MenuGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
export const MenuSingle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-basis: 580px;
  margin-bottom: 30px;
  padding-bottom: 30px;
  border-bottom: 2px solid #dddd;
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1);
  &:hover {
    box-shadow: 10px 1px 1px rgba(0, 0, 0, 0.5);
  }
  img {
    max-width: 180px;
    margin-right: 30px;
    border-radius: 4%;
    border: 1px solid #ddd;
    padding: 3px;
  }
  h4 {
    display: block;
    align-items: center;
    text-transform: capitalize;
    font-size: 1.8rem;
    margin-top: 16px;
    border-bottom: 1px dashed #333;
    margin-bottom: 12px;
    color: #fff;
    span {
      float: right;
      color: #ff7720;
    }
  }
  p {
    color: #fff;
    font-family: 2rem;
  }
  button {
    background: linear-gradient(
      253.58deg,
      #ffc000 1.55%,
      #ff9e00 60.2%,
      #ff8a00 95.8%
    );
    box-shadow: 0px 4px 100px rgba(198, 134, 10, 0.25);
    color: #fff;
    border: 0;
    border-radius: 4px;
    overflow: hidden;
    margin-top: auto;
    display: flex;
    align-items: center;
    transition: background 0.2s;
    &:hover {
      background: linear-gradient(
        253.58deg,
        #ff8a00 1.55%,
        #ff9e00 60.2%,
        #ffc000 95.8%
      );
    }
    div {
      display: flex;
      align-items: center;
      padding: 12px;
      background: rgba(0, 0, 0, 0.1);
      svg {
        margin-right: 5px;
      }
    }
    span {
      flex: 1;
      text-align: center;
      font-weight: bold;
    }
  }
  &:nth-child(5),
  &:nth-child(6) {
    border-bottom: 0;
  }
`;
