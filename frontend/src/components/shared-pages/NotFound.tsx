import React from "react"
import { Box, Typography, Button } from "@mui/material"
import { useNavigate } from "react-router-dom"

const NotFound: React.FC = () => {
  const navigate = useNavigate()

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        textAlign: "center",
        backgroundColor: "#f5f5f5",
        padding: "2rem",
      }}
    >
      <Typography
        variant="h1"
        sx={{ fontSize: "6rem", fontWeight: "bold", color: "#ff6f61" }}
      >
        404
      </Typography>
      <Typography variant="h5" sx={{ marginBottom: "1rem", color: "#333" }}>
        Oops! The page you're looking for doesn't exist.
      </Typography>
      <Button
        variant="contained"
        color="primary"
        sx={{ marginTop: "1rem", textTransform: "none" }}
        onClick={() => navigate("/")}
      >
        Go to Home
      </Button>
    </Box>
  )
}

export default NotFound
