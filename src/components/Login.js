import React from "react";
import { Heading, Box, Form, Button, FormField, TextInput } from "grommet";

import { Link } from "react-router-dom";

export default class Login extends React.Component {
  state = {
    username: "",
    password: ""
  };
  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { username, password } = this.state;
    return (
      <Box
        justify="center"
        fill
        background={{
          image: "url(/images/07.png)",
          size: "contain"
        }}
        align="center"
      >
        {this.props.loginState ? (
          <Box
            pad={{ left: "medium", right: "medium" }}
            background={{
              color: "#FF0000",
              opacity: "60%"
            }}
            align="center"
          >
            <Heading level="5">Please Try Again!</Heading>
            Or do you need to <Link to="/register">Register?</Link>
          </Box>
        ) : (
          ""
        )}
        <Heading level="1" color="brand">
          Brain Fizz
        </Heading>
        <Box
          margin={{ left: "medium", right: "medium" }}
          background={{
            color: "#FFFFFF",
            opacity: "90%"
          }}
          align="center"
        >
          <Form
            onSubmit={() => this.props.login(this.state)}
            align="center"
            size="medium"
          >
            <FormField label="Enter Username">
              <TextInput
                placeholder="Enter your username"
                value={username}
                name="username"
                onChange={this.handleChange}
              />
            </FormField>
            <FormField label="Enter Password">
              <TextInput
                placeholder="Enter your password"
                value={password}
                name="password"
                onChange={this.handleChange}
                type="password"
              />
            </FormField>
            <Button type="submit" primary label="Submit" align="center" />
          </Form>
          <br />
          <Link to="/register" style={{ color: "#e87502" }}>
            Not registered yet? Do that here!
          </Link>
        </Box>
      </Box>
    );
  }
}
