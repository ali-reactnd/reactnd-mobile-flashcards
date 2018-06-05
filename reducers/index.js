import { ADD_CARD, ADD_DECK } from '../actions/actionTypes';


const decks = (state={}, action) => {

    switch(action.type) {

        case ADD_DECK:
            return (
                {...state, [action.key]: {title: action.title, questions: []} }
            );

        case ADD_CARD:
            const deck = state[action.deckKey];
            return (
                {...state,
                    [action.deckKey]: {
                        title: deck.title,
                        questions: [
                            ...deck.questions,
                            {question: action.question, answer: action.answer}
                        ]
                    }
                }
            );

        default:
            return state;
    }

};

export default decks;