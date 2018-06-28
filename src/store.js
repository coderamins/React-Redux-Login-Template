import { createStore, applyMiddleware } from 'redux';
import root from './reducers/root';
import thunk from 'redux-thunk';

// const composeEnhancers =
//     process.env.NODE_ENV !== 'production' &&
//     window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
//         window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
//             // extensions
//         }) : compose;
//
// const enhancer = composeEnhancers(
//     applyMiddleware(thunk)
// );

const store = createStore(root, applyMiddleware(thunk));

export default store;