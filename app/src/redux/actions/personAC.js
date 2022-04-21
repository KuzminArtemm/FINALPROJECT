import { axiosInstance } from "../../config/axios";
import { SIGN_IN } from "../types/personType";

export const signIn = (person) => ({
  type: SIGN_IN,
  payload: person,
});

export const signInQuery =
  ({ email, password, cb }) =>
  async (dispatch) => {
    const response = await axiosInstance.post("signin", {
      email,
      password,
    });

    const person = response.data;

    dispatch(
      signIn({
        ...person.data,
        token: person.token,
      })
    );

    typeof cb === 'function' && cb();
  };
