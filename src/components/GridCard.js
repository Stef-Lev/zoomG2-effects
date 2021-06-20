import React from "react";
import styled from "styled-components";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const Content = styled(Paper)`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 16px;
  height: 200px;
  position: relative;
  h3 {
    margin-bottom: 8px;
  }
`;
const Screen = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #20252b;
  border-radius: 50%;
  width: 100px;
  height: 100px;
  margin-bottom: 8px;

  p {
    font-size: 60px;
    color: #fc2b23;
    font-family: "Digital7";
    margin: 0;
  }
`;

function GridCard({ title, code }) {
  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Content elevation={3}>
        <h3>Metallica drums</h3>
        <Screen>
          <p>{code}</p>
        </Screen>
      </Content>
    </Grid>
  );
}

export default GridCard;
