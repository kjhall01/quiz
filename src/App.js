import React, { Component } from 'react';
//import logo from './bad.png';
import logo2 from './cc.png';
import './App.css';
import RangeSliderLadder from './rangeslider_ladder';



class App extends Component {
  render () {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo2} alt='whoops'/>
          <p>Which Human Do You Vibe With Best?*</p>
          <RangeSliderLadder />
          <img src={logo2} alt='whoops'/>
          <p class='blah'>*Match calculated using R^10 Euclidean Norm of your answers & survey respondent's answers:</p>
          <p class='blah'>Vibe Percentage calculated with 100 - [your answers' distance from their answers] * 100 / [Distance From Furthest Possible Answers]</p>
          <p class='blah'>Code Available on <a class='blah' href='https://github.com/kjhall01/TK_Quiz'>my github</a></p>
          <p/>
        </header>
      </div>
    );
  }
}

export default App;
