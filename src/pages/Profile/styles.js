import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 600px;
  margin: 50px auto;

  form {
    display: flex;
    flex-direction: column;
    margin-top: 32px;
    hr {
      border: 0;
      height: 1px;
      background: rgba(255, 255, 255, 0.2);
      margin: 10px 0px 20px;
    }
    input {
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
    span {
      color: '#F64C75';
      align-self: center;
      margin: 0 0 10px;
      font-weight: bold;
      font-size: 16px;
    }
    button {
      margin: 5px 0 0;
      height: 44px;
      background: linear-gradient(253.58deg, #ffc000 1.55%, #ff8a00 95.8%);
      color: rgba(255, 255, 255, 0.7);
      border-radius: 4px;
      font-weight: bold;
      font-size: 16px;
      transition: background 0.2;
      &:hover {
        background: ${darken(0.03, '#ffc000')};
      }
    }
    a {
      color: #fff;
      margin-top: 15px;
      font-size: 16px;
      opacity: 0.8;
      &:hover {
        opacity: 1;
      }
    }
  }
  > button {
    width: 100%;
    margin: 5px 0 0;
    height: 44px;
    background: red;
    color: #fff;
    border-radius: 4px;
    font-weight: bold;
    font-size: 16px;
    transition: background 0.2;
    &:hover {
      background: ${darken(0.09, 'red')};
    }
  }
`;
