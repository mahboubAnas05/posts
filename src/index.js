import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// =================================================


//======= create the store (la3ba) ==========
const root = ReactDOM.createRoot(document.getElementById('root')); // equivalance avec innerHTML
root.render(
  <React.StrictMode>
      <App/>
  </React.StrictMode>
);

// If you want to start measuring performpance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();



/*

const store = legacy_createStore(reducer)
<React.StrictMode>
<App/>
</React.StrictMode>

<Provider store={store}>
<App/>
</Provider>













<Provider store={storeOfProduct}>
</Provider>
*/