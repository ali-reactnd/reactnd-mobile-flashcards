import React from 'react';
import { View, Text, Button } from 'react-native';
import { connect } from "react-redux";
import styles from '../utils/styles';

const DeckView = (props) => {

    let {navigation, decks} = props;
    const key = navigation.getParam('key', 'NO-ID');
    const deck = decks[key];

    return (
        <View style={styles.container}>
            <View style={styles.box}>
                <Text style={styles.titleWithPadding}>{deck.title}</Text>
                <Text style={styles.subTitleWithPadding}>
                    {`${deck['questions'].length} Questions`}
                </Text>
            </View>
            <Button
                onPress={() => navigation.navigate('NewQuestionView', {key: key})}
                title="Add Card"
            />
            <Text/>
            <Button
                onPress={() => navigation.navigate('QuizView', {key: key})}
                title="Start Quiz"
                color="#A6ACAF"
                disabled = {!deck['questions'].length}
            />
        </View>
    );

};

const mapStateToProps = (state = {}) => {
    return {decks: {...state}};
};

export default connect(mapStateToProps, null)(DeckView);