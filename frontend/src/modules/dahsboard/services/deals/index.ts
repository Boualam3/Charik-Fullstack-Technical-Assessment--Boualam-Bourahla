import API from "../../../../api"

// fetch leads
export const fetchDeals = async () => {
  try {
    const res = await API.get("/crm/deals/")
    console.log("response : ", res.data)
    if (res.status === 200) {
      return res.data.deals
    }
  } catch (error) {}
}
