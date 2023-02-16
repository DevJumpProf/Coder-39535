import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

/* const delay = 3000;
setTimeout(miFuncion,delay);
function miFuncion(){
  alert ( "pasaron 3 segundos")
}
 */
/* const delay = 3000;
setInterval(miFuncion,delay);
function miFuncion(){
  alert ( "se ejecuta cada 3 segundos")
}
 */

/* const delay = 3000;
const miIntervalo= setInterval(miFuncion,delay);
function miFuncion(){
  alert ( "se ejecuta repetido")
}
clearInterval(miIntervalo) */


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

<App/>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
