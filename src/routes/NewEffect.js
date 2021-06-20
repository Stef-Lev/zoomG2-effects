import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledPaper = styled(Paper)`
  padding: 16px 32px;
`;

function NewEffect() {
  const [state, setState] = useState({
    comp: { status: false, sense: null, attack: null, level: null },
    wahEfx: {
      active: false,
      type: null,
      position: null,
      rate: null,
      level: null,
    },
    znr: { active: false, type: null, threshold: null },
    drive: { active: false, type: null, gain: null, tone: null, level: null },
    eq: { bass: null, middle: null, treble: null },
    extraEq: {
      active: false,
      type: null,
      loMid: false,
      presence: null,
      harmonics: null,
    },
    modSfx: {
      active: false,
      type: null,
      loMid: false,
      presence: null,
      harmonics: null,
    },
    delay: {
      active: false,
      type: null,
      time: false,
      feedback: null,
      mix: null,
    },
    reverb: {
      active: false,
      type: null,
      decay: false,
      tone: null,
      mix: null,
    },
  });

  return (
    <MainContainer>
      <Grid container xs={12} md={8}>
        <Grid item xs={12} md={12}>
          <StyledPaper>TEST</StyledPaper>
        </Grid>
      </Grid>
    </MainContainer>
  );
}

export default NewEffect;
