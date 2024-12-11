import React, { useState } from "react"
import { styled, useTheme } from "@mui/material/styles"
import Dialog from "@mui/material/Dialog"
import DialogTitle from "@mui/material/DialogTitle"
import DialogContent from "@mui/material/DialogContent"
import { Box, InputAdornment, Typography } from "@mui/material"

import { TextField } from "@mui/material"
import { SearchOutlined } from "@ant-design/icons"
import { useNavigate } from "react-router-dom"

import { searchList } from "./searchList"

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}))

interface ModalDialogProps {
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const SearchModal: React.FC<ModalDialogProps> = ({ open, setOpen }) => {
  const navigate = useNavigate()
  const theme = useTheme()

  const [search, setSearch] = useState("")

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <BootstrapDialog
      onClose={handleClose}
      open={open}
      aria-labelledby="scroll-dialog-title"
      aria-describedby="scroll-dialog-description"
      maxWidth={"xl"}
      scroll="paper"
      sx={{
        "& .MuiPaper-root": {
          overflowY: "visible",
          maxWidth: "95%",
        },
        backdropFilter: "blur(2px)",
      }}
      className="min-h-[50px] flex flex-col justify-center w-95% md:min-w-[600px]"
    >
      <DialogTitle
        className="flex justify-between items-center w-full border-b"
        sx={{
          padding: 0,
        }}
      >
        <Box className="flex items-center flex-1">
          <TextField
            size="small"
            id="header-search"
            aria-describedby="header-search-text"
            inputProps={{
              "aria-label": "weight",
            }}
            placeholder={"What are you looking for?"}
            className="rounded-sm h-[48px] border-transparent w-full"
            sx={{
              background: theme.palette.background.default,
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderWidth: 0,
                },
                "&.Mui-focused fieldset": {
                  borderWidth: 0,
                },
              },
            }}
            value={search}
            onChange={(e) => {
              setSearch(e.target.value)
            }}
            InputProps={{
              style: {
                height: 48,
                borderRadius: "1.5rem",
              },
              startAdornment: (
                <InputAdornment position="start" sx={{ mr: 1.4 }}>
                  <SearchOutlined className="text-xl" />
                </InputAdornment>
              ),
            }}
          />
        </Box>
      </DialogTitle>

      <DialogContent className="searchModal-scrollbar ">
        <Box
          id="scroll-dialog-description"
          tabIndex={-1}
          className="min-h-[50px] flex flex-col justify-center min-w-[85vw] md:min-w-[600px]"
        >
          <Box className="flex flex-col gap-3 pt-3 pb-1">
            {searchList.map((section) => (
              <React.Fragment key={section.title}>
                <h2>
                  {section.pages.filter((page) => page.title.toLowerCase())
                    .length
                    ? section.title
                    : ""}
                </h2>
                {section.pages
                  .filter((page) => page.title.toLowerCase())
                  .slice(0, 6)
                  .map((filteredPage) => (
                    <Box
                      key={filteredPage.title}
                      className="cursor-pointer hover:bg-gray-200 p-2 rounded"
                      onClick={() => {
                        navigate(filteredPage?.url)
                        setSearch("")
                        handleClose()
                      }}
                    >
                      <Box className="flex items-center">
                        <filteredPage.icon />
                        <span className="ml-2">{filteredPage.title}</span>
                      </Box>
                    </Box>
                  ))}
              </React.Fragment>
            ))}

            {searchList.every((section) =>
              section.pages.every((page) => !page.title.toLowerCase())
            ) && <Typography variant="body1">No results </Typography>}
          </Box>
        </Box>
      </DialogContent>
    </BootstrapDialog>
  )
}

export default SearchModal
