import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import HatchStore from './stores/HatchStore';
import {Provider} from "mobx-react";

const Root = (
    <Provider HatchStore={HatchStore}>
        <App />
    </Provider>
);

ReactDOM.render(Root, document.getElementById('root'));

