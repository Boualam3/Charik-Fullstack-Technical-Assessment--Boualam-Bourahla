import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface Contact {
  contact_id: string
  contact_name: string
  email: string
  phone: string
  created_at: string
  contact_link: string
}

interface ContactsState {
  contacts: Contact[] // List of contacts
  error?: string | null // Stores any error message (if any)
}

const initialState: ContactsState = {
  contacts: [],
  error: null,
}

const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    setContacts(state, action: PayloadAction<Contact[]>) {
      state.contacts = action.payload
    },
    setContactsError(state, action: PayloadAction<string>) {
      state.error = action.payload
    },
  },
})

export const { setContacts, setContactsError } = contactsSlice.actions

export default contactsSlice.reducer
