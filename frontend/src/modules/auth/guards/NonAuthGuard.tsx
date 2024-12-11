import React, { useEffect } from "react"
import { useNavigate } from "react-router-dom"
//redux
import { useSelector } from "react-redux"
//type from redux
import { RootState } from "../../../store/config/index"

interface NonAuthGuardProps {
  children: React.ReactNode
}

const NonAuthGuard: React.FC<NonAuthGuardProps> = ({ children }) => {
  const navigate = useNavigate()
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  )

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/")
    }
  }, [isAuthenticated, navigate])

  return !isAuthenticated ? <>{children}</> : null
}

export default NonAuthGuard
