import React from "react";
import styled from "styled-components";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import GridCard from "../components/GridCard";
import { effectsCodes } from "../services/helpers";

const HeaderContainer = styled.div`
  margin-bottom: 22px;
`;

function Current() {
  return (
    <div>
      <HeaderContainer>
        <Paper elevation={3} style={{ padding: "8px 16px" }}>
          <h1>ZoomG2 Effects</h1>
          <img src="/G2top.jpg" width="200px" />
        </Paper>
      </HeaderContainer>
      {/* Data grid */}
      <Grid container spacing={2}>
        {effectsCodes().map((item) => {
          return <GridCard code={item} />;
        })}
      </Grid>
    </div>
  );
}

export default Current;
