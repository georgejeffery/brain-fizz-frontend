import React, { Component } from "react";
import {
  Box,
  Button,
  Heading,
  Collapsible,
  ResponsiveContext,
  Layer,
  Calendar,
  Grid,
  Grommet,
  Select,
  Form,
  TextArea
} from "grommet";
import { ImageStamp, Tags, DateInput, DropInput } from "grommet-controls";
import { Notification, FormClose } from "grommet-icons";

const theme = {
  global: {
    colors: {
      brand: "#8d22e6"
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
            <Grid
              fill
              rows={["xsmall", "flex"]}
              columns={["flex", "medium"]}
              gap="xsmall"
              areas={[
                { name: "header", start: [0, 0], end: [1, 0] },
                { name: "main", start: [0, 1], end: [0, 1] },
                { name: "leftbox", start: [1, 1], end: [1, 1] }
              ]}
            >
              <AppBar>
                <Heading level="1" margin="none">
                  Brain Fizz
                </Heading>
                <ImageStamp
                  src="https://v2.grommet.io/assets/Wilderpeople_Ricky.jpg"
                  round="full"
                  size="medium"
                />
              </AppBar>
              <Box
                gridArea="main"
                background="light-5"
                fill
                //align="center"
                //justify="center"
                background={{
                  image: "url(/images/07.png)",
                  size: "contain"
                }}
              >
                <Box
                  direction="row"
                  justify="between"
                  margin={{ left: "medium", right: "medium" }}
                >
                  <Heading level="2" alignSelf="center">
                    All Your Notes
                  </Heading>
                  <Select
                    options={["Appointment", "Daily Task"]}
                    value={"Filter"}
                    background="#FFFFFF"
                    size="medium"
                    align="right"
                    alignSelf="center"
                    style={{ background: "#FFFFFF" }}
                  />
                </Box>
                <Box
                  fill
                  margin={{ left: "medium", right: "medium" }}
                  background={{
                    color: "#FFFFFF",
                    opacity: "50%"
                  }}
                  align="center"
                >
                  <Box>Note Content</Box>
                  <Box>Note Content</Box>
                  <Box>Note Content</Box>
                  <Box>Note Content</Box>
                  <Box>Note Content</Box>
                  <Box>Note Content</Box>
                </Box>
              </Box>
              <Box
                gridArea="leftbox"
                background="light-1"
                fill
                align="center"
                //justify="center"
              >
                <Calendar
                  size="small"
                  background={{ opacity: false }}
                  margin={{ top: "small", bottom: "small" }}
                />
                <Box
                  background={{
                    color: "#FFFFFF",
                    opacity: "50%"
                  }}
                  pad="small"
                >
                  <Form align="center" size="medium">
                    <Heading
                      level="4"
                      margin={{ top: "small", bottom: "small" }}
                    >
                      Add a new note
                    </Heading>
                    <TextArea
                      placeholder="Things get typed here"
                      onChange={event => {
                        /* event.target.value */
                      }}
                    />
                    <Tags placeholder="No Tags Chosen Yet!" />
                    <DropInput
                      style={{ "margin-bottom": "10px" }}
                      placeholder="Choose a tag"
                    />
                    <DateInput
                      style={{ "margin-bottom": "10px" }}
                      placeholder="DD/MM/YYYY"
                      alignSelf="center"
                    />
                    <Button
                      type="submit"
                      primary
                      label="Submit"
                      alignSelf="center"
                    />
                  </Form>
                </Box>
              </Box>
            </Grid>
          )}
        </ResponsiveContext.Consumer>
      </Grommet>
    );
  }
}

export default App;
