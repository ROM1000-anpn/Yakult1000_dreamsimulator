import React, { useState } from 'react';
import futon_image from './img/futon_moufu.png';
import sad_image from './img/sleep_cry_woman.png';
import './simulator.css';
import './main.js';
import { predicate, subject } from './main.js';

function Simulator() {
  const [startText, resetText] = useState(true);

  const btnClick = () => {
    resetText(!startText);
  }
  
    let random_subject = Math.floor(Math.random() * subject.length);
    let random_predicate = Math.floor(Math.random() * predicate.length);

  return(
    <div id="simulator">
      <div className="result">
        <p id="subject">{startText ? '　' : subject[random_subject]}</p>
        <p id="predicate">{startText ? '　' : predicate[random_predicate]}</p>
      </div>
      <button id="button" data-state="start" onClick={btnClick}>{startText ? "悪夢を予想する" : "やりなおし"}</button>
      <img src={startText ? futon_image : sad_image} id="main_image" />
    </div>
  )
};

export default Simulator;
