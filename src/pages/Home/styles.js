import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 64px;
  h1 {
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
    color: #ffc000;
  }
`;
export const Banner = styled.div`
  height: 380px;
  width: 100%;
  background: linear-gradient(
    253.58deg,
    #ffc000 1.55%,
    #ff9e00 60.2%,
    #ff8a00 95.8%
  );
  box-shadow: 0px 4px 100px rgba(198, 134, 10, 0.25);
  display: flex;
  flex-direction: column;

  flex-shrink: 1;
  h1 {
    margin-top: 68px;
    margin-left: 128px;
    font-family: Proxima Nova;
    font-size: 48px;
    line-height: 158.34%;

    color: #fff7df;
  }
`;
export const ListRestaurants = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
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
