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
    font-size: 5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    text-transform: uppercase;
    padding-top: 50px;
    text-decoration: overline underline;
  }

  p {
    display: flex;
    align-items: center;
    justify-content: center;
    letter-spacing: 2px;
    font-size: 2.5rem;
    color: #fff;
    font-weight: bold;
  }
  button {
    display: flex;
    justify-content: center;
    align-items: center;

    padding: 16px;
    border: 0;
    border-radius: 5px;
    background-color: #5c5c5c;
    color: #fff;
    font-size: 3rem;
    text-transform: uppercase;
    margin-top: 24px;
  }
`;
export const Wrapper = styled.div`
  display: 100%;
  max-width: 1200px;
  margin: 100px auto;
`;
export const WrapperGrid = styled.div`
  display: grid;
  width: 100%;
  flex-direction: column;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 30px;
  justify-content: center;

  align-items: center;
  margin-top: 16px;
 
`;

export const Recipe = styled.div`
  padding: 70px 0;
`;
export const Product = styled.div`
  position: relative;
  height: 100%;
  width: auto;
  background-color: black;
  overflow: hidden;
  border-radius: 4px;
  img {
    border-radius: 4px;
    width: 100%;
    max-width: 100%;
    height: auto;
    transition: all 2s;
    &:hover {
      transform: scale(1.1, 1.1);
    }
  }
`;
export const WrapperText = styled.div`
  width: 100%;
  height: auto;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.6);
  justify-content: center;
  position: absolute;
  padding: 10px 15px;
  bottom: 3px;
  color: #fff;
  h5 {
    color: #f4551f;
    padding: 4px;
    align-items: center;
    text-align: center;
    font-size: 2.5rem;
    font-weight: 600;
  }
  p {
    font-weight: 300;
    font-size: 1.5rem;
    text-align: center;
    align-items: center;
  }
`;


export const ExtraSection = styled.div`

`;
export const Category = styled.div``;
