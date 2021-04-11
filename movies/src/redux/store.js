import { applyMiddleware, combineReducers, createStore,compose } from "redux";
import thunk from "redux-thunk";
import registrationReducer from "./RegistrationRedux/reducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({registration:registrationReducer});

export const store = createStore( rootReducer, composeEnhancers( applyMiddleware(thunk) ) )