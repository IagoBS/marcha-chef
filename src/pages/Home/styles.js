import styled from 'styled-components';
import { darken, lighten } from 'polished';
import cafe from '~/assets/images/unnamed.png';
import hambuerguer from '~/assets/images/hambuerguer.jpg';
import cozinheiros from '~/assets/images/cozinheiros.jpeg';
import cozinheirosSearch from '~/assets/images/images.jpeg';

export const Container = styled.div`
  margin-right: auto; /* 1 */
  margin-left: auto; /* 1 */

  max-width: 1500px; /* 2 */

  padding-right: 10px; /* 3 */
  padding-left: 10px; /* 3 */
  svg {
    bottom: 0;
    width: 100%;
    height: 100px;
    margin: 0 auto;
    padding: 0 15px;
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
  grid-template-columns: repeat(2, 1fr);
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
export const ContainerProduct = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px;
`;
export const NewProduct = styled.div`
  width: 540px;
  height: auto;
  max-width: 100%;
  border-radius: 10px;
  background-image: url(${hambuerguer});

  background-repeat: no-repeat;
  background-size: cover;
  text-align: center;
  font-weight: 600;
  color: #fff;
  border: none;
  box-shadow: 4px 7px 21px rgba(0, 0, 0, 0.7);
  display: flex;
  flex-direction: column;
  justify-content: center;

  p {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    line-height: 50px;
    font-weight: bold;
    font-size: 2.6rem;
  }
  button {
    width: 120px;
    height: 35px;
    margin-left: 200px;
    border-radius: 8px;
    background-color: #ff8a00;
    text-align: center;
    font-weight: bold;
    border: 0;
    outline: 0;
    text-align: center;
    color: #fff;
    box-shadow: 4px 4px 2px rgba(0, 0, 0, 0.25);
  }
`;

export const ContentProduct = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  max-width: 1200px;
`;
export const ToolsProduct = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 560px;
  justify-content: center;
  align-items: center;
`;
export const Search = styled.div`
  width: 450px;
  height: 150px;
  background-color: #b1b11b;
  background-image: url(${cozinheiros});
  background-repeat: no-repeat;
  background-size: auto;
  text-align: center;
  font-weight: 600;
  color: #fff;
  border-radius: 8px;
  border: none;
  box-shadow: 4px 7px 21px rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  > p {
    color: #fff;
    font-size: 2.5rem;
    font-weight: 600;
    text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.5);
    margin-top: 12px;
  }
  div {
    margin-top: 8px;
    background-color: #f1f1f1;
    border-radius: 20px;
    width: 250px;
    height: 35px;
    justify-content: space-evenly;
    align-items: center;
    box-shadow: 2px 2px 12px rgba(0, 0, 0, 0.2);
    input {
      border: none;
      background-color: transparent;
      color: #000000;
      align-items: center;
      outline: 0;

      height: 100%;
    }
    button {
      align-items: center;
      border: none;
    }
  }
`;
export const Order = styled.div`
  width: 450px;
  height: 150px;
  margin: 10px;
  background-image: url(${cozinheirosSearch});
  background-repeat: no-repeat;
  background-size: cover;
  text-align: center;
  font-weight: 600;
  color: #fff;
  border-radius: 8px;
  border: none;
  box-shadow: 4px 7px 21px rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  p {
    color: #fff;
    font-size: 3rem;
    font-weight: 600;
    text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.5);
    margin-top: 24px;
  }
`;
export const Filters = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  div {
    display: flex;
    margin-right: 25px;
    align-items: center;
    justify-content: center;
    background-color: black;
    height: 40px;
    height: 40px;
    border-radius: 100%;
  }
`;

export const ContainerHero = styled.div`
  margin-top: 8px;
  margin-right: auto; /* 1 */
  margin-left: auto; /* 1 */
  max-width: 1024px; /* 2 */
  padding-right: 10px; /* 3 */
  padding-left: 10px; /* 3 */
`;

export const HeroCard = styled.div`
  display: grid;
  width: 100%;
  flex-direction: column;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 30px;
  justify-content: center;

  align-items: center;
  margin-top: 16px;
`;
export const Promocoes = styled.div`
  box-shadow: 0px 4px 100px rgba(0, 0, 0, 0.25);
  background-image: url(${cozinheirosSearch});
  border-radius: 10px;

  height: 150px;
  width: 300px;

  h1 {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: #fff;
    font-size: 3rem;
    font-weight: 600;
    text-shadow: 2px 2px 12px rgba(0, 0, 0, 0.5);
  }
`;
export const HeroListRestaurant = styled.div`
  display: grid;
  grid-template-columns: 50% 25% 25%;
  grid-template-rows: 300px 300px;
  grid-gap: 5px 5px;
  margin: 0 auto;
  @media (max-width: 767.9px) {
    display: block;
    margin-top: 16px;
  }
  &:nth-child(1) {
    grid-row: 1/3;
  }
  &:nth-child(4) {
    grid-row: 1/3;
    grid-column: 3/4;
  }
`;
export const Feature = styled.div`
  position: relative;
  @media (max-width: 767.9px) {
    margin-top: 16px;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  &:nth-child(1) {
    grid-row: 1/3;
  }
  &:nth-child(4) {
    grid-row: 1/3;
    grid-column: 3/4;
  }
  &:nth-child(2) h1 {
    font-size: 1rem;
  }
  &:nth-child(3) h1 {
    font-size: 1rem;
  }
`;
export const TitleFilter = styled.div`
  position: absolute;
  bottom: 0;
  background: #333;
  opacity: 50%;
  width: 100%;
  max-width: 1400;
  height: 22%;
`;
export const FeatureTitle = styled.div`
  position: absolute;
  letter-spacing: 4px;
  bottom: 0;
  margin: 5px 10px;
  color: #fff;
  div {
    border-left: 1px solid #fff;
  }
  p {
    display: flex;
    align-items: center;
    letter-spacing: 2px;
    a {
      color: #222;
      margin: 0 15px;
    }
  }
  h1 {
    font-size: 2rem;
    display: flex;
    align-items: center;
    text-align: center;
  }
`;
export const Fatured = styled.div`
  margin-top: 8px;
  display: grid;
  grid-template-columns: 400px 400px 400px;
  grid-gap: 20px 20px;
  margin: 0 auto;
  padding: 20px 0px;
  background-color: #ffae84;
  background-image: linear-gradient(62deg, #ffae84 0%, #ffd35e 100%);
  border-radius: 8px;
`;
export const Box = styled.div`
  grid-row: 1/4;
  h2 {
    display: flex;
    color: #fff;
    margin: 20px 0px;
    font-size: 2.1rem;
    letter-spacing: 8px;
    span {
      color: #ff8a00;
      font-size: 2rem;
      margin-left: 16px;
    }
  }
`;
export const About = styled.div`
  img {
    display: block;
    width: 100%;
    max-width: 100%;
    height: 300px;
    margin-bottom: 20px;
  }
  p {
    line-height: 25px;
    text-align: justify;
    font-weight: 600;
    color: #fff;
    font-size: 2.4rem;
  }
`;
export const FaturedPosts = styled.div``;
export const Post = styled.div`
  display: flex;
`;
export const Calendario = styled.div`
  width: 50px;
  height: 60px;
  margin: 10px;
  background-color: darkorange;
  justify-content: center;
  align-items: center;
  padding: 10px;
  > p {
    font-size: 2.3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: #fff;
    font-weight: bold;
    flex-direction: column;
    span {
      display: block;
      text-transform: uppercase;
      font-size: 2rem;
    }
  }
`;
export const Dish = styled.div`
  padding: 10px;
  margin-top: 8px;
  align-items: center;
  justify-content: center;
  > h1 {
    font-size: 2rem;
    color: #fff;
  }
  > p {
    display: block;
    align-items: center;
    justify-content: center;
    margin-top: 8px;
    font-size: 1.5rem;
  }
`;

export const RecipeTypes = styled.div`
  font-weight: bold;
  padding: 15px;
  display: block;
  width: 300px;
  color: #333;
`;
export const TypeCategory = styled.div`
  display: block;
  padding: 16px;
  width: 300px;
  color: #333;
  border-bottom: 2px solid #ddd;
  a {
    display: flex;
    justify-content: space-between;
    margin-left: 20px;
    color: #555;
    font-size: 1.5rem;
    align-items: center;
    justify-content: space-between;
    font-weight: bold;
    font-size: 1.5rem;
    &:hover {
      color: #ddd;
      transition: all 1s ease-in-out;
    }
    span {
      display: inline-flex;
      color: #ff8a00;
      background-color: #5c5c5c;
      border-radius: 70%;
      padding: 8px;
      &:hover {
        background-color: #ddd;
        transition: all 1s ease-in-out;
      }
    }
  }
`;
export const Subscribe = styled.div`
  display: block;
  align-items: center;
  justify-content: center;
  h1 {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-size: 2.2rem;
    color: #fff;
    span {
      color: #ff8a00;
      font-size: 2.5rem;
      font-weight: bold;
      margin-left: 8px;
    }
  }
  p {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 16px;
    color: #fff;
    font-size: 1.8rem;
  }
  input {
    width: 70%;
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
    padding: 16px;
    margin-left: 16px;
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
  }
`;
export const RestaurantTops = styled.div`
  grid-column: 2/4;
  grid-row: 1/2;
  position: relative;
  text-align: center;
  line-height: 25px;
  img {
    width: 100%;
    height: 600px;
    object-fit: cover;
    margin-bottom: 8px;
  }
  h1 {
    margin: 20px 10px;
    letter-spacing: 2px;
    font-size: 1.5rem;
    font-size: 2rem;
    color: #5c5c5c;
  }
  p {
    display: flex;
    align-items: center;
    justify-content: center;
    color: #5c5c5c;
    font-size: 1.5rem;
  }
  button {
    display: block;
    border: 2px solid #ff8a00;
    padding: 5px 10px;
    width: 120px;
    letter-spacing: 2px;
    font-weight: bold;
    margin: 4px auto;
    color: #5c5c5c;
    &:hover {
      color: #ddd;
      transition: all 1s ease-in-out;
    }
  }
`;
export const DateRestaurantTops = styled.div`
  display: flex;
  position: absolute;
  background-color: #ff8a00;
  border-radius: 2px;
  margin: 20px;
  p {
    display: flex;
    color: #fff;
    text-align: center;
    font-weight: bold;
    font-size: 1.3rem;
    span {
      font-size: 1.7rem;
      margin-left: 3px;
    }
  }
`;
export const SelectedRestaurant = styled.div`
margin-left: 16px;
`;
