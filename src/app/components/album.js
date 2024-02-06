import * as React from "react";

import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";

import Container from "@mui/material/Container";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import AlbumCard from "./albumcard";

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function Album({ albums }) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />

      <main>
        {/* Hero unit */}
        <Container sx={{ py: 8 }} maxWidth="md">
          <Grid container spacing={4}>
            {albums.map((album) => (
              <Grid item key={album} xs={12} sm={6} md={4}>
                <AlbumCard album={album} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    </ThemeProvider>
  );
}
