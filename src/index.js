import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import StarComponent from './StarComponent';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    {/* <StarComponent maxRating={5}/>
    <StarComponent maxRating={5} size={111} color='violet'/> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
