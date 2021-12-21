import React from "react";
import App from './components/App';
import reactDom from "react-dom";
import './index.css';


let root = document.querySelector('#root');
reactDom.render(<App />, root);
