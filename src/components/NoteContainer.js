import React from "react";
import { Box } from "grommet";

import DateNotes from "./DateNotes";

export default class NoteContainer extends React.Component {
  getNotesByDate(notes) {
    let notesdate = {};
    notes.map(note => {
      let newDate = new Date(note.created_at);
      if (notesdate[newDate.toDateString()]) {
        notesdate[newDate.toDateString()].push(note);
      } else {
        notesdate[newDate.toDateString()] = [];
        notesdate[newDate.toDateString()].push(note);
      }
    });
    return notesdate;
  }
  componentDidMount() {
    console.log("hello");
  }

  render() {
    let notesbydate = this.getNotesByDate(this.props.notes);
    let result = Object.keys(notesbydate).map(date => (
      <DateNotes
        data={notesbydate[date]}
        date={date}
        deleteNote={this.props.deleteNote}
      />
    ));
    console.log(this.props.notes);
    return (
      <Box
        fill
        margin={{ left: "medium", right: "medium" }}
        background={{
          color: "#FFFFFF",
          opacity: "50%"
        }}
        align="center"
      >
        {result}
      </Box>
    );
  }
}
