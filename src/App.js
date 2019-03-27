import React, { Component } from "react";
import { ResponsiveContext, Grid, Grommet } from "grommet";
import { Route, withRouter, Redirect } from "react-router-dom";
import API from "./API";
import AppBar from "./components/AppBar";
import MainPage from "./components/MainPage";
import SideBar from "./components/SideBar";
import Login from "./components/Login";
import Register from "./components/Register";

const theme = {
  global: {
    colors: {
      brand: "#e87502"
    },
    font: {
      family: "Quicksand",
      size: "14px",
      height: "20px"
    }
  }
};

class App extends Component {
  state = {
    user: "",
    user_notes: [],
    failedRegister: false,
    failedLogin: false,
    tags: [],
    selectedDate: new Date().toDateString(),
    monthTone: []
  };

  addUsertoState = userId => {
    API.getUser(userId)
      .then(user => this.setState({ user: user }))
      .then(() => {
        API.getUserNotes(userId).then(notes =>
          this.setState({ user_notes: notes })
        );
      });
    API.getTags().then(tags => this.setState({ tags: tags }));
  };

  logoutUser = () => {
    this.setState({ user: "" });
    this.props.history.push("/");
    localStorage.removeItem("token");
  };

  submit = user => {
    API.createUser(user).then(resp => {
      if (!resp.error) {
        API.getTags().then(tags => this.setState({ tags: tags }));
        this.setState({ user: resp }, () => {
          this.props.history.push("/main");
        });
      } else {
        this.setState({ failedRegister: true });
      }
    });

    //this.addUsertoState(user.id);
  };

  login = user => {
    API.authorise(user)
      .then(resp => API.getUser(resp))
      .then(user => {
        if (user.name) {
          this.setState({ user }, () => {
            this.props.history.push("/main");
            API.getUserNotes(this.state.user.id).then(notes =>
              this.setState({ user_notes: notes })
            );
            API.getMonthTone(this.state.user.id).then(tone =>
              this.setState({ monthTone: tone })
            );
            API.getTags().then(tags => this.setState({ tags: tags }));
          });
        } else {
          this.setState({ failedLogin: true });
        }
      });
  };

  selectDate = date => {
    this.setState({ selectedDate: new Date(date).toDateString() });
  };

  dateCheck = (date1, date2) => {
    let d1 = new Date(date1).toDateString();
    let d2 = new Date(date2).toDateString();
    if (d1 === d2) {
      return true;
    } else {
      return false;
    }
  };

  filterNotes = date => {
    let a = [];
    if (date !== new Date().toDateString()) {
      a = this.state.user_notes.filter(note => {
        return this.dateCheck(note.created_at, date);
      });
    } else {
      a = this.state.user_notes;
    }
    return a;
  };

  // componentDidMount = () => {
  //   this.addUsertoState(this.state.user.id);
  // };

  createNote = note => {
    API.createNote(note).then(() =>
      API.getUserNotes(this.state.user.id).then(notes =>
        this.setState({ user_notes: notes })
      )
    );
  };

  deleteNote = note => {
    API.deleteNote(note).then(() =>
      API.getUserNotes(this.state.user.id).then(notes =>
        this.setState({ user_notes: notes })
      )
    );
  };

  render() {
    const filteredNotes = this.filterNotes(this.state.selectedDate);
    return (
      <Grommet theme={theme} full>
        <ResponsiveContext.Consumer>
          {size => (
            <React.Fragment>
              <Route
                exact
                path="/main"
                component={() =>
                  this.state.user ? (
                    <React.Fragment>
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
                        <AppBar
                          username={this.state.user.name}
                          logout={this.logoutUser}
                        />
                        <MainPage
                          notes={filteredNotes}
                          tags={this.state.tags}
                          deleteNote={this.deleteNote}
                          monthTone={this.state.monthTone}
                        />
                        <SideBar
                          chooseDate={this.selectDate}
                          currentDate={this.state.selectedDate}
                          tags={this.state.tags}
                          createNote={this.createNote}
                          userID={this.state.user.id}
                        />
                      </Grid>
                    </React.Fragment>
                  ) : (
                    <Redirect to="/" />
                  )
                }
              />

              <Route
                exact
                path="/"
                component={() => (
                  <Login
                    login={this.login}
                    loginState={this.state.failedLogin}
                  />
                )}
              />
              <Route
                exact
                path="/register"
                component={() => (
                  <Register
                    submit={this.submit}
                    registerState={this.state.failedRegister}
                  />
                )}
              />
            </React.Fragment>
          )}
        </ResponsiveContext.Consumer>
      </Grommet>
    );
  }
}

export default withRouter(App);
