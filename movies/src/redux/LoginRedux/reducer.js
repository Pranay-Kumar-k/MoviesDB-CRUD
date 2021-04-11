import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS,USER_LOGOUT_SUCCESS } from "./actionType";

const initState = {
    isAuth: false,
    isLoading: true,
    isError: false,
    user: [],
    token: "",
};

const reducer = (state = initState, { type, payload }) => {
    switch (type) {
        case LOGIN_REQUEST:
            return {
                ...state
            };
        case LOGIN_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isAuth: true,
                token: payload.data.token,
                user:payload.data.user
            };
        case LOGIN_FAILURE:
            return {
                ...state,
                isLoading: false,
                isError: true,
            };
        case USER_LOGOUT_SUCCESS: {
            return {
                isLoading: false,
            };
        }
        default:
            return state;
    }
};

export default reducer;
