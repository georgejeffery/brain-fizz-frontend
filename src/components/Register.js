import React from "react";
import { Heading, Box, Form, Button, FormField, TextInput } from "grommet";

export default class Register extends React.Component {
  state = {
    name: "",
    username: "",
    password: "",
    phone_number: ""
  };
  handleChange = e =>
    this.setState({
      [e.target.name]: e.target.value
    });

  render() {
    const { name, username, password, phone_number } = this.state;

    return (
      <Box
        justify="center"
        background="light-5"
        fill
        background={{
          image: "url(/images/07.png)",
          size: "contain"
        }}
        align="center"
      >
        {this.props.registerState ? (
          <Box
            pad={{ left: "medium", right: "medium" }}
            background={{
              color: "#FF0000",
              opacity: "80%"
            }}
            align="center"
            round="large"
          >
            <Heading level="5">Please Try Again!</Heading>
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
            align="center"
            size="medium"
            onSubmit={() => this.props.submit(this.state)}
          >
            <FormField label="Enter Name">
              <TextInput
                placeholder="Enter your Name"
                value={name}
                name="name"
                onChange={this.handleChange}
              />
            </FormField>
            <FormField label="Enter Username">
              <TextInput
                placeholder="Enter your username"
                value={username}
                name="username"
                onChange={this.handleChange}
              />
            </FormField>
            <FormField label="Enter Phone Number">
              <TextInput
                placeholder="Enter your phone number"
                value={phone_number}
                name="phone_number"
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
        </Box>
      </Box>
    );
  }
}
