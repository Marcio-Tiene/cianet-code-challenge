import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
html{
  --primary-color:#148484; 
  --bg-color:#faf9f8;
  --text-in-primary:#fff;
  --text-in-bg:#52636c;
}


#root{
  

 
height:100%;
width:100%;

}
* { 
  margin:0;
  padding:0;
  box-sizing: border-box;
}

body {
   
height:100vh;
width:100vw;
  padding: 10px;

  color: var(--text-in-bg);
  background:var(--bg-color);
  
  

}

body, input, button, textearea {
  font: 600 1.125rem Nunito, sans-serif;
  -webkit-font-smoothing: antialiased;

}

`;

export default GlobalStyles;
