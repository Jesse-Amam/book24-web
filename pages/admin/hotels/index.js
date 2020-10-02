import React, { Component } from "react";
import { IconContext } from "react-icons";
import { MdSettings, MdDeleteForever } from "react-icons/md";
// import Button from "react-bootstrap/Button";
// import { API_URL } from "../../../root.js";
import axios from "axios";import Cookies from 'js-cookie'
var moment = require("moment");
import Sidebar from "../sidebar";

class Hotels extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showHideSidenav: "hidden",
      show: false,
      hotels: [],
      toDelete: "",
      showCreate: false,
      number: "",
      first_name: "",
      last_name: "",
      address: "",
      zip: "",
      email: "",
      password: "",
      error_div: false,
      error: ""
    };
  }

  toggleSidenav() {
    var css = this.state.showHideSidenav === "hidden" ? "show" : "hidden";
    this.setState({ showHideSidenav: css });
  }

  handleShow(id) {
    this.setState({ show: true, toDelete: id });
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShowCreate() {
    this.setState({ showCreate: true });
  }

  handleCloseCreate() {
    this.setState({ showCreate: false });
  }
  handleNumber(e) {
    this.setState({ number: e.target.value });
  }

  async componentDidMount() {
    console.log(this.props.token);
    let token = await Cookies.get('token') 
    var config = {
      headers: { Authorization: "Bearer " + token },
      timeout: 20000
    };
    // axios
    //   .get(API_URL + "hotels", config)
    //   .then(response => {
    //     console.log(response);
    //     if (response.data.message == "Token is not valid") {
    //       this.props.history.push("/");
    //     }
    //     var len = response.data.length;
    //     this.setState({ hotels: [] });
    //     for (let i = 0; i < len; i++) {
    //       let row = response.data[i];
    //       this.setState(prevState => ({
    //         hotels: [...prevState.hotels, row]
    //       }));
    //     }
    //   })
    //   .catch(error => {
    //     this.props.history.push("/");
    //     console.log(error);
    //   });
  }

  async delete() {
    console.log(this.state.toDelete);
    let token = await Cookies.get('token') 
    var config = {
      headers: { Authorization: "Bearer " + token },
      timeout: 20000
    };
    axios
      .delete(API_URL + "users/" + this.state.toDelete, config)
      .then(response => {
        console.log(response);
        window.location.reload();
      })
      .catch(error => {
        this.props.history.push("/");
        console.log(error);
      });
  }
  createHotel(e) {
    e.preventDefault();
    if (isNaN(this.state.number)) {
      this.setState({ error: "Invalid Mobile Number", error_div: true });
    } else if (isNaN(this.state.zip)) {
      this.setState({ error: "Invalid Zip code", error_div: true });
    } else {
      this.setState({ error_div: false });
      var bodyParameters = {
        email: this.state.email,
        password: this.state.password,
        address: this.state.address,
        zipcode: this.state.zip,
        mobile_number: this.state.number,
        first_name: this.state.first_name,
        last_name: this.state.last_name,
        role: "hotel"
      };
      console.log(bodyParameters);
      axios
        .post(API_URL + "users", bodyParameters, {
          timeout: 20000
        })
        .then(response => {
          console.log(response);
          window.location.reload();
        })
        .catch(error => {
          console.log(error);
          if (error.response.data) {
            this.setState({
              error: error.response.data.message,
              error_div: true
            });
            console.log(JSON.stringify(error));
          }
        });
    }
  }

  render() {
    let { showHideSidenav, showCreate } = this.state;
    const hotel_data = this.state.hotels.map(
      function(item, index) {
        return (
          <tr>
            <td>{index + 1}</td>
            <td>{item.first_name + " " + item.last_name}</td>
            <td>{item.email}</td>
            <td>{item.role}</td>
            <td>
              <a
                href="#"
                onClick={this.handleShow.bind(this, item._id)}
                ref="btn"
              >
                <IconContext.Provider value={{ color: "#B1ADAD", size: 22 }}>
                  <MdDeleteForever />
                </IconContext.Provider>
              </a>
              <div className={showHideSidenav}>
                <p className="block-text">Block</p>
                <p className="suspend-text">Suspend</p>
              </div>
            </td>
          </tr>
        );
      }.bind(this)
    );

    const ModalHotel = ({ handleClose, show, children }) => {
      const showHideClassName = show
        ? "modal display-block"
        : "modal display-none";

      return (
        <div className={showHideClassName}>
          <section className="modal-main">
            {children}
            <div className="button-row">
              <button onClick={this.delete.bind(this)}>Yes</button>{" "}
              <button onClick={handleClose}>Close</button>
            </div>
          </section>
        </div>
      );
    };
    const showHideClassNameCreate = showCreate
      ? "display-block"
      : "display-none";

    return (
      <div className="app-body">
      <Sidebar />
      <div className="main-box">
        <ModalHotel
          show={this.state.show}
          handleClose={this.handleClose.bind(this)}
          delete={this.delete.bind(this)}
        >
          <p>Are you sure you want to delete this hotel</p>
        </ModalHotel>
        <p className="admin-header">Hotel</p>
        <button
          className="admin-button"
          onClick={this.handleShowCreate.bind(this)}
        >
          <p>ADD HOTEL</p>
        </button>
        <div className={showHideClassNameCreate}>
          <p className="admin-header">Add Hotel</p>
          {this.state.error_div && (
            <div className="error">{this.state.error}</div>
          )}
          <form onSubmit={this.createHotel.bind(this)}>
            <div className="form-box">
              <div className="input-row">
                <p className="label-text">Name</p>
                <input
                  type="text"
                  value={this.state.name}
                  required
                  onChange={event =>
                    this.setState({ name: event.target.value })
                  }
                />
                <p className="label-text">Location</p>
                <input
                  type="text"
                  value={this.state.location}
                  required
                  onChange={event =>
                    this.setState({ location: event.target.value })
                  }
                />
                
              </div>
              <div className="input-row">
              <p className="label-text">Bio</p>
                <textarea
                  type="text"
                  value={this.state.bio}
                  required
                  onChange={event =>
                    this.setState({ bio: event.target.value })
                  }
                />
                
              </div>
              <div className="input-row">
                <p className="label-text">Check </p>
                <input
                  type="text"
                  value={this.state.number}
                  minLength={10}
                  maxLength={10}
                  onChange={event =>
                    this.setState({ number: event.target.value })
                  }
                />
                <p className="label-text">Zip code</p>
                <input
                  type="text"
                  value={this.state.zip}
                  minLength={5}
                  maxLength={5}
                  required
                  onChange={event => this.setState({ zip: event.target.value })}
                />
              </div>
            </div>
            <p className="label-text">Address</p>
            <input
              type="text"
              value={this.state.address}
              required
              onChange={event => this.setState({ address: event.target.value })}
            />
            <div className="input-row">
              {/* <button onClick={this.createHotel.bind(this)}>Create</button>{" "} */}
              <input type="submit" value="Create" className="button" />
              <div
                className="button"
                onClick={this.handleCloseCreate.bind(this)}
              >
                Close
              </div>
            </div>
          </form>
        </div>
        <table id="customers">
          <tbody>
            <tr>
              <th>S/N</th>
              <th>Hotel name</th>
              <th>Email</th>
              <th>Author</th>
              <th>Address</th>
              <th>Action</th>
            </tr>
            {hotel_data}
          </tbody>
        </table>
      </div></div>
    );
  }
}

export default Hotels;
