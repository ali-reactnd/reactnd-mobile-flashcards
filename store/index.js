import { createStore } from 'redux';
import reducer from '../reducers';
import { saveState } from "../utils/api";

const configStore = (initialState) => {

    const store = createStore(
        reducer,
        initialState
    );

    store.subscribe(() => {
        saveState(store.getState()).then(
            () => {
                console.log("Wrote the state to AsyncStorage!");
            }
        )
    });

    return store;
};

export default configStore;