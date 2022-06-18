import * as React from 'react';
import { AppBar, ThemeProvider, Toolbar, Typography } from "@material-ui/core";
import { Grid, Container } from "@mui/material";
import { theme } from "./theme";
import Cards from "./components/cards";
import data from "./store/package-details.json";

export const App: React.FunctionComponent = () => {

  return (
    <ThemeProvider theme={theme}>
      <div>
        <AppBar position="static">
          <Toolbar>
            <Typography>Technical Assignment</Typography>
          </Toolbar>
        </AppBar>
        <Container sx={{ marginTop: "2%" }}>
          <Grid container spacing={2}>
          <AppBar color="transparent" position="static">
            <Toolbar>
              <Typography>Insurance Packages</Typography>
            </Toolbar>
          </AppBar>
            {data.packages.map(({name,description,price}: any) => {
                return  <Grid item xs={4}><Cards name={name} description={description} price={price} /></Grid>;
              })
            }
          </Grid>
        </Container>
       
        {/* {data.packages.map((name,description,price) => (<Cards name={name} description={description} price={price} />))} */}
        {/* TODO: Add components here */}
      </div>
    </ThemeProvider>
  );
};
