import { createSlice, PayloadAction } from "@reduxjs/toolkit"
//!!! NOTICE we don't use redux to store the fetched data since we are using react-query to retrieve and cache data
interface Deal {
  deal_id: string
  deal_name: string
  amount: string
  deal_stage: string
  close_date: string | null
  pipeline: string
  created_at: string
  deal_link: string
}

interface DealsState {
  deals: Deal[]
  error?: string | null
}

const initialState: DealsState = {
  deals: [],
  error: null,
}

const dealsSlice = createSlice({
  name: "deals",
  initialState,
  reducers: {
    setDeals(state, action: PayloadAction<Deal[]>) {
      state.deals = action.payload
    },
    setDealsError(state, action: PayloadAction<string>) {
      state.error = action.payload
    },
  },
})

export const { setDeals, setDealsError } = dealsSlice.actions

export default dealsSlice.reducer
