import React from 'react';
import { View, Text, Button, TextInput } from 'react-native'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { addCard } from "../actions/actionCreators";

class NewQuestionView extends React.Component{

    state = {
        question: "",
        answer: ""
    }

    handleSubmit = () => {
        const key = this.props.navigation.getParam('key', 'NO-ID');
        const {question, answer} = this.state;
        this.props.addCard(key, question, answer);
        this.props.navigation.goBack();
    }

    render() {
        return (
            <View>
                <Text>Question:</Text>
                <TextInput
                    style={{borderColor: 'gray', borderWidth: 1}}
                    multiline = {true}
                    numberOfLines = {4}
                    onChangeText={(text) => this.setState({question: text})}
                    value={this.state.question}
                />
                <Text>Answer:</Text>
                <TextInput
                    style={{borderColor: 'gray', borderWidth: 1}}
                    multiline = {true}
                    numberOfLines = {4}
                    onChangeText={(text) => this.setState({answer: text})}
                    value={this.state.answer}
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
    return bindActionCreators( {addCard}, dispatch);
}

export default connect(null, mapDispatchToProps)(NewQuestionView );