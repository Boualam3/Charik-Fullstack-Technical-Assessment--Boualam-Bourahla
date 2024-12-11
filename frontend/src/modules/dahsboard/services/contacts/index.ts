import API from "../../../../api"

// fetch leads
export const fetchContacts = async () => {
  try {
    const res = await API.get("/crm/contacts/")
    console.log("response contacts: ", res.data)
    if (res.status === 200) {
      return res.data.contacts
    }
  } catch (error) {}
}
