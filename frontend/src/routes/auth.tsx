import { lazy, Suspense } from "react"
import { Outlet } from "react-router-dom"
import NonAuthGuard from "../modules/auth/guards/NonAuthGuard"
import SplashScreen from "../components/shared-pages/splash-screen"

const Login = lazy(() => import("../modules/auth/pages/Login"))
const Register = lazy(() => import("../modules/auth/pages/Register"))

export const authRoutes = [
  {
    path: "auth",
    element: (
      <NonAuthGuard>
        <Outlet />
      </NonAuthGuard>
    ),
    children: [
      {
        path: "signin",
        element: (
          <Suspense fallback={<SplashScreen />}>
            <Login />
          </Suspense>
        ),
      },
      {
        path: "signup",
        element: (
          <Suspense fallback={<SplashScreen />}>
            <Register />
          </Suspense>
        ),
      },
    ],
  },
]
