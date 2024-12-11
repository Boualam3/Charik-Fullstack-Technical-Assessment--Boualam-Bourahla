import React, { useState } from "react"
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
  Checkbox,
  List,
  ListItem,
  ListItemText,
} from "@mui/material"
import { useMutation, useQuery } from "@tanstack/react-query"
import { fetchContacts } from "../../services/contacts"
import { fetchDeals } from "../../services/deals"
import { toast } from "sonner"
import associateContactsFromOrToDeals from "../../services/associations"

//clickedRowId and selectedRows it can be undefined due to the selection process happening only one time clickedRowId or selectedRows so both can be undefined
interface AssociateCompProps {
  open: boolean
  onClose: () => void
  clickedRowId: string | null
  selectedRows: string[] | null
  objectsType: "contacts" | "deals"
}

const AssociateComp: React.FC<AssociateCompProps> = ({
  open,
  onClose,
  clickedRowId,
  selectedRows,
  objectsType,
}) => {
  const [selectedTargets, setSelectedTargets] = useState<string[]>([]) // tracking selected targets

  // fetch target objects based on objectsType (contacts or deals)
  const { data: targetData, isLoading } = useQuery(
    [objectsType === "deals" ? "contacts" : "deals"],
    objectsType === "deals" ? fetchContacts : fetchDeals
  )

  // handle target selection
  const handleTargetSelect = (targetId: string) => {
    setSelectedTargets((prev) =>
      prev.includes(targetId)
        ? prev.filter((id) => id !== targetId)
        : [...prev, targetId]
    )
  }

  // Mutation to handle the association API call
  const { mutateAsync: associateMutation, isLoading: isAssociating } =
    useMutation({
      mutationFn: associateContactsFromOrToDeals, //
      onSuccess: () => {
        toast.success(`Successfully linked ${objectsType}`)
        onClose()
        setSelectedTargets([])
      },
      onError: (error: any) => {
        toast.error(`Error linking ${objectsType}: ${error.message}`)
      },
    })
  // handle association submission
  const handleAssociation = async () => {
    //require at least one operation to do associations bulk or single
    if (!clickedRowId && (!selectedRows || selectedRows.length === 0)) {
      toast.error("No valid objects selected for association!!")
      return
    }
    // format the selected objects to be list of objects on both cases
    const associations =
      clickedRowId && selectedTargets.length > 0
        ? selectedTargets.map((targetId) => ({
            from_id: clickedRowId,
            to_id: targetId,
          }))
        : selectedRows?.flatMap((fromId) =>
            selectedTargets.map((toId) => ({
              from_id: fromId,
              to_id: toId,
            }))
          ) || []

    if (!associations.length) {
      toast.error("No valid associations could be created!!")
      return
    }

    await associateMutation({
      from_object_type: objectsType,
      to_object_type: objectsType === "deals" ? "contacts" : "deals",
      associations,
    })
  }

  if (isLoading) {
    return <p>Loading...</p>
  }

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>
        Select {objectsType === "deals" ? <>Contacts</> : <>Deals</>}
      </DialogTitle>
      <DialogContent>
        <List>
          {targetData?.map((item: any) => (
            <ListItem key={item.contact_id || item.deal_id}>
              <Checkbox
                checked={selectedTargets.includes(
                  item.contact_id || item.deal_id
                )}
                onChange={() =>
                  handleTargetSelect(item.contact_id || item.deal_id)
                }
              />
              <ListItemText
                primary={item.contact_name || item.deal_name}
                secondary={item.email || item.deal_stage}
              />
            </ListItem>
          ))}
        </List>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button
          onClick={handleAssociation}
          disabled={selectedTargets.length === 0 || isAssociating}
        >
          Associate
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default AssociateComp
