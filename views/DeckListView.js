import React from 'react';
import { View, Text, TouchableOpacity, Button } from 'react-native';
import { connect } from "react-redux";
import styles from '../utils/styles';

const DeckListView = (props) => {

    let {navigation, decks} = props;

    return (
        <View style={styles.container}>
            {
                Object.keys(decks).map( key =>  {
                    let deck = decks[key];
                    return (
                        <TouchableOpacity style={styles.box} key={key} onPress={() =>
                            navigation.navigate('DeckView', {key: key, title: deck.title})}>
                            <Text style={styles.title}>{deck.title}</Text>
                            <Text style={styles.subTitle}>{`${deck['questions'].length} Questions`}</Text>
                        </TouchableOpacity>
                    );
                })
            }
            <View>
                <Button
                    onPress={() => navigation.navigate('NewDeckView')}
                    title="Add Deck"
                />
            </View>
        </View>
    );
};



const mapStateToProps = (state = {}) => {
    return {decks: {...state}};
};

export default connect(mapStateToProps, null)(DeckListView);