import React from 'react';
import { createStackNavigator } from "react-navigation";
import DeckView from "./DeckView";
import DeckListView from "./DeckListView";
import { QuizView } from "./QuizView";
import NewDeckView from "./NewDeckView";
import { NewQuestionView } from "./NewQuestionView";

const Stack = createStackNavigator({
    Home: {
        screen: DeckListView,
        navigationOptions: {
            title: "DECKS"
        }
    },
    DeckView: {
        screen: DeckView,

        navigationOptions: ({ navigation }) => ({
            title: `${navigation.state.params.title}`,
        }),

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

export default Stack;