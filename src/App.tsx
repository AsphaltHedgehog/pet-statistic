import { useMemo } from "react";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import { themeSettings } from "@/theme";
import { Box, CssBaseline } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import Dashboard from "@/pages/dashboard";

function App() {
  const theme = useMemo(() => createTheme(themeSettings), []);
  return (
    <div>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box width="100%" height="100%" padding="1rem 2rem 4rem 2rem">
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Dashboard />} />
              <Route
                path="/predictions"
                element={<div>Predictions page</div>}
              />
            </Route>
          </Routes>
        </Box>
      </ThemeProvider>
    </div>
  );
}

export default App;
