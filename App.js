import React from 'react';
import { Provider } from 'react-redux';
import { StyleSheet } from 'react-native';
import store from './store';
import Views from './views';

export default class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <Views />
            </Provider>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
