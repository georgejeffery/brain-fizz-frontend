URL = "http://localhost:3000/api/v1/";

export default class API {
  static handleErrors(response) {
    if (!response.ok) {
    }
    return response;
  }
  static get(endpoint) {
    return fetch(URL + endpoint).then(resp => resp.json());
  }

  static getUser(id) {
    return fetch(URL + `users/${id}`, {
      headers: {
        Authorization: localStorage.getItem("token")
      }
    }).then(response => response.json());
  }

  static createUser(userFields) {
    const query = `users`;
    return fetch(URL + query, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(userFields)
    }).then(response => response.json());
  }

  static createNote(note) {
    return fetch(URL + "notes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(note)
    }).then(resp => resp.json());
  }

  static getNote(noteId) {
    return fetch(URL + `notes/${noteId}`).then(resp => resp.json());
  }

  static deleteNote(noteId) {
    let options = { method: "DELETE" };
    return fetch(URL + `notes/${noteId}`, options).then(response =>
      response.json()
    );
  }

  static getUserNotes(userID) {
    return fetch(URL + `usernotes/?user_id=${userID}`, {
      headers: {
        Authorization: localStorage.getItem("token")
      }
    }).then(resp => resp.json());
  }

  static authorise(user) {
    return fetch(URL + "authenticate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user)
    })
      .then(resp => resp.json())
      .then(token => {
        localStorage.setItem("token", token.auth_token);
        return token.user_id;
      });
  }

  static getTags() {
    return fetch(URL + "tags").then(resp => resp.json());
  }

  static getMonthTone(id) {
    return fetch(URL + `monthtone/?id=${id}`).then(resp => resp.json());
  }
}
