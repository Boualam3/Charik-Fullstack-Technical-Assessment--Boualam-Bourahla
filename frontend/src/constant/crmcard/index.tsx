import { displayDate } from "../../helpers/date.helper"
import { GridColDef } from "@mui/x-data-grid"

// columns config for contacts table
const contactColumns: GridColDef[] = [
  { field: "contact_name", headerName: "Contact Name", width: 200 },
  { field: "email", headerName: "Email", width: 250 },
  { field: "phone", headerName: "Phone", width: 150 },
  {
    field: "contact_link",
    headerName: "Link",
    width: 200,
    renderCell: (params) => (
      <a
        href={params.row.contact_link}
        target="_blank"
        rel="noopener noreferrer"
      >
        View Contact on HubSpot
      </a>
    ),
  },
]

// columns config for deals table
const dealColumns: GridColDef[] = [
  { field: "deal_name", headerName: "Deal Name", width: 200 },
  { field: "deal_stage", headerName: "Stage", width: 180 },
  {
    field: "close_date",
    headerName: "Close Date",
    width: 200,
    renderCell: (params) => displayDate(params.row.close_date),
  },
  {
    field: "deal_link",
    headerName: "Link",
    width: 200,
    renderCell: (params) => (
      <a href={params.row.deal_link} target="_blank" rel="noopener noreferrer">
        View Deal on HubSpot
      </a>
    ),
  },
  {
    field: "created_at",
    headerName: "Created At",
    width: 200,
    renderCell: (params) => displayDate(params.row.created_at),
  },
]

export { dealColumns, contactColumns }
