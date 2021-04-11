import { GET_ITEMS_FAILURE, GET_ITEMS_REQUEST, GET_ITEMS_SUCCESS } from "./actionType";
import axios from "axios"

export const getItemsReq = () => ({
    type: GET_ITEMS_REQUEST
  });
  
  export const getItemsSuccess = (payload) => ({
    type: GET_ITEMS_SUCCESS,
    payload
  });
  
  export const getItemsFailure = (payload) => ({
    type: GET_ITEMS_FAILURE,
    payload
  });


  export const getItemsData = (token) => (dispatch) => {
      console.log(token)
      dispatch(getItemsReq())
      const header = `Authorization: Bearer`
    return axios({
        method:"GET",
        url:"http://localhost:2020/movie",
        headers:{
            "Authorization" : `Bearer ${token}`
        }
    })
    .then(res => {
        console.log(res)
        dispatch(getItemsSuccess(res.data))
    })
    .catch(err => {
        console.log(err)
        dispatch(getItemsFailure(err))
    })
  }