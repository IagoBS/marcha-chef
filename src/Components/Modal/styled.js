import styled from 'styled-components';
import { FaCloudscale } from 'react-icons/fa';
export const Background = styled.div`
  width: 100%;
  height: 100%;

  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const ModalWrapper = styled.div`
  width: 700px;
  height: auto;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.1);
  background: #fff;
  color: #000;
  display: grid;
  justify-content: center;
  align-items: center;
  text-align: center;
  grid-template-columns: 1fr 1fr;
  position: relative;
  z-index: 10;
  border-radius: 10px;
`;
export const ModalImg = styled.img`
         display: block;
         height: auto;

         width: 100%;
         
         overflow: hidden;
         content: '';
         z-index: -1;
         border-radius: 4px;
         max-width: 100%;
       `;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1.8;
  color: #5c5c5c;

  h1 {
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
    color: #5c5c5c;
    font-size: 2.2rem;
    margin-top: 8px;
  }
  p {
    font-size: 1.6rem;
    color: #5c5c5c;
    margin-top: 16px;
  }
  small {
    display: flex;
    align-items: center;
    font-size: 2.5rem;
    justify-content: start;
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
      padding: 24px;
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
`;
export const CustomizeSelect = styled.div`
  width: 207px;
  height: 34px;
  overflow: hidden;
  background: transparent;
  border-radius: 3px;
  select {
    background: transparent;
    width: 233px;
    color: #474747;
    padding: 8px 5px 5px 5px;
    font-size: 12px;
    line-height: 1;
    border: 0;
    border-radius: 0;
    height: 34px;
    option {
      height: 30px;
      border: 1px solid #cbcbcb;
      padding-left: 17px;
      padding-top: 12px;
    }
  }
`;
export const CloseModal = styled(FaCloudscale)`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10;
`;
