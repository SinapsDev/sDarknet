import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store';

import App from './Containers/App/App';
import { EventListener } from "./Nui"


ReactDOM.render(
    <Provider store={store}>
        <App/>
        <EventListener/>
    </Provider>,
    document.getElementById('app'),
);