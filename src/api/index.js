import axios from axios
const SERVER_URL = "http://localhost:8181"

const API = axios.create({
    baseURL : SERVER_URL
})

// API Interceptors to set headers 

export const signUp = (authData) =>API.post("/api/auth/signup", authData)
export const logIn = (authData)=>API.post("/api/auth/login", authData)
export const verifyOtp = (data)=>API.post("/api/auth/verify-otp", data); 
export const resendOtp = (data)=>API.post("/api/auth/login", data);