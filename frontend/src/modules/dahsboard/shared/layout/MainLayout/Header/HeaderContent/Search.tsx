import React, { useState } from "react";
// material-ui
import { Box, useTheme, Typography } from "@mui/material";

// assets
import { SearchOutlined } from "@ant-design/icons";
import SearchModal from "./SearchModal";
import { useTranslation } from "react-i18next";

const Search: React.FC = () => {
  const {t} = useTranslation()
  const theme = useTheme();
  const [openSearchModal, setOpenSearchModal] = useState<boolean>(false);

  return (
    <Box sx={{ width: "100%", ml: { xs: 0, md: 1 } }}>
     {/* {openSearchModal ? <SearchModal open={openSearchModal} setOpen={setOpenSearchModal} /> : null} */}
     <SearchModal open={openSearchModal} setOpen={setOpenSearchModal} />

      <Box
        sx={{ width: { xs: "100%", md: 465 } }}
        onClick={() => {
          setOpenSearchModal(true);
        }}
      >
        <Box
          className="flex flex-row px-4 items-center gap-2 rounded-3xl h-[48px] border-transparent cursor-pointer"
          sx={{
            background: theme.palette.background.default,
          }}
        >
          <SearchOutlined />
          <Typography
            variant="subtitle2"
            className="opacity-80"
            sx={{
              color: theme.palette.text.secondary,
            }}
          >
            {t("Type to search ...")}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Search;
