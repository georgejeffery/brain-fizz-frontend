import React from "react";
import { Heading, Box } from "grommet";
import NoteCard from "./NoteCard";

export default class DateNotes extends React.Component {
  render() {
    const notes = this.props.data.map(note => (
      <NoteCard note={note} deleteNote={this.props.deleteNote} />
    ));
    return (
      <Box align="center">
        <Heading level="3" color="brand">
          {this.props.date}
        </Heading>

        <Box
          margin={{ left: "medium", right: "medium" }}
          background={{
            color: "#FFFFFF",
            opacity: "50%"
          }}
          // align="center"
          // justify="around"
          wrap
          height={
            notes.length > 8 ? "large" : notes.length > 2 ? "medium" : "xsmall"
          }
          width="large"
        >
          {notes}
        </Box>
      </Box>
    );
  }
}
