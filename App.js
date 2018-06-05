import React from 'react';
import { Provider } from 'react-redux';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import store from './store';

const DeckListView = ({ navigation }) => (
    <View>
        <Text>This is the Deck List view</Text>

        {

        }

        <TouchableOpacity onPress={() => navigation.navigate('DeckView')}>
            <Text>Press here for the Deck View</Text>
        </TouchableOpacity>
    </View>
);

const DeckView = () => (
    <View>
        <Text>This is the Deck view</Text>
    </View>
);


const QuizView = () => (
    <View>
        <Text>This is the Quiz view</Text>
    </View>
);

const NewDeckView = () => (
    <View>
        <Text>This is the New Deck view</Text>
    </View>
);


const NewQuestionView = () => (
    <View>
        <Text>This is the New Question view</Text>
    </View>
);

const Stack = createStackNavigator({
    Home: {
        screen: DeckListView,
        navigationOptions: {
            title: "DECKS"
        }
    },
    DeckView: {
        screen: DeckView,
        navigationOptions: {
            title: "DECK"
        }
    },
    QuizView: {
        screen: QuizView,
        navigationOptions: {
            title: "Quiz"
        }
    },
    NewDeckView: {
        screen: NewDeckView,
        navigationOptions: {
            title: "New Deck"
        }
    },
    NewQuestionView: {
        screen: NewQuestionView,
        navigationOptions: {
            title: "Add Card"
        }
    }
});

export default class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <Stack />
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
