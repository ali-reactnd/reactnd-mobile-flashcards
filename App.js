import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Views from './views';

export default class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <Views style={{flex: 1}}/>
            </Provider>
        );
    }
}