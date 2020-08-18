import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap');
* {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
}
body {
  background: #FFF7DF;
  text-rendering: optimizeLegibility !important;
  -webkit-font-smoothing: antialiased !important;
}
body, input, button {
  font: 'Roboto', sans-serif;
}
#root {
max-width: 1200px;
padding: 0 20px 50px;
margin: 0 auto;

}
button {
  cursor: pointer;
}
`;
