import React from "react";
import { Box, Heading, Select } from "grommet";
import NoteContainer from "./NoteContainer";

export default class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFilter: "",
      filteredNotes: [],
      notes: [],
      value: ""
    };
  }

  filterNotes = value => {
    let filteredNotes = this.props.notes;
    filteredNotes = filteredNotes.filter(note => {
      return note.tags.map(tag => tag.name).includes(value);
    });
    this.setState({
      filteredNotes
    });
  };

  render() {
    return (
      <Box
        gridArea="main"
        background="light-5"
        fill
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
          <Heading level="2" alignSelf="center" color="brand">
            All Your Notes
          </Heading>
          <Select
            options={[{ name: "All Notes" }, ...this.props.tags]}
            labelKey="name"
            placeholder="Filter"
            value={this.state.value}
            background="#FFFFFF"
            size="medium"
            align="right"
            alignSelf="center"
            style={{ background: "#FFFFFF" }}
            onChange={({ option }) => {
              this.setState({ value: option.name });
              this.filterNotes(option.name);
            }}
          />
        </Box>
        <NoteContainer
          notes={
            this.state.filteredNotes.length > 0
              ? this.state.filteredNotes
              : this.props.notes
          }
          deleteNote={this.props.deleteNote}
        />
      </Box>
    );
  }
}
