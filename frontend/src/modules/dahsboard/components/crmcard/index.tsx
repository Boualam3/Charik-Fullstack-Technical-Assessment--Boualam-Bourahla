import React, { useState } from "react"
import { DataGrid, GridColDef } from "@mui/x-data-grid"
import { useQuery } from "@tanstack/react-query"
import {
  Button,
  IconButton,
  TextField,
  Box,
  CircularProgress,
} from "@mui/material"
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded"
import { useNavigate } from "react-router-dom"
import AssociateComp from "../associateComp"

interface CRMCardProps {
  objectsType: "contacts" | "deals"
  fetchData: () => Promise<any>
  columns: GridColDef[]
  getRowId: (row: any) => string
}

const CRMCard: React.FC<CRMCardProps> = ({
  objectsType,
  fetchData,
  columns,
  getRowId,
}) => {
  const navigate = useNavigate()
  const [search, setSearch] = useState("")
  const [selectedRows, setSelectedRows] = useState<string[]>([]) //selected rows

  const [clickedRowId, setClickedRowId] = useState<string | null>(null) // To store the clicked row IDs
  const [openAssociateComp, setOpenAssociateComp] = useState(false) // Modal state for AssociateComp

  // Fetching data using React Query
  const { data, isLoading, error } = useQuery([objectsType], fetchData)

  // Filtering data based on search value
  const filteredData = data?.filter((item: any) =>
    (item.contact_name || item.deal_name)
      .toLowerCase()
      .includes(search.toLowerCase())
  )

  //handle row click
  const handleRowClick = (rowId: string) => {
    console.log("Row with id " + rowId + " clicked!")
    setClickedRowId(rowId)
    setOpenAssociateComp(true) // open the AssociateComp modal when a row is clicked
  }

  if (isLoading) {
    return <CircularProgress />
  }

  if (error) {
    return <p>Error loading {objectsType}</p>
  }

  return (
    <Box>
      <IconButton size="small" sx={{ mb: 2 }} onClick={() => navigate(-1)}>
        <ArrowBackRoundedIcon className="w-8 h-8 cursor-pointer" />
      </IconButton>

      <TextField
        label={`Search ${
          objectsType.charAt(0).toUpperCase() + objectsType.slice(1)
        }`}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        fullWidth
        sx={{ mb: 2 }}
      />
      <Box sx={{ height: "550px", width: "100%" }}>
        <DataGrid
          initialState={{
            pagination: {
              paginationModel: { pageSize: 6 },
            },
          }}
          pageSizeOptions={[5, 10, 25]}
          autoPageSize={true}
          rows={filteredData || []}
          columns={columns}
          checkboxSelection
          onRowSelectionModelChange={(ids) => setSelectedRows(ids as string[])}
          getRowId={getRowId}
          onRowClick={
            (params: any) => handleRowClick(params?.id)
            // console.log(`object type ${objectsType} : `, params)
          }
          sx={{
            "& .MuiDataGrid-row": {
              cursor: "pointer",
            },
          }}
        />
      </Box>

      {/* Modal to select the target objects (contacts or deals) */}
      <AssociateComp
        open={openAssociateComp}
        onClose={() => setOpenAssociateComp(false)}
        clickedRowId={clickedRowId}
        selectedRows={selectedRows}
        objectsType={objectsType}
      />

      <Button
        variant="contained"
        onClick={() => setOpenAssociateComp(true)} // Open modal to select targets
        disabled={selectedRows.length === 0}
        sx={{ mt: 2 }}
      >
        {`Link Selected ${
          objectsType.charAt(0).toUpperCase() + objectsType.slice(1)
        }`}
      </Button>
    </Box>
  )
}

export default CRMCard
