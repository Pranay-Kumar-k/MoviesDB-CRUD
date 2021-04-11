import { applyMiddleware, combineReducers, createStore,compose } from "redux";
import thunk from "redux-thunk";
import registrationReducer from "./RegistrationRedux/reducer";
import loginReducer from "./LoginRedux/reducer";
import moviesReducer from "./DataRedux/reducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({registration:registrationReducer,login:loginReducer,movies:moviesReducer});

export const store = createStore( rootReducer, composeEnhancers( applyMiddleware(thunk) ) )