import React, { createRef } from "react";
import { Box, Drop } from "grommet";

export default class ToneBox extends React.Component {
  state = {
    background: "",
    over: false
  };

  ref = createRef();

  randomAngle() {
    return Math.floor(Math.random() * 360 + 1);
  }

  componentDidMount() {
    switch (this.props.tone) {
      case "joy":
        this.setState({
          background: `linear-gradient(155deg, #ffffff, #f4d742)`
        });
        break;
      case "anger":
        this.setState({
          background: "linear-gradient(155deg, #ffffff, #f44141)"
        });
        break;
      case "sadness":
        this.setState({
          background: "linear-gradient(155deg, #ffffff, #2c539e)"
        });
        break;
      case "fear":
        this.setState({
          background: "linear-gradient(155deg, #ffffff, #2c539e)"
        });
        break;
      case "analytical":
        this.setState({
          background: "linear-gradient(155deg, #ffffff, #5a00b5)"
        });
        break;
      case "confident":
        this.setState({
          background: "linear-gradient(155deg, #ffffff, #f96d02)"
        });
        break;
      case "tentative":
        this.setState({
          background: "linear-gradient(155deg, #ffffff, #9e01f9)"
        });
        break;
      default:
        this.setState({
          background: "linear-gradient(155deg, #ffffff, #41c7f4)"
        });
        break;
    }
  }
  render() {
    const { over } = this.state.over;
    return (
      <Box>
        <div
          style={{
            width: "25px",
            height: "25px",
            "background-image": this.state.background
          }}
          ref={this.ref}
          onMouseOver={() => this.setState({ over: true })}
          onMouseOut={() => this.setState({ over: false })}
        />
        {this.ref.current && this.state.over && this.props.tone && (
          <Drop align={{ top: "bottom" }} target={this.ref.current} plain>
            <Box margin="xsmall" pad="small" background="dark-3">
              {this.props.tone.toUpperCase()}
            </Box>
          </Drop>
        )}
      </Box>
    );
  }
}
