import axios from "axios";
const SERVER_URL = `${import.meta.env.VITE_SERVER}`;

const API = axios.create({
  baseURL: SERVER_URL,
});

// Subsequent request having tokens
API.interceptors.request.use((req) => {
  if (localStorage.getItem("userData")) {
    req.headers.authorization = `Bearer ${JSON.parse(
      localStorage.getItem("token")
    )}`;
  }
  return req;
});

export const signUp = (formData) => API.post("/api/auth/signup", formData);
export const logIn = (authData) => API.post("/api/auth/login", authData);
export const verifyOtp = (data) => API.post("/api/auth/verify-otp", data);
export const resendOtp = (data) => API.post("/api/auth/login", data);

// Payment
export const getPaymentKey = () => API.get("/api/payment/get-key");
export const checkout = (data) => API.post("/api/payment/checkout", data);
export const paymentVerification = (paymentData, ID) =>
  API.post(`/api/payment/payment-verification/${ID}`, paymentData);

// Zeal Id
export const fetchZealId = (jwtToken) =>
  API.get(`/api/payment/get-zeal-id/${jwtToken}`);
