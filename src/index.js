import React from 'react';
import ReactDOM from 'react-dom';
/* import './index.css';
import App from './App'; */
import TodoContainer from './components/TodoContainer';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <TodoContainer />
  </React.StrictMode>,
  document.getElementById("root")
)

reportWebVitals();
