import axios from "axios";
const SERVER_URL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:8181"
    : `${import.meta.env.VITE_SERVER}`;

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
export const resendOtp = (data) => API.patch("/api/auth/resend-otp", data);

// Payment
export const checkout = (data) => API.post("/api/payment/checkout", data);
export const paymentVerification = (ID) =>
  API.get(`/api/payment/payment-verification/${ID}`);

// Zeal Id
export const fetchZealId = (jwtToken) =>
  API.get(`/api/payment/get-zeal-id/${jwtToken}`);