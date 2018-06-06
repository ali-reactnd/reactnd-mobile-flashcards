import React from 'react';
import { View, Text, TouchableOpacity, Button } from 'react-native'
import {connect} from "react-redux";

class QuizView extends React.Component {

    state = {
        questions: [],
        displayQuestion: true,
        cardIDX: 0,
        numCorrect: 0
    }

    componentWillMount() {
        const {navigation, decks} = this.props;
        const key = navigation.getParam('key', 'NO-ID');
        this.setState({questions: decks[key].questions});
    }

    gotoNextQuestion = () => {
        this.setState({cardIDX: this.state.cardIDX+1})
    }

    incrementCorrect = () => {
        this.setState({numCorrect: this.state.numCorrect+1});
        this.gotoNextQuestion();
    }

    displayQuestion = () => {
        const {questions, cardIDX} = this.state;
        const question = questions[cardIDX].question;
        return(
            <View>
                <Text>{question}</Text>
                <TouchableOpacity onPress={() => this.toggleDisplayMode() }>
                    <Text>Answer</Text>
                </TouchableOpacity>
            </View>
        )
    }

    displayAnswer = () => {
        const {questions, cardIDX} = this.state;
        const answer = questions[cardIDX].answer;
        return(
            <View>
                <Text>{answer}</Text>
                <TouchableOpacity onPress={() => this.toggleDisplayMode() }>
                    <Text>Question</Text>
                </TouchableOpacity>
            </View>
        )
    }

    toggleDisplayMode = () => {
        this.state.displayQuestion?
            this.setState({displayQuestion: false}) :
            this.setState({displayQuestion: true})
    }

    displayResult = () => {
        let percentage = this.state.numCorrect*100.0/this.state.questions.length;
        return(
            <View>
                <Text>{`Your score: %${percentage}`}</Text>
                <Button
                    onPress={() => this.props.navigation.goBack()}
                    title="Ok"
                />
            </View>
        )
    }

    displayProgress = () => {
        return <Text>{`${this.state.cardIDX+1}/${this.state.questions.length}`}</Text>
    }

    displayButtons = () => {
        return(
            <View>
                <Button
                    onPress={() => this.incrementCorrect()}
                    title="Correct"
                />
                <Button
                    onPress={() => this.gotoNextQuestion()}
                    title="Incorrect"
                />
            </View>
        )
    }

    render(){

        const numCards = this.state.questions.length;

        if (this.state.cardIDX>=numCards) {
            return this.displayResult();
        } else {
            return (
                <View>
                    {this.displayProgress()}
                    {this.state.displayQuestion ? this.displayQuestion() : this.displayAnswer()}
                    {this.displayButtons()}
                </View>
            );
        }
    }

}

const mapStateToProps = (state = {}) => {
    return {decks: {...state}};
};

export default connect(mapStateToProps, null)(QuizView);