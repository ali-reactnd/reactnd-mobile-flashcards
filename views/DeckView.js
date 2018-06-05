import React from 'react';
import { View, Text, Button } from 'react-native'
import { connect } from "react-redux";

const DeckView = (props) => {

    let {navigation, decks} = props;
    const key = navigation.getParam('key', 'NO-ID');
    const deck = decks[key];

    return (
        <View>
            <Text>{deck.title}</Text>
            <Text>{`${deck['questions'].length} Questions`}</Text>
            <Button
                onPress={() => navigation.navigate('NewQuestionView', {key: key})}
                title="Add Card"
            />
            <Button
                onPress={() => navigation.navigate('QuizView', {key: key})}
                title="Start Quiz"
            />
        </View>
    );

};


const mapStateToProps = (state = {}) => {
    return {decks: {...state}};
};

export default connect(mapStateToProps, null)(DeckView);