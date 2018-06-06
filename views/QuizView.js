import React from 'react';
import {View, Text, TouchableOpacity, Button} from 'react-native'
import {connect} from "react-redux";
import styles from '../components/styles';
import { clearLocalNotification, setLocalNotification } from "../components/Notification";

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
        this.setState({cardIDX: this.state.cardIDX+1, displayQuestion: true})
    }

    incrementCorrect = () => {
        this.setState({numCorrect: this.state.numCorrect+1});
        this.gotoNextQuestion();
    }

    displayQuestion = () => {
        const {questions, cardIDX} = this.state;
        const question = questions[cardIDX].question;
        return(
            <View style={styles.box}>
                <Text style={styles.titleWithPadding}>{question}</Text>
                <TouchableOpacity onPress={() => this.toggleDisplayMode() }>
                    <Text style={[styles.subTitleWithPadding, {color: '#3498DB'}]}>Show Answer</Text>
                </TouchableOpacity>
            </View>
        )
    }

    displayAnswer = () => {
        const {questions, cardIDX} = this.state;
        const answer = questions[cardIDX].answer;
        return(
            <View style={styles.box}>
                <Text style={styles.titleWithPadding}>{answer}</Text>
                <TouchableOpacity onPress={() => this.toggleDisplayMode() }>
                    <Text style={[styles.subTitleWithPadding, {color: '#3498DB'}]}>Show Question</Text>
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
        // User finished a quiz, so
        clearLocalNotification()
            .then(setLocalNotification) // for tomorrow

        let percentage = this.state.numCorrect*100.0/this.state.questions.length;
        return(
            <View style={styles.container}>
                <Text style={styles.titleWithPadding}>{`Your score: ${percentage}%`}</Text>
                <Button
                    onPress={() => this.restartQuiz()}
                    title="Restart Quiz"
                />
                <Text/>
                <Button
                    onPress={() => this.props.navigation.goBack()}
                    title="Back To Deck"
                    color="#A6ACAF"
                />
            </View>
        )
    }

    displayProgress = () => {
        return (
            <View style={styles.box}>
                <Text style={[styles.subTitle, {color: '#707B7C'}]}>
                    {`Card ${this.state.cardIDX+1} (out of ${this.state.questions.length} cards):`}
                </Text>
            </View>

        )
    }

    restartQuiz = () => {
        this.setState({
            displayQuestion: true,
            cardIDX: 0,
            numCorrect: 0
        });
    }

    displayButtons = () => {
        return(
            <View>
                <Button
                    onPress={() => this.incrementCorrect()}
                    title="Correct"
                    color="#2ECC71"
                />
                <Text/>
                <Button
                    onPress={() => this.gotoNextQuestion()}
                    title="Incorrect"
                    color="#FF5733"
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
                <View style={styles.container}>
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