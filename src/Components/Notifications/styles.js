import styled, { css } from 'styled-components';
import PerfectScrollBar from 'react-perfect-scrollbar';

export const Container = styled.div`
  position: relative;
`;
export const Badge = styled.button`
  background: none;
  border: 0;
  position: relative;
  margin-left: 16px;
  ${(props) =>
    props.hasonRead &&
    css`
      &::after {
        position: absolute;
        right: 0;
        top: 8;
        width: 8px;
        height: 8px;
        background: #ff892e;
        content: '';
        border-radius: 90%;
      }
    `}
`;
export const NotificationsList = styled.div`
  position: absolute;
  width: 260px;
  left: 50%-130px;
  top: 100%+30px;
  background: rgba(0, 0, 0, 0.4);
  border-radius: 4px;
  padding: 15px 5px;
  display: ${(props) => (props.visible ? 'block' : 'none')};

  &::before {
    content: '';
    position: absolute;
    left: calc(50%-30px);
    top: -20px;
    width: 0;
    height: 0;
    border-left: 20px solid transparent;
    border-right: 20px solid transparent;
    border-bottom: 20px solid rgba(0, 0, 0, 0.3);
  }
`;
export const Notification = styled.div`
  color: #fff;
  & + div {
    margin-top: 15px;
    padding-top: 15px;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
  }
  p {
    font-size: 12px;
    line-height: 18px;
  }
  time {
    display: block;
    font-size: 12px;
    opacity: 0.6;
    margin-bottom: 5px;
  }
  button {
    font-size: 12px;
    background: none;
    color: #ff8a00;
    padding: 0 5px;
    margin: 0 5px;

    border-radius: 4px;
  }
  ${(props) =>
    props.unread &&
    css`
      &::after {
        content: '';
        display: inline-block;
        width: 5px;
        height: 6px;
        background: #ff892e;
        border-radius: 50%;
        margin-left: 10px;
      }
    `}
`;
export const Scroll = styled(PerfectScrollBar)`
  max-height: 260px;
  padding: 5px 15px;
`;
