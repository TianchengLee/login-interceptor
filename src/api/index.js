import axios from "axios";

export const login = (username, password) => axios.post("/login", { username, password })

export const getUsers = (pagenum, pagesize) => axios.get("/users", { params: { pagenum, pagesize } })

// 添加请求拦截器
axios.interceptors.request.use(function (config) {
  const token = localStorage.getItem('token')
  if (token) config.headers.Authorization = token
  // 在发送请求之前做些什么
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});