import { useRoutes } from "react-router-dom"
import { authRoutes } from "./auth"
import { dashboardRoutes } from "./dashboard"
import NotFound from "../components/shared-pages/NotFound"

export default function Router() {
  return useRoutes([
    // Auth routes
    ...authRoutes,
    // Dashboard routes
    ...dashboardRoutes,

    // No match 404
    { path: "*", element: <NotFound /> },
  ])
}
