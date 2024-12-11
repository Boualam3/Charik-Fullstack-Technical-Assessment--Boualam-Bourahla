import CRMCard from "../../components/crmcard"
import { fetchDeals } from "../../services/deals"
import { dealColumns } from "../../../../constant/crmcard/index"

const Deals: React.FC = () => {
  return (
    <CRMCard
      objectsType="deals"
      fetchData={fetchDeals}
      columns={dealColumns}
      // TODO add types for both contacts and deals
      getRowId={(row: { deal_id: string }) => row.deal_id}
    />
  )
}

export default Deals
