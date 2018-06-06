import React from 'react';
import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container: {
        alignItems: 'stretch',
        margin: 10
    },
    box:{
        borderRadius: 8,
        borderWidth: 2,
        borderColor: '#d6d7da',
        marginBottom: 10,
        backgroundColor: '#FFFFFF'
    },
    title: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold'
    },
    titleWithPadding: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        paddingTop: 30,
        paddingBottom: 10
    },
    subTitle:{
        textAlign: 'center'
    },
    subTitleWithPadding: {
        textAlign: 'center',
        paddingBottom: 30
    }
});


export default styles;