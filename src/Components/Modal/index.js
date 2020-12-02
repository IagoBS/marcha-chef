import React, {
  useState,
  useEffect,
  useMemo,
  useCallback,
  useRef,
} from 'react';
import { Container, Row, Column } from '~/Components/Grid/styled';
import {
  Restaurant,
  Select,
  Background,
  ModalWrapper,
  ModalImg,
  ModalContent,
  CloseModal,
} from './styled';
import { FaFontAwesomeLogoFull, FaShoppingCart } from 'react-icons/fa';
import api from '~/services/api';
import cozinha from '~/assets/images/cozinheiros.jpeg';
import { useSpring, animated } from 'react-spring';
export default function Modal({ showModal, setShowModal }) {
  const modalRef = useRef();
  const animation = useSpring({
    config: {
      duration: 250,
    },
    opacity: showModal ? 1 : 0,
    transform: showModal ? `translateY(0%)` : `translateY(-100%)`,
  });
  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      console.log('eee')
      setShowModal(false);
    }
  };

  return (
    <>
      {showModal ? (
        <Background onClick={() => closeModal} ref={modalRef}>
          <ModalWrapper>
            <ModalImg src={cozinha} />
            <ModalContent>
              <h1>Salada de fruta</h1>
              <p>
                Bolo branco, recheio de trufas brancas com geleia de frutas
                vermelhas e mousse branca com geleia de frutas vermelhas,
                cobertura de mousse branca, raspas de chocolate branco, geleia
                de frutas vermelhas, morangos e cerejas (decorativas).
              </p>
              <small>R$ 15,41</small>
              <button type="button">
                <div>
                  <FaShoppingCart size={32} color="#fff" />
                  1
                </div>
                <span>Adicionar ao carrinho</span>
              </button>
            </ModalContent>
            <CloseModal
              aria-label="Close modal"
              onClick={() => setShowModal((prev) => !prev)}
            />
          </ModalWrapper>
        </Background>
      ) : null}
    </>
  );
}
