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
*:focus {
  outline: 0;
}
body {
  background-image: linear-gradient(120deg, #f6d365 0%, #fda085 100%);
  text-rendering: optimizeLegibility !important;
  -webkit-font-smoothing: antialiased !important;
}
body, input, button {
  font: 14px 'Roboto', sans-serif;
}
a {
  text-decoration: none;
}
ul {
  list-style: none;
}
#root {
max-width: 1500px;

margin: 0 auto;

}
button {
  cursor: pointer;
}
`;
