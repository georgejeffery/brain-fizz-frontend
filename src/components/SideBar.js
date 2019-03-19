import React from "react";
import {
  Box,
  Calendar,
  Form,
  TextArea,
  Button,
  Heading,
  Select
} from "grommet";
import { Tags, DateInput } from "grommet-controls";
import { FormSubtract } from "grommet-icons";

export default class SideBar extends React.Component {
  state = {
    tags: [],
    date: "",
    content: "",
    user_id: "",
    isAppointment: false
  };

  render() {
    return (
      <Box gridArea="leftbox" background="light-1" fill align="center">
        <Calendar
          size="small"
          background={{ opacity: false }}
          margin={{ top: "small", bottom: "small" }}
          date={this.props.currentDate}
          onSelect={date => this.props.chooseDate(date)}
          color="brand"
        />
        {/* <Box
          background={{
            color: "#FFFFFF",
            opacity: "50%"
          }}
          pad="small"
          align="center"
          direction="column"
        > */}
        <Form
          align="center"
          size="medium"
          onSubmit={event => {
            this.props.createNote(this.state);
            this.setState({
              tags: [],
              date: "",
              content: "",
              user_id: "",
              isAppointment: false
            });
          }}
        >
          <Heading
            level="4"
            margin={{ top: "small", bottom: "small" }}
            color="brand"
          >
            Add a new note
          </Heading>
          <TextArea
            width="medium"
            value={this.state.content}
            placeholder="Enter your note content"
            onChange={event => {
              this.setState({ content: event.target.value });
              this.setState({ user_id: this.props.userID });
            }}
          />
          <Tags
            placeholder="No Tags Chosen Yet!"
            value={this.state.tags.map(tag => tag.name)}
            labelKey="name"
            onChange={target => {
              let a = this.state.tags;
              //debugger;
              a = a.filter(tag => {
                return tag.name !== target.option;
              });
              this.setState({ tags: a });
            }}
            direction="column"
            icon={<FormSubtract color="white" />}
          />
          <Select
            margin={{ bottom: "10px" }}
            placeholder="Choose a tag"
            options={this.props.tags}
            labelKey="name"
            fill="true"
            alignSelf="center"
            width="medium"
            onChange={({ option }) => {
              this.setState({ tags: [option, ...this.state.tags] });
              if (option.name === "Appointment") {
                this.setState({ isAppointment: true });
              }
            }}
          />
          {this.state.isAppointment && (
            <DateInput
              style={{ "margin-bottom": "10px" }}
              size="small"
              placeholder="DD/MM/YYYY"
              alignSelf="center"
              onChange={event =>
                this.setState({
                  date: new Date(event.target.value).toDateString()
                })
              }
            />
          )}
          <br />
          <Button type="submit" primary label="Submit" alignSelf="center" />
        </Form>
        {/* </Box> */}
      </Box>
    );
  }
}
