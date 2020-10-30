import React from 'react';
import ReactDOM from 'react-dom';
import Teams from './Teams';

const getButtonText = () => {
  return 'Click on Me!'
}


const App = () => {
  return (
    <div style={{margin: '30px'}}>
      <label htmlFor="name" className="label">Enter your name</label>
      <input id="name" value="default text" />
      <button style= {{backgroundColor : 'green', color: 'white'}}>
        {getButtonText()}
      </button>
        <div className="ui comments">
              <h3 className="ui dividing header">Comments</h3>
            <Teams/>
        </div>
    </div>
  )
}


ReactDOM.render(
    <App/>,
  document.getElementById('root')
);

