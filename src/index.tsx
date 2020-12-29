import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import { DialogContexProvider } from './contexts/DialagsContext';
import { UserCoordsProvider } from './contexts/UserCoordsContext';
import GlobalStyles from './GlobalStyles';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <UserCoordsProvider>
      <DialogContexProvider>
        <App />
      </DialogContexProvider>
    </UserCoordsProvider>

    <GlobalStyles />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
