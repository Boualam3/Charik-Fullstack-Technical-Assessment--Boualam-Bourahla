/*
import { useEffect, useRef, useState } from "react";

// material-ui
import { useTheme } from "@mui/material/styles";
import {
  Box,
  ButtonBase,
  ClickAwayListener,
  Grid,
  List,
  ListItemButton,
  ListItemText,
  Paper,
  Popper,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";

// project import
import Transitions from "@/components/transitions";

// assets
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import {
  defaultlanguage,
  languages as Ilanguages,
} from "@/config/global-config";
import { useTranslation } from "react-i18next";
import { useAuth } from "@/modules/Auth/contexts";
import { handleUpdateLang } from "@/modules/Auth/services";

const Localization = () => {
  const { profile } = useAuth();

  const theme = useTheme();
  const matchesXs = useMediaQuery(theme.breakpoints.down("md"));

  const [languages] = useState(Ilanguages);
  const { i18n } = useTranslation();

  useEffect(() => {
    if (languages.length < 1) {
      if (
        languages.some((obj) => obj.code === i18n.language) &&
        defaultlanguage === i18n.language
      ) {
        // Handle the case where languages.length is less than 1
      } else {
        i18n.changeLanguage(defaultlanguage);
      }
    } else {
      if (!languages.some((obj) => obj.code === i18n.language)) {
        i18n.changeLanguage(defaultlanguage);
      }
    }
    if (profile?.setting?.language) {
      i18n.changeLanguage(profile?.setting?.language);
    }
  }, [languages, i18n, profile]);

  const anchorRef = useRef<any>(null);
  const [open, setOpen] = useState(false);
  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event: MouseEvent | TouchEvent) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setOpen(false);
  };

  return (
    <Box
      sx={{ flexShrink: 0, ml: 0.75 }}
      className="flex bg-transparent z-[90]"
      alignItems={"center"}
      justifyContent={"center"}
    >
      <ButtonBase
        aria-label="open localization"
        ref={anchorRef}
        aria-controls={open ? "localization-grow" : undefined}
        aria-haspopup="true"
        type="button"
        onClick={handleToggle}
        className={`flex flex-row items-center justify-center bg-transparent gap-[2px] rounded h-[48px] px-2  `}
      >
        <Box className="w-[24px] h-[18px]">
          <img
            src={languages.find((lang) => lang?.code === i18n.language)?.flag}
            className="w-full h-full object-contain"
          />
        </Box>
        <KeyboardArrowDownIcon
          fontSize="small"
          className={`transition-all ${open ? "rotate-180" : ""}`}
        />
      </ButtonBase>

      <Popper
        placement={matchesXs ? "bottom-start" : "bottom"}
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
                offset: [matchesXs ? 0 : 0, 9],
              },
            },
          ],
        }}
      >
        {({ TransitionProps }) => (
          <Transitions type="fade" in={open} {...TransitionProps}>
            <Paper >
              <ClickAwayListener onClickAway={handleClose}>
                <List
                  component="nav"
                  sx={{
                    p: 0,
                    width: "100%",
                    minWidth: 190,
                    maxWidth: 280,
                    bgcolor: theme.palette.background.paper,
                    borderRadius: 0.5,
                    [theme.breakpoints.down("md")]: {
                      maxWidth: 250,
                    },
                  }}
                >
                  {languages.map((item, index) => (
                    <ListItemButton
                      selected={i18n.language === item.code}
                      onClick={() => {
                        i18n.changeLanguage(item.code);
                        handleUpdateLang(item.code);

                        setOpen(false);
                      }}
                      key={item.code}
                    >
                      <ListItemText
                        primary={
                          <Stack className="w-full flex flex-row items-center justify-start gap-2">
                            <Box className="w-[24px] h-[18px]">
                              <img
                                src={item?.flag}
                                className="w-full h-full object-contain"
                              />
                            </Box>
                            <Grid container>
                              <Typography variant="body2">
                                {item?.name}
                              </Typography>
                              <Typography variant="caption" sx={{ ml: "8px" }}>
                                ({item.code})
                              </Typography>
                            </Grid>
                          </Stack>
                        }
                      />
                    </ListItemButton>
                  ))}
                </List>
              </ClickAwayListener>
            </Paper>
          </Transitions>
        )}
      </Popper>
    </Box>
  );
};

export default Localization;
*/
