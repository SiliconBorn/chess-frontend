/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosResponse } from "axios";
import { loginUrl, registerUrl } from "../react-query/endpoints";

export interface AuthCred{
  username: string;
  password: string;
}

export type AuthSuccessResponse = {
  message: string;
  success: boolean;
  token: string;
};
export type AuthErrResponse = Omit<AuthSuccessResponse, "token">;

  async function login({username, password }: AuthCred):Promise<AuthSuccessResponse> {
  try {
    const response = await axios.post<AuthSuccessResponse>(loginUrl, {username,password});
    return response.data;
  } catch (error) {
    console.log(error)
    throw error
  }
}

 const register = async (
  registerCred: AuthCred
): Promise<AxiosResponse> => {
  return await axios.post(registerUrl, registerCred);
};


const authService = {
  login,
  register
};
export default authService;