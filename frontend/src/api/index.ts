import axios from "axios"
import { store } from "../store"

const prod_url = import.meta.env.VITE_API_BASE_URL

export const base_url = prod_url || "http://localhost:800"

const API = axios.create({
  baseURL: base_url + "/api",
  headers: {
    "Content-Type": "application/json",
  },
})
console.log("log url : ", import.meta.env.VITE_API_BASE_URL)
API.interceptors.request.use(
  (config) => {
    const token = store.getState().auth.tokens.access
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

export const fetchContacts = async () => {
  const response = await API.get("/crm/contacts/")
  return response.data.contacts
}

export default API
