import React from 'react';
import { View, Text, Button, TextInput, Alert } from 'react-native'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { addDeck } from "../actions/actionCreators";
import styles from '../components/styles';

class NewDeckView extends React.Component{

    state = {
        title: ""
    }

    isTitleValid = (title) => {
        return !title || !title.trim();
    }

    displayAlert = () => {
        return (
            Alert.alert(
                'Title is missing!',
                'Please enter a title for the new deck.',
                [
                    {text: 'OK', onPress: () => console.log('OK Pressed')},
                ],
                { cancelable: false }
            )
        )
    }

    handleSubmit = () => {
        // TODO: key must be a camel-case version of title with no spaces.
        let title = this.state.title;
        if (!this.isTitleValid(title)){
            this.displayAlert();
            return;
        }
        let key = this.state.title;
        this.props.addDeck(title, key);
        this.props.navigation.navigate('DeckView', {key: key, title: title});
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.subTitleWithPadding}>What is the title of your new deck?</Text>
                <TextInput
                    style={[styles.box, {padding: 10}]}
                    onChangeText={(text) => this.setState({title: text})}
                    value={this.state.title}
                />
                <Button
                    onPress={()=>{this.handleSubmit()}}
                    title="Submit"
                />
            </View>
        );
    }
}


const mapDispatchToProps = (dispatch) => {
    return bindActionCreators( {addDeck}, dispatch);
}


export default connect(null, mapDispatchToProps)(NewDeckView);
