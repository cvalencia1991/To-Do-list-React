import React from 'react';
/* import ReactDOM from 'react-dom'; */
import { createRoot } from 'react-dom/client';
import "./App.css"
/*import App from './App'; */
import TodoContainer from './components/TodoContainer';
import reportWebVitals from './reportWebVitals';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
    <TodoContainer />
)

reportWebVitals();
