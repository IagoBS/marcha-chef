import styled from 'styled-components';
import { Link } from 'react-router-dom';
export const Container = styled.div`
  width: 100%;
  max-width: 1500px;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto; /* 1 */
  margin-left: auto; /* 1 */
  box-sizing: border-box;
  &:before,
  &:after {
    content: '';
    display: table;
  }
  &:after {
    clear: both;
  }
`;
export const Row = styled.div`
  width: 100%;
  height: auto;
  float: left;
  &:before,
  &:after {
    content: '';
    display: table;
  }
  &:after {
    clear: both;
  }
`;
export const Column = styled.div`
float: left;
position: relative;
min-height: 1px;
box-sizing: border-box;
width: 100%;
@media only screen and (max-width: 767) {
  width: ${props => (props.grid ? props.grid /12*100 : '8:33')}%;
}
`
