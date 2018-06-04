import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const DeckListView = () => (
    <View>
        <Text>This is the Deck List view</Text>
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

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>UdaciCards</Text>
          <DeckListView/>
          <DeckView/>
          <QuizView/>
          <NewDeckView/>
          <NewQuestionView/>
      </View>
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
