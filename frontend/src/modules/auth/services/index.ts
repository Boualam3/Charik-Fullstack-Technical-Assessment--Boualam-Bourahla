import { base_url } from "../../../api"
import { authEndpoints } from "../../../api/endpoints"
/* import jwt from "jwt-decode"; */
import axios from "axios"

export const handleRegister = async (registerBody: {
  full_name: string
  email: string
  password: string
}): Promise<any> => {
  try {
    const response = await axios.post(
      `${base_url}${authEndpoints.register}`,
      registerBody
    )
    if (response?.status === 201) {
      return {
        success: true,
      }
    }
  } catch (error: any) {
    if (error?.response.status === 400) {
      throw new Error(error?.response?.data?.errors?.[0])
    } else {
      // Handle potentially network issues.
      throw new Error("An unexpected error occurred")
    }
  }
}

export const handleLogin = async (credentials: {
  email: string
  password: string
}): Promise<any> => {
  try {
    const response = await axios.post(
      `${base_url}${authEndpoints.login}`,
      credentials
    )
    if (response.status === 200) {
      return response.data
    }
  } catch (error: any) {
    if (error?.response.status === 401) {
      // Handle the 400 error from MirageJS
      throw new Error(error?.response?.data?.errors?.[0])
    } else {
      // Handle potentially network issues.
      throw new Error("An unexpected error occurred")
    }
  }
}
