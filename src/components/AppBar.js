import React from "react";
import { Box, Heading, Anchor } from "grommet";

const AppBar = props => (
  <Box
    gridArea="header"
    tag="header"
    direction="row"
    align="center"
    justify="between"
    background="white"
    pad={{ left: "medium", right: "small", vertical: "small" }}
    elevation="medium"
    style={{ zIndex: "1" }}
    {...props}
  >
    <Heading level="1" margin="none" color="brand">
      Brain Fizz
    </Heading>
    <Anchor
      primary
      size="medium"
      label={props.username ? props.username : "Not Logged In"}
      margin={{ right: "medium" }}
      onClick={props.logout}
    />
  </Box>
);

export default AppBar;
