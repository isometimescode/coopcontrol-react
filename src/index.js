import React from 'react';
import ReactDOM from 'react-dom';
import MainMenu from './MainMenu';
import App from './App';
import 'semantic-ui-css/semantic.min.css';

ReactDOM.render(<MainMenu />, document.getElementById('mainmenu'));
ReactDOM.render(<App />, document.getElementById('root'));
