import CRMCard from "../../components/crmcard"
import { fetchContacts } from "../../services/contacts"
import { contactColumns } from "../../../../constant/crmcard/index"

const ContactsPage: React.FC = () => {
  return (
    <CRMCard
      objectsType="contacts"
      fetchData={fetchContacts}
      columns={contactColumns}
      // TODO add types for both contacts and deals
      getRowId={(row: { contact_id: string }) => row.contact_id}
    />
  )
}

export default ContactsPage
