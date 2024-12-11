import API from "../../../../api"

//function to handle associations
const associateContactsFromOrToDeals = async ({
  from_object_type,
  to_object_type,
  associations,
}: {
  from_object_type: string
  to_object_type: string
  associations: { from_id: string; to_id: string }[]
}) => {
  try {
    const response = await API.post("/crm/associations/", {
      from_object_type,
      to_object_type,
      associations,
    })
    return response.data
  } catch (error: any) {
    throw new Error(
      error?.response?.data?.message ||
        "Something went wrong while associating objects!!"
    )
  }
}

export default associateContactsFromOrToDeals
