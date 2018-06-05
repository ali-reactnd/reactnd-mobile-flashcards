import { ADD_CARD, ADD_DECK } from './actionTypes';

export const addDeck = (title, key) => {
    return ({
        type: ADD_DECK,
        title: title,
        key: key
    })
};

export const addCard = ({deckKey, question, answer}) => {
    return ({
        type: ADD_CARD,
        deckKey: deckKey,
        question: question,
        answer: answer
    })
};

