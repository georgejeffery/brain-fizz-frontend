import React from "react";
import { Box, Heading, Select } from "grommet";
import NoteContainer from "./NoteContainer";
import ToneBox from "./ToneBox";

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
    let monthTone = this.props.monthTone.map(tone => <ToneBox tone={tone} />);

    return (
      <Box
        gridArea="main"
        background="light-5"
        fill
        background={{
          image: "url(/images/07.png)",
          size: "contain",
          repeat: "space"
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
        <Heading level="6" alignSelf="center" color="brand" margin="none">
          This Month in Feelings
        </Heading>
        <Box
          direction="row"
          align="center"
          alignContent="center"
          justify="center"
        >
          {monthTone}
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
