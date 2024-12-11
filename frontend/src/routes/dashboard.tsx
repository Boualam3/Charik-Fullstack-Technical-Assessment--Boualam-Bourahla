import MainLayout from "../modules/dahsboard/shared/layout/MainLayout"
import AuthGuard from "../modules/auth/guards/AuthGuard"
import { lazy, Suspense } from "react"
import Deals from "../modules/dahsboard/pages/deals"
import Contacts from "../modules/dahsboard/pages/contacts"

import TableSkeleton from "../components/shared-pages/TableSkeleton"

const About = lazy(() => import("../modules/dahsboard/pages/about"))

export const dashboardRoutes = [
  {
    path: "/",
    element: (
      <AuthGuard>
        <MainLayout />
      </AuthGuard>
    ),
    children: [
      {
        path: "deals",
        element: (
          <Suspense fallback={<TableSkeleton />}>
            <Deals />
          </Suspense>
        ),
        index: true,
      },
      {
        path: "contacts",
        element: (
          <Suspense fallback={<TableSkeleton />}>
            <Contacts />
          </Suspense>
        ),
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
]
