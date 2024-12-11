import React, { useEffect } from "react"
import { useNavigate } from "react-router-dom"
//redux
import { useSelector } from "react-redux"
//type from redux
import { RootState } from "../../../store/config/index"

interface AuthGuardProps {
  children: React.ReactNode
}

const AuthGuard: React.FC<AuthGuardProps> = ({ children }) => {
  const navigate = useNavigate()

  // get from redux
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  )

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/auth/signin")
    }
  }, [isAuthenticated])

  return isAuthenticated ? <>{children}</> : null
}

export default AuthGuard
