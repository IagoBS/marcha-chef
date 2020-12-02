import React from 'react';
import {
  SideBar,
  SideBarHeader,
  SideBarMenu,
  Content,
  SearchItem,
} from './styles';
import {
  FaHome,
  FaHamburger,
  FaMugHot,
  FaBeer,
  FaSearch,
  FaPeopleCarry,
  FaHandPointer
} from 'react-icons/fa';

import logo from '~/assets/images/logo.svg';
function DashBoard() {
  return (
    <>
      <SideBar>
        <SideBarHeader>
          <img src={logo} alt="logo" />
          <h3>
            <span>MarchaChef</span>
          </h3>
        </SideBarHeader>
        <SideBarMenu>
          <ul>
            <li>
              <a href="">
                <FaHome size={12} color="#fff" /> Home
              </a>
            </li>
            <li>
              <a href="">
                <FaHamburger size={12} color="#fff" /> Restaurant
              </a>
            </li>
            <li>
              <a href="">
                <FaBeer size={12} color="#fff" /> Receitas
              </a>
            </li>
            <li>
              <a href="">
                <FaMugHot size={12} color="#fff" /> Afiliados
              </a>
            </li>
            <li>
              <a href="">
                <FaPeopleCarry size={12} color="#fff" /> Garçom
              </a>
            </li>
            <li>
              <a href="">
          <FaHandPointer size={12} color="#fff" /> Comanda
              </a>
            </li>
          </ul>
        </SideBarMenu>
      </SideBar>
      <Content>
        <div>
          <SearchItem>
            <button type="button">
              <FaSearch size={16} color="#fff" />
            </button>
            <input type="search" placeholder="Pesquisar"></input>
          </SearchItem>
        </div>
        <main>
          
        </main>
      </Content>
    </>
  );
}

export default DashBoard;
