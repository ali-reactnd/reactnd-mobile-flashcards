import React from 'react';
import { View, Text, Button, TextInput } from 'react-native'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { addDeck } from "../actions/actionCreators";
import styles from '../components/styles';

class NewDeckView extends React.Component{

    state = {
        title: ""
    }

    handleSubmit = () => {
        // TODO: key must be a camel-case version of title with no spaces.
        // TODO: make sure title is not empty.
        let title = this.state.title;
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
