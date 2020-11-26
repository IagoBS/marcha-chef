import { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';
import 'react-perfect-scrollbar/dist/css/styles.css';

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Parisienne&display=swap');
* {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;

}

body {
  background-color: #f6d365;
  background-image: linear-gradient(120deg, #f6d365 0%, #fda085 100%);
  background-size: cover;
  height: 100vh;
  font-size: 14px;
  text-rendering: optimizeLegibility !important;
  -webkit-font-smoothing: antialiased !important;
}
html {
  font-size: 62.5%;
}
body {
  font-size: 1.6rem;
}

a {
text-decoration: none;
}
ul {
list-style: none;
}
button {
cursor: pointer;
}
main {
  min-height: calc(100vh - 100px - 180px);
}

#root {
margin: 0 auto;
font-size: 63.5%;

}

`;
