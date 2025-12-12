import axios from "axios"
// import { getToken } from "../utils/auth.js"
const BASE_URL = import.meta.env.VITE_API_URL
//Signup API Service
export const signUp = async (formData) => {
try {
    const res = await axios.post(BASE_URL + '/auth/register/', formData)
    return res.data
} catch (error) {
    console.log(error)
    throw error
}
}

export const signIn = async (formData) => {
    try {
        const res = await axios.post(BASE_URL + '/auth/login/', formData)
        return res.data
    } catch (error) {
        console.log(error)
        throw error
    }
}

export const signOut = async () => {
  try {
    localStorage.removeItem("token");
    return true;
  } catch (error) {
    throw error;
  }
};

export const verifyUser = async () => {
  const token = localStorage.getItem("token");
  if (token) {
    const resp = await api.get("/users/token/refresh/");
    localStorage.setItem("token", resp.data.access);
    return resp.data.user;
  }
  return false;
};