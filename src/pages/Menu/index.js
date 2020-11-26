import React, { useState, useEffect } from 'react';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { FaShoppingCart } from 'react-icons/fa';
import { Hero, Wrapper, MenuGrid, MenuSingle, Title } from './styled';
import logo from '../../assets/images/logo.svg';
import ImageTest from '../../assets/images/cozinheiros.jpeg';
import logoRestaurant from '../../assets/images/java.svg';
import {Container, Column, Row} from '~/Components/Grid/styled';
import Imageprato from '../../assets/images/aaaa.jpg';
export default function Menu() {
return (
  <>
    <Container>
      <Row>
        <Hero>
          <Column>
            <img
              src={logoRestaurant}
              className="logoRestaurant"
              alt="LogoRestaurant"
            />
            <p>Horário de funcionamento:</p>
            <p>
              <small> 7:00h as 00:00</small> <span></span>
            </p>
            <p>
              Av. 21 de Abril, 1590 - Santa Clara, Divinópolis - MG, 35500-070
            </p>
            <span>Telefone: (37) 3222-7644</span>
          </Column>
          <Column>
            <img
              src={ImageTest}
              className="restaurantImg"
              alt="Nome do restaurante"
            />
          </Column>
        </Hero>
      </Row>
    </Container>

    <Title>
      <h1>Restaurante do Iago </h1>
    </Title>
    <Wrapper>
      <MenuGrid>
        <MenuSingle>
          <img src={Imageprato} alt="Foto da comida" />
          <div>
            <h4>
              Salada de fruta <span>R$ 5,00 </span>
            </h4>
            <p>
              Salada de frutas é um prato que consiste de uma combinação de
              várias frutas picadas, temperado com açúcar, às vezes servidos em
              um líquido, seja em seus próprios sucos ou um licor.{' '}
            </p>
          </div>
          <button>
            <FaShoppingCart size={14} color="#fff" />
          </button>
        </MenuSingle>
        <MenuSingle>
          <img src={Imageprato} alt="Foto da comida" />
          <div>
            <h4>
              Salada de fruta <span>R$ 5,00 </span>
            </h4>
            <p>
              Salada de frutas é um prato que consiste de uma combinação de
              várias frutas picadas, temperado com açúcar, às vezes servidos em
              um líquido, seja em seus próprios sucos ou um licor.{' '}
            </p>
          </div>
          <button>
            <FaShoppingCart size={14} color="#fff" />
          </button>
        </MenuSingle>
        <MenuSingle>
          <img src={Imageprato} alt="Foto da comida" />
          <div>
            <h4>
              Salada de fruta <span>R$ 5,00 </span>
            </h4>
            <p>
              Salada de frutas é um prato que consiste de uma combinação de
              várias frutas picadas, temperado com açúcar, às vezes servidos em
              um líquido, seja em seus próprios sucos ou um licor.{' '}
            </p>
          </div>
          <button>
            <FaShoppingCart size={14} color="#fff" />
          </button>
        </MenuSingle>
      </MenuGrid>
    </Wrapper>
  </>
);
}
