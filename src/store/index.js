import { compose, createStore, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise';
import { appReducers } from './reducers';


const ReduxStore = () => {
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__ || compose;
    const store = createStore(appReducers,
        composeEnhancers(applyMiddleware(promiseMiddleware)))

    return store;
}

export default ReduxStore;