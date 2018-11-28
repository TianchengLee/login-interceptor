import axios from "axios";

export const login = (username, password) => axios.post("/login", { username, password })

export const getUsers = (token, pagenum, pagesize) => axios.get("/users", { headers: { Authorization: token }, params: { pagenum, pagesize } })