import React from 'react';
import { View, Text } from 'react-native'
import { Provider } from 'react-redux';
import store from './store';
import Views from './views';
import { setLocalNotification } from "./components/Notification";
import { loadState } from "./utils/api";
import initialState from './store/initialState';

export default class App extends React.Component {

    state = {
        initialState: {},
        fetchingData: true
    };

    componentWillMount() {
        console.log("Loading Data from AsyncStorage ... ");
        loadState().then(
            (data) => {
                console.log("... Finished loading.");
                let state = initialState;
                if (data !== undefined) {
                    state = data;
                }
                this.setState({initialState: state, fetchingData: false});
            }
        )
    }

    componentDidMount() {
        setLocalNotification();
    }

    render() {

        if (this.state.fetchingData) {
            return (
                <View style={{flex: 1}}>
                    <Text> Loading Data from AsyncStorage! </Text>
                </View>
            )
        } else {
            return (
                <Provider store={store(this.state.initialState)}>
                    <Views style={{flex: 1}}/>
                </Provider>
            );
        }
    }
}