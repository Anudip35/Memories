import { AUTH } from "../constants/actionTypes";
import * as api from "../api/index";

export const signin = (formData, navigate) => async (dispatch) => {
  try {
    //log in the user
    const { data } = await api.signin(formData);

    dispatch({ type: AUTH, data });

    navigate("/");
  } catch (error) {
    console.log(error);
  }
};

export const signup = (formData, navigate) => async (dispatch) => {
  try {
    //sign up the user
    const { data } = await api.signup(formData);

    dispatch({ type: AUTH, data });

    navigate("/");
  } catch (error) {
    console.log(error);
  }
};
