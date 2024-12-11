import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface AuthState {
  profile: { email: string; full_name: string } | null
  tokens: { refresh: string; access: string } | null
  isAuthenticated: boolean
}

const initialState: AuthState = {
  profile: null,
  tokens: { refresh: "", access: "" },
  isAuthenticated: false,
}

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<AuthState>) => {
      state.profile = action.payload.profile
      state.tokens = action.payload.tokens
      state.isAuthenticated = action.payload.isAuthenticated
    },
    logout: (state) => {
      ;(state.profile = null),
        (state.tokens = null),
        (state.isAuthenticated = false)
    },
  },
})

export const { login, logout } = authSlice.actions

export default authSlice.reducer
