import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./index.css"
import Header from "./Header"
import Car from "./states";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
    <App />
    <Header />
    <Car />
    </>
);


