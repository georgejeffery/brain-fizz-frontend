import React from "react";
import { Box, Heading } from "grommet";
import { FormTrash } from "grommet-icons";

export default class Note extends React.Component {
  state = {
    background: ""
  };
  isAppointment() {
    if (this.props.note.tags.map(tag => tag.name).includes("Appointment")) {
      return (
        <Heading level="6">Appointment date: {this.props.note.date}</Heading>
      );
    }
  }

  componentDidMount() {
    switch (this.props.note.tone) {
      case "joy":
        this.setState({
          background: "linear-gradient(135deg, #ffffff, #f4d742)"
        });
        break;
      case "anger":
        this.setState({
          background: "linear-gradient(135deg, #ffffff, #f44141)"
        });
        break;
      case "sadness":
        this.setState({
          background: "linear-gradient(135deg, #ffffff, #2c539e)"
        });
        break;
      case "fear":
        this.setState({
          background: "linear-gradient(135deg, #ffffff, #2c539e)"
        });
        break;
      case "analytical":
        this.setState({
          background: "linear-gradient(135deg, #ffffff, #5a00b5)"
        });
        break;
      case "confident":
        this.setState({
          background: "linear-gradient(135deg, #ffffff, #f96d02)"
        });
        break;
      case "tentative":
        this.setState({
          background: "linear-gradient(135deg, #ffffff, #9e01f9)"
        });
        break;
      default:
        this.setState({
          background: "linear-gradient(135deg, #ffffff, #41c7f4)"
        });
        break;
    }
  }

  render() {
    return (
      <Box
        justify="between"
        elevation="small"
        width="medium"
        height="xsmall"
        direction="row"
        align="center"
        pad="medium"
        style={{ "background-image": this.state.background, opacity: "70%" }}
      >
        <Heading level="4">{this.props.note.content}</Heading>
        {this.isAppointment()}
        <FormTrash
          color="white"
          onClick={() => {
            this.props.deleteNote(this.props.note.id);
          }}
        />
      </Box>
    );
  }
}
