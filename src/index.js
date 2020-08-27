import 'animate.css/animate.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/header.min.css';
import './assets/css/loader.min.css';
import './assets/css/misc.min.css';
import './assets/css/projects.min.css';
import './assets/css/services.min.css';
import './assets/css/clients.min.css';
import './assets/css/footer.min.css';
import './assets/css/common.min.css';
import './assets/css/contact.min.css';

import * as serviceWorker from './serviceWorker';

import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(<App />,document.getElementById('root'));


serviceWorker.register();