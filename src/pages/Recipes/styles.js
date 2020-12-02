import styled from 'styled-components';
import FoodAndDrinkDesignColour from '~/assets/images/FoodAndDrinkDesignColour.svg';
export const Hero = styled.section`
  width: 100%;
  height: 70vh;
  display: block;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(#f4511e, #f4511e),
    url(${FoodAndDrinkDesignColour});
  background-repeat: no-repeat;
  background-size: cover;
  background-blend-mode: multiply;
  h1 {
    color: #fff;
    font-size: 7rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    text-transform: uppercase;
    padding-top: 100px;
    text-decoration: overline underline;
  }

  p {
    display: flex;
    align-items: center;
    justify-content: center;
    letter-spacing: 2px;
    font-size: 3.5rem;
    color: #fff;
    font-weight: bold;
  }
`;
export const Recipe = styled.div`
  padding: 70px 0;
`;
export const RecipesGrid = styled.div``;
export const Product = styled.div``;
export const WrapperText = styled.div``;

export const About = styled.div``;
export const ExtraSection = styled.div``;
export const Category = styled.div``;
