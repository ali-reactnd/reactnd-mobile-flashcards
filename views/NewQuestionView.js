import React from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { addCard } from "../actions/actionCreators";
import styles from '../utils/styles';

class NewQuestionView extends React.Component{

    state = {
        question: "",
        answer: ""
    };

    handleSubmit = () => {
        const key = this.props.navigation.getParam('key', 'NO-ID');
        const {question, answer} = this.state;
        this.props.addCard(key, question, answer);
        this.props.navigation.goBack();
    };

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.subTitle}>Question:</Text>
                <TextInput
                    style={[styles.box, {padding: 10}]}
                    multiline = {true}
                    numberOfLines = {5}
                    onChangeText={(text) => this.setState({question: text})}
                    value={this.state.question}
                />
                <Text style={styles.subTitle}>Answer:</Text>
                <TextInput
                    style={[styles.box, {padding: 10}]}
                    multiline = {true}
                    numberOfLines = {5}
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
};

export default connect(null, mapDispatchToProps)(NewQuestionView );