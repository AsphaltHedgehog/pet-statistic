import { useState } from "react";
import { Link } from "react-router-dom";
import { Box, Typography, useTheme } from "@mui/material";
import PixIcon from "@mui/icons-material/Pix";
import FlexBetween from "../FlexBetween";

const Header = () => {
  const { palette } = useTheme();
  const [selectedPage, setSelectedPage] = useState("dashboard");

  return (
    <header>
      <FlexBetween mb="0.25rem" p="0.5rem 0rem" color={palette.grey[300]}>
        <FlexBetween gap="0.75rem" aria-description="Logo container">
          <PixIcon sx={{ fontSize: "28px" }} />
          <Typography variant="h4" fontSize="16px">
            Finanseer
          </Typography>
        </FlexBetween>

        <FlexBetween gap="2rem" aria-description="Nav container">
          <Box sx={{ "&:hover": { color: palette.primary[100] } }}>
            <Link
              to="/"
              onClick={() => setSelectedPage("dashboard")}
              style={{
                color: selectedPage === "dashboard" ? "inherit" : palette.grey[700],
                textDecoration: "inherit"
              }}
            >
              Dashboard
            </Link>
          </Box>
          <Box>
            <Link
              to="/predictions"
              onClick={() => setSelectedPage("predictions")}
              style={{
                color: selectedPage === "predictions" ? "inherit" : palette.grey[700],
                textDecoration: "inherit"
              }}
            >
              Predictions
            </Link>
          </Box>
        </FlexBetween>
      </FlexBetween>
    </header>
  );
};

export default Header;
