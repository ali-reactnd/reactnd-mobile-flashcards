import React from 'react';
import { View, Text, Button, TextInput } from 'react-native'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { addDeck } from "../actions/actionCreators";

class NewDeckView extends React.Component{

    state = {
        title: ""
    }

    handleSubmit = () => {
        // TODO: key must be a camel-case version of title with no spaces
        let key = this.state.title;
        this.props.addDeck(this.state.title, key);
        this.props.navigation.goBack();
    }

    render() {
        return (
            <View>
                <Text>What is the title of your new deck?</Text>
                <TextInput
                    style={{height: 40, borderColor: 'gray', borderWidth: 1}}
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
