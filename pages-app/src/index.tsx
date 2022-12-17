import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import MainNav from './components/MainNav'
import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <MainNav />
);

reportWebVitals();
