import React from 'react';
import {
  Hero,
  Recipe,
  About,
  ExtraSection,
  RecipesGrid,
  Product,
  WrapperText,
} from './styles';
import { Container, Row, Column } from '~/Components/Grid/styled';
export default function Recipes() {
  return (
    <>
      <Hero>
        <h1>Receitas gostosas</h1>
        <p>Receitas da mais alta gastronomia</p>
      </Hero>
      <Container>
        <Recipe>
          <RecipesGrid>
            <Product>
              <img src="" alt="" />
              <WrapperText>
                <h5>Café da manhã</h5>
                <p>dwdoawdownd</p>
              </WrapperText>
            </Product>
          </RecipesGrid>
        </Recipe>
      </Container>
      <About></About>
      <ExtraSection></ExtraSection>
    </>
  );
}
