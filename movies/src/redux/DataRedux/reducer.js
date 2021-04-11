import { GET_ITEMS_FAILURE, GET_ITEMS_REQUEST, GET_ITEMS_SUCCESS, POST_ITEM_FAILURE, POST_ITEM_REQUEST, POST_ITEM_SUCCESS } from "./actionType";


const initState = {
    isLoading:true,
    isError:false,
    movies:[],
    newMovie:[]
}

const reducer = (state = initState, {type,payload}) => {
    switch(type) {
        case GET_ITEMS_REQUEST:
            return {
                ...state,
            }
        case GET_ITEMS_SUCCESS:
            return {
                ...state,
                isLoading:false,
                movies:payload
            }
        case GET_ITEMS_FAILURE:
            return {
                ...state,
                isLoading:false,
                isError:true
            }
        case POST_ITEM_REQUEST:
            return {
                ...state,
            }
        case POST_ITEM_SUCCESS:
            const newMovies = [...this.state.movies,payload]
            return {
                ...state,
                isLoading:false,
                newMovie:payload,
                movies:newMovies
            }
        case POST_ITEM_FAILURE:
            return {
                ...state,
                isLoading:false,
                isError:true
            }
        default:
            return state
    }
}

export default reducer