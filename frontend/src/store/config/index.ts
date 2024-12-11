import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from "@reduxjs/toolkit"
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  persistStore,
} from "reduxjs-toolkit-persist"
import storage from "redux-persist/lib/storage"
import hardSet from "redux-persist/lib/stateReconciler/hardSet"

//slices
import authSlice from "../slices/auth"
// import contactSlice from "../slices/contacts"
import menuSlice from "../slices/menu"
import modelSlice from "../slices/Model"

const reducers = combineReducers({
  auth: authSlice,
  menu: menuSlice,
  model: modelSlice,
})

const persistConfig = {
  key: "root",
  timeout: 500,
  storage: storage,
  stateReconciler: hardSet,
  blacklist: ["navigation"],
}

const _persistedReducer = persistReducer(persistConfig, reducers)

export const store = configureStore({
  reducer: _persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: getDefaultMiddleware({
    serializableCheck: {
      /* ignore persistance actions */
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
})

// to persist states when refresh
export const persistor = persistStore(store)

// type declaration
export type RootState = ReturnType<typeof store.getState>
