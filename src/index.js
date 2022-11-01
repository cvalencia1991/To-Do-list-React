import React from 'react';
import { createRoot } from 'react-dom/client';
import TodoContainer from './functionBased/TodoContainer';
import reportWebVitals from './reportWebVitals';
import "./functionBased/App.css"
import { BrowserRouter as Router } from "react-router-dom"

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
    <React.StrictMode>
        <Router>
            <TodoContainer />
        </Router>
    </React.StrictMode>
)

reportWebVitals();
