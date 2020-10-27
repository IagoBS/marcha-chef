import styled from 'styled-components';
import { darken, lighten } from 'polished';
import cafe from '~/assets/images/unnamed.jpg';

export const Container = styled.div`
  svg {
    bottom: 0;
    width: 100%;
    height: 100px;
  }
  > h1 {
    display: flex;
    align-items: center;
    justify-content: center;

    padding: 10px;
    font-size: 40px;
    font-weight: bold;

    margin: 5px 0 20px;
    font-family: Proxima Nova;
    font-size: 40px;
    line-height: 158.34%;

    text-align: center;
    color: #ffc099;
  }
`;

export const Hero = styled.section`
  width: 100%;
  height: 60vh;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-top: 64px;
`;
export const ContainerNavigation = styled.div`
  h2 {
    font-family: Proxima Nova;
    line-height: 158.34%;
    color: #ffffff;
    font-size: 8rem;
    font-weight: 100;
    line-height: 0.8;
    letter-spacing: 2px;
  }
  span {
    text-transform: uppercase;
    font-size: 10.3rem;
  }
  h1 {
    color: #fff;
    font-size: 3.7rem;
    font-family: var(--main-font);
    text-transform: uppercase;
    font-weight: 900;
    letter-spacing: 0.5rem;
    margin-right: -0.5rem;
  }
`;
export const HeadLine = styled.div`
  color: #fff;
  font-size: 1.4rem;
  font-weight: 100;
  text-transform: uppercase;
  margin-bottom: 1.2rem;
  letter-spacing: 3px;
  margin-right: -3px;
`;
export const Separator = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  .line {
    width: 100%;
    max-width: 8.4rem;
    height: 0.25rem;
    background-color: #fff;
    position: relative;
  }
  .line-right::before,
  .line-left::before {
    content: '';
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    border: 0.6rem solid transparent;
  }
  .line-right::before {
    border-right-color: #fff;
    right: 0;
  }
  .line-left::before {
    border-left-color: #fff;
    left: 0;
  }
  .astericks {
    font-size: 1.2rem;
    color: var(--secondary-font-color);
    margin: 0 1.6rem;
  }
`;
export const Single = styled.div`
  a {
    margin: 10px;
    padding: 15px 45px;
    text-align: center;
    text-transform: uppercase;
    transition: 0.5s;
    background-size: 200% auto;
    color: white;
    box-shadow: 0 0 20px #eee;
    border-radius: 10px;
    display: block;
    &:hover {
      background: ${darken(0.03, '#FF8A00')};
    }
    &:focus {
      color: #fff;
      background-color: ${lighten(0.03, '#FF8A44')};
    }
  }
`;
export const ListRestaurants = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  list-style: none;
  li {
    display: flex;
    flex-direction: column;
    padding: 20px;
    background: #fff;
    border-radius: 10px;
    img {
      align-self: center;
      max-width: 300px;
    }
    > strong {
      font-size: 16px;
      line-height: 20px;
      color: #333;
      margin-top: 5px;
    }
    > span {
      font-size: 21px;
      font-weight: bold;
      margin: 5px 0 20px;
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
  }
`;
export const Signature = styled.button`
  background-color: #eb648c;
  border-radius: 2rem;
  color: #fafafa;
  display: inline-block;
  margin-top: 2rem;
  padding: 1rem 2.5rem;
  text-transform: uppercase;
  transition: background-color 1s;
`;
