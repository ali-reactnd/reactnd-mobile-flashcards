import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Views from './views';
import { setLocalNotification } from "./components/Notification";

export default class App extends React.Component {

    componentDidMount() {
        setLocalNotification();
    }

    render() {
        return (
            <Provider store={store}>
                <Views style={{flex: 1}}/>
            </Provider>
        );
    }
}