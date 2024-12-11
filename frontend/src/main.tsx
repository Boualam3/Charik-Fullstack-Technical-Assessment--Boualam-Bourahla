import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import App from "./App.tsx"
import "./index.css"
//redux
import { store } from "./store"
import { Provider } from "react-redux"
import { PersistGate } from "reduxjs-toolkit-persist/integration/react"
import { persistor } from "./store/config/index.ts"
//react-query
import {
  QueryClient,
  QueryClientProvider,
  QueryErrorResetBoundary,
} from "@tanstack/react-query"
//Toast
import { Toaster } from "sonner"

//Mui
import MyThemeProvider from "./theme/MyThemeProvider.tsx"
//compoents

import ErrorBoundary from "./utility/errorBoundary.tsx"

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0,
      suspense: true,
    },
  },
})

createRoot(document.getElementById("root")!).render(
  <ErrorBoundary>
    <StrictMode>
      <MyThemeProvider>
        <Provider store={store}>
          <PersistGate persistor={persistor}>
            <QueryClientProvider client={queryClient}>
              <QueryErrorResetBoundary>
                <Toaster richColors position="bottom-left" />
                <App />
              </QueryErrorResetBoundary>
            </QueryClientProvider>
          </PersistGate>
        </Provider>
      </MyThemeProvider>
    </StrictMode>
  </ErrorBoundary>
)
