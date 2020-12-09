import React from 'react';
import {
  Hero,
  Recipe,
  About,
  ExtraSection,
  RecipesGrid,
  Product,
  WrapperText,
  Wrapper,
  WrapperGrid,
  ImageAbout,
} from './styles';
import { Link } from 'react-router-dom';
import { Container, Row, Column } from '~/Components/Grid/styled';
import imageTest from '../../assets/images/sanduichao.jpeg';
import burguer from '../../assets/images/burger.svg';
export default function Recipes() {
  return (
    <>
      <Hero>
        <h1>Receitas gostosas</h1>
        <p>Receitas da mais alta gastronomia</p>
      </Hero>
      <Wrapper>
        <WrapperGrid>
          <Link to="/">
            <Product>
              <img src={imageTest} alt="" />
              <WrapperText>
                <h5>Café da manhã</h5>
                <p>
                  is simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been the industry's standard dummy
                </p>
              </WrapperText>
            </Product>
          </Link>
          <Product>
            <img src={imageTest} alt="" />
            <WrapperText>
              <h5>Café da manhã</h5>
              <p>
                is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy
              </p>
            </WrapperText>
          </Product>
          <Product>
            <img src={imageTest} alt="" />
            <WrapperText>
              <h5>Café da manhã</h5>
              <p>
                is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy
              </p>
            </WrapperText>
          </Product>
          <Product>
            <img src={imageTest} alt="" />
            <WrapperText>
              <h5>Café da manhã</h5>
              <p>
                is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy
              </p>
            </WrapperText>
          </Product>
          <Product>
            <img src={imageTest} alt="" />
            <WrapperText>
              <h5>Café da manhã</h5>
              <p>
                is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy
              </p>
            </WrapperText>
          </Product>
          <Product>
            <img src={imageTest} alt="" />
            <WrapperText>
              <h5>Café da manhã</h5>
              <p>
                is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy
              </p>
            </WrapperText>
          </Product>
          <Product>
            <img src={imageTest} alt="" />
            <WrapperText>
              <h5>Café da manhã</h5>
              <p>
                is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy
              </p>
            </WrapperText>
          </Product>
          <Product>
            <img src={imageTest} alt="" />
            <WrapperText>
              <h5>Café da manhã</h5>
              <p>
                is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy
              </p>
            </WrapperText>
          </Product>
        </WrapperGrid>
      </Wrapper>
    </>
  );
}
