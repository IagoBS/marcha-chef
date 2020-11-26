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
grid-gap:  wrap;
justify-content: space-between;

`;
export const MenuSingle = styled.div`
display: flex;
flex-direction: row;
align-items: center;
flex-basis: 580px;
margin-bottom: 20px;
padding-bottom: 20px;
border-bottom: 2px solid #ddd;
img {
  display: block;
  max-width: 100%;
  height: 180px;
  margin-right: 30px;
}
&:nth-child(5), &:nth-child(6) {
  border-bottom: 0;

}
`;
