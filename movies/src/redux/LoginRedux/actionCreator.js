import {LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, USER_LOGOUT_SUCCESS} from "./actionType"
import axios from "axios"

export const loginRequest = () => ({
  type: LOGIN_REQUEST
});

export const loginSuccess = (payload) => ({
  type: LOGIN_SUCCESS,
  payload
});

export const loginFailure = () => ({
  type: LOGIN_FAILURE,
});

export const loginUser = ({ phone, password }) => (dispatch) => {
  dispatch(loginRequest());
  return axios({
    method: "POST",
    url: "http://localhost:2020/account/login",
    headers:{
      'Content-Type':"application/json"
    },
    data: {
      phone,
      password
    }
  })
    .then((res) => {
      dispatch(loginSuccess(res.data));
      console.log(res.data);
    })
    .catch((err) => {
        console.log(err)
      dispatch(loginFailure());
    });
};

export const logoutUser= () => {
  return{
      type:USER_LOGOUT_SUCCESS
  }
}
