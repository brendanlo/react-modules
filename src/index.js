// import React from 'react';
// import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import foodArray from './foods';
import { choice, remove } from './helper';


let randomFruit = choice(foodArray);
console.log(`I'd like one ${randomFruit}, please.`);
console.log(`Here you go: ${randomFruit}`);
console.log(`Delicious! Mat I have another?`);
remove(foodArray, randomFruit);
console.log(`I'm sorry, we're all out. We have ${foodArray.length}`);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
