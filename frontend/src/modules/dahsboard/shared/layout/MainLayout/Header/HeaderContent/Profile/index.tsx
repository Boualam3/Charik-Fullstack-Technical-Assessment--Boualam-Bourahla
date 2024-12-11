import { useRef, useState } from "react"

// material-ui
import { useTheme } from "@mui/material/styles"
import {
  Box,
  ButtonBase,
  CardContent,
  ClickAwayListener,
  Divider,
  IconButton,
  Paper,
  Popper,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material"

// assets
import { LogoutOutlined } from "@ant-design/icons"
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown"

// redux
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "@/store/config"
import { logout } from "../../../../../../../../store/slices/auth"

//components
import Avatar from "../../../../../../../../components/@extended/Avatar"
import MainCard from "../../../../../../../../components/cards/MainCard"
import Transitions from "../../../../../../../../components/transitions"
import { stringAvatar } from "../../../../../../../../helpers/data.helper"
import ProfileTab from "./ProfileTab"

// ==============================|| HEADER CONTENT - PROFILE ||============================== //

const Profile = () => {
  const theme = useTheme()
  const dispatch = useDispatch()

  const { profile } = useSelector((state: RootState) => state.auth)

  const handleLogout = () => {
    dispatch(logout())
  }

  const anchorRef = useRef<any>(null)
  const [open, setOpen] = useState(false)
  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen)
  }

  const handleClose = (event: MouseEvent | TouchEvent) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return
    }
    setOpen(false)
  }

  return (
    <Box sx={{ flexShrink: 0, ml: 0.75 }}>
      <ButtonBase
        className="h-[48px] rounded"
        aria-label="open profile"
        ref={anchorRef}
        aria-controls={open ? "profile-grow" : undefined}
        aria-haspopup="true"
        onClick={handleToggle}
      >
        {1 && (
          <Stack
            direction="row"
            gap={"4px"}
            alignItems="center"
            sx={{ p: 0.25, px: 0.75 }}
          >
            <Avatar
              alt={`${profile.firstName} ${profile.lastName}`}
              src={profile?.avatar}
              sx={{
                width: 35,
                height: 35,
                fontWeight: "700",
                fontSize: "1.3rem",
                backgroundColor: "#ccc",
              }}
              {...stringAvatar(profile.firstName || profile.email)}
            />
            <div className={`transition-all ${open ? "rotate-180" : ""}`}>
              <KeyboardArrowDownIcon fontSize="small" />
            </div>
          </Stack>
        )}
      </ButtonBase>
      <Popper
        placement="bottom-end"
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
        popperOptions={{
          modifiers: [
            {
              name: "offset",
              options: {
                offset: [0, 9],
              },
            },
          ],
        }}
      >
        {({ TransitionProps }) => (
          <Transitions type="fade" in={open} {...TransitionProps}>
            {open && (
              <Paper
                sx={{
                  width: 290,
                  minWidth: 240,
                  maxWidth: 290,
                  [theme.breakpoints.down("md")]: {
                    maxWidth: 250,
                  },
                }}
              >
                <ClickAwayListener onClickAway={handleClose}>
                  <MainCard elevation={0} border={false} content={false}>
                    <CardContent sx={{ px: 2, pt: 3 }}>
                      <Box className="flex justify-between items-center">
                        <Box>
                          {
                            // user
                            1 && (
                              <Stack
                                direction="row"
                                spacing={1.25}
                                alignItems="center"
                              >
                                <Avatar
                                  alt={`${profile.firstName} ${profile.lastName}`}
                                  src={profile?.avatar}
                                  sx={{ backgroundColor: "#ccc" }}
                                />
                                <Stack>
                                  <Typography variant="h6" className="text-lg">
                                    {`${profile.firstName || ""} ${
                                      profile.lastName || ""
                                    } ${
                                      !(profile.lastName || profile.firstName)
                                        ? profile.email || "__"
                                        : ""
                                    }`}
                                  </Typography>
                                </Stack>
                              </Stack>
                            )
                          }
                        </Box>
                        <Box>
                          <Tooltip title={"Logout"}>
                            <IconButton
                              size="large"
                              sx={{ color: "text.primary" }}
                              onClick={handleLogout}
                            >
                              <LogoutOutlined />
                            </IconButton>
                          </Tooltip>
                        </Box>
                      </Box>
                    </CardContent>
                    <Divider />
                    {open && (
                      <ProfileTab
                        handleLogout={handleLogout}
                        handleClose={handleClose}
                      />
                    )}
                  </MainCard>
                </ClickAwayListener>
              </Paper>
            )}
          </Transitions>
        )}
      </Popper>
    </Box>
  )
}

export default Profile
