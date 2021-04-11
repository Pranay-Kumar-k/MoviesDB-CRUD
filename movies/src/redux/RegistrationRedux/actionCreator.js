import axios from "axios";
import {
  REGISTRATION_FAILURE,
  REGISTRATION_REQUEST,
  REGISTRATION_SUCCESS
} from "./actionType";

export const registrationReq = () => ({
  type: REGISTRATION_REQUEST
});

export const registrationSuccess = (payload) => ({
  type: REGISTRATION_SUCCESS,
  payload
});

export const registrationFailure = () => ({
  type: REGISTRATION_FAILURE,
});

export const registerUser = ({phone,password,}) => (dispatch) => {
  dispatch(registrationReq());
  return axios({
    method: "POST",
    url: "http://localhost:2020/account/register",
    headers:{
      "Content-Type":"application/json"
    },
    data: {
      phone,
      password
    }
  })
    .then((res) => {
      console.log(res);
      dispatch(registrationSuccess({ res }));
    })
    .catch((err) => {
      console.log(err);
      dispatch(registrationFailure());
    });
};
