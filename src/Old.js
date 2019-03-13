import React, { Component } from "react";
import {
  Box,
  Button,
  Heading,
  Collapsible,
  ResponsiveContext,
  Layer,
  Calendar,
  Grommet
} from "grommet";
import { Notification, FormClose } from "grommet-icons";

const theme = {
  global: {
    colors: {
      brand: "#228be6"
    },
    font: {
      family: "Roboto",
      size: "14px",
      height: "20px"
    }
  }
};

const AppBar = props => (
  <Box
    tag="header"
    direction="row"
    align="center"
    justify="between"
    background="white"
    pad={{ left: "medium", right: "small", vertical: "small" }}
    elevation="medium"
    style={{ zIndex: "1" }}
    {...props}
  />
);

class App extends Component {
  state = {
    showSidebar: false
  };
  render() {
    const { showSidebar } = this.state;
    return (
      <Grommet theme={theme} full>
        <ResponsiveContext.Consumer>
          {size => (
            <Box fill>
              <AppBar>
                <Heading level="3" margin="none">
                  Brain Fizz
                </Heading>
                <Button
                  icon={<Notification />}
                  onClick={() =>
                    this.setState(prevState => ({
                      showSidebar: !prevState.showSidebar
                    }))
                  }
                />
              </AppBar>
              <Box direction="row" flex overflow={{ horizontal: "hidden" }}>
                <Box
                  width="large"
                  align="center"
                  justify="center"
                  background={{
                    image: "url(/images/07.png)"
                  }}
                >
                  Some more random stuff right here
                </Box>
                <Box width="small" elevation="small">
                  <Calendar size="small" background={{ opacity: false }} />
                  Thekjhtke
                </Box>
                {!showSidebar || size !== "small" ? (
                  <Collapsible direction="horizontal" open={showSidebar}>
                    <Box
                      flex
                      width="medium"
                      background="light-2"
                      elevation="small"
                      align="center"
                      justify="center"
                    >
                      sidebar
                    </Box>
                  </Collapsible>
                ) : (
                  <Layer>
                    <Box
                      background="light-2"
                      tag="header"
                      justify="end"
                      align="center"
                      direction="row"
                    >
                      <Button
                        icon={<FormClose />}
                        onClick={() => this.setState({ showSidebar: false })}
                      />
                    </Box>
                  </Layer>
                )}
              </Box>
            </Box>
          )}
        </ResponsiveContext.Consumer>
      </Grommet>
    );
  }
}

export default App;
