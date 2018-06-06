import React from 'react';
import { View, Text, TouchableOpacity, Button } from 'react-native'
import { connect } from "react-redux";

const DeckListView = (props) => {

    let {navigation, decks} = props;

    return (
        <View>
            {
                Object.keys(decks).map( key =>  {
                    let deck = decks[key];
                    return (
                        <TouchableOpacity key={key} onPress={() =>
                            navigation.navigate('DeckView', {key: key, title: deck.title})}>
                            <Text>{deck.title}</Text>
                            <Text>{`${deck['questions'].length} Questions`}</Text>
                        </TouchableOpacity>
                    );
                })
            }
            <Button
                onPress={() => navigation.navigate('NewDeckView')}
                title="Add Deck"
            />
        </View>
    );
};

const mapStateToProps = (state = {}) => {
    return {decks: {...state}};
};

export default connect(mapStateToProps, null)(DeckListView);