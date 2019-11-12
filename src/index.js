import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import HatchStore from './stores/HatchStore';

ReactDOM.render(<App Provider={HatchStore} />, document.getElementById('root'));

