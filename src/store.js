import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';

import reducer from './reducer';

// No middleware
// export default createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
// With middleware
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export default createStore(reducer, composeEnhancers(applyMiddleware(thunk)));
