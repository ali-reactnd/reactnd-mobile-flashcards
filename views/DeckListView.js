import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native'

export const DeckListView = ({navigation}) => (
    <View>
        <Text>This is the Deck List view</Text>

        {

        }

        <TouchableOpacity onPress={() => navigation.navigate('DeckView')}>
            <Text>Press here for the Deck View</Text>
        </TouchableOpacity>
    </View>
);