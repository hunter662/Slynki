import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles/LoadingScreen.css';
import './styles/ContentRules.css';
import './styles/ContentTab.css';
import './styles/AIModeration.css';
import './styles/SettingsPanel.css';
import './styles/Recommendations.css';
import './styles/PlayButton.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);