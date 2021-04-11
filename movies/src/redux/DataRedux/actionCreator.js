import { GET_ITEMS_FAILURE, GET_ITEMS_REQUEST, GET_ITEMS_SUCCESS, POST_ITEM_FAILURE, POST_ITEM_REQUEST, POST_ITEM_SUCCESS } from "./actionType";
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


  export const postItemReq = () => ({
    type: POST_ITEM_REQUEST
  });
  
  export const postItemSuccess = (payload) => ({
    type: POST_ITEM_SUCCESS,
    payload
  });
  
  export const postItemFailure = () => ({
    type: POST_ITEM_FAILURE,
  });


  export const postMovieData = (payload,token) => (dispatch) => {
      console.log(payload,token)
    dispatch(postItemReq())
    return axios({
        method:"POST",
        url:"http://localhost:2020/movie",
        headers:{
            "Authorization" : `Bearer ${token}`
        },
        data:{
            ...payload
        }
    })
    .then((res) => {
        console.log(res)
        dispatch(postItemSuccess(res.data))
        dispatch(getItemsData(token))
    })
    .catch(err => {
        console.log(err)
        dispatch(postItemFailure())
    })
  } 


  export const updateMovie = (_id,payload,token) => (dispatch) => {
      console.log(_id,payload,token)
      return axios({
          method:"PUT",
          url:`http://localhost:2020/movie/${_id}`,
          headers:{
            "Authorization" : `Bearer ${token}`
          },
          data:{
                ...payload
          }
      })
      .then((res) => {
          console.log(res)
          dispatch(getItemsData(token))
      })
      .catch(err => {
          console.log(err)
      })
  }


  export const deleteMovie = (_id,token) => (dispatch) => {
    console.log(_id,token)
    return axios({
        method:"DELETE",
        url:`http://localhost:2020/movie/${_id}`,
        headers:{
          "Authorization" : `Bearer ${token}`
        }
    })
    .then((res) => {
        console.log(res)
        dispatch(getItemsData(token))
    })
    .catch(err => {
        console.log(err)
    })
}
