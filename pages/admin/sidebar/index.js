import React, { Component } from "react";
import { IconContext } from "react-icons";
import { MdViewQuilt } from "react-icons/md";
import { FaUsersCog, FaListAlt, FaUsers, FaMapMarkerAlt } from "react-icons/fa";
import { IoIosPricetags } from "react-icons/io";
// import { Link, withRouter } from 'react-router-dom';



class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = { apiResponse: "" };
  }

  // callAPI() {
  //     fetch("http://localhost:9000/testAPI")
  //         .then(res => res.text())
  //         .then(res => this.setState({ apiResponse: res }))
  //         .catch(err => err);
  // }

  // componentDidMount() {
  //     this.callAPI();
  // }

press(value){
  const {pathname} = this.props.location;
if(value != pathname){
  this.props.history.push(value);
}
}

  render() {
    const pathname = '';
    console.log(pathname+"   k")
     return (
      <div className="main-box-sidebar">
        {/* <img src={require("../../images/logo.png")} className="logo-image" /> */}
		<p className="hellix-medium-white-18"
    style={{color:'black'}}>Book24</p>

        <div className="line-div" />
        <button 
        onClick={this.press.bind(this, '/dashboard')}
      //  to="/dashboard" 
        className={pathname === '/dashboard' ? "route active-route" : "route inactive-route"}>
        {/* <button className={pathname === '/dashboard' ? "route active-route" : "route inactive-route"}> */}
        {pathname === '/dashboard' ? 
          <IconContext.Provider value={{ color: "#1281dd", size: 22 }}>
            <MdViewQuilt />
          </IconContext.Provider>
         :
         <IconContext.Provider value={{ color: "#757575", size: 22 }}>
            <MdViewQuilt />
          </IconContext.Provider>}
          
          <p className={pathname === '/dashboard' ? "active-text" : "inactive-text"}>Dashboard</p>
        {/* </button> */}
        </button>
        <button 
        onClick={this.press.bind(this, '/hotels')} 
        //to="/hotels" 
        className={pathname === '/hotels' ? "route active-route" : "route inactive-route"}>
        
        {pathname === '/hotels' ? <IconContext.Provider value={{ color: "#1281dd", size: 22 }}>
            <FaUsersCog />
          </IconContext.Provider> :<IconContext.Provider value={{ color: "#757575", size: 22 }}>
            <FaUsersCog />
          </IconContext.Provider>}
          <p className={pathname === '/hotels' ? "active-text" : "inactive-text"}>Hotels</p>
        </button>
        <button 
        onClick={this.press.bind(this, '/bookings')} 
     //   to="/bookings"
         className={pathname === '/bookings' ? "route active-route" : "route inactive-route"}>
        {pathname === '/bookings' ?           <IconContext.Provider value={{ color: "#1281dd", size: 22 }}>
            <FaListAlt />
          </IconContext.Provider> :           <IconContext.Provider value={{ color: "#757575", size: 22 }}>
            <FaListAlt />
          </IconContext.Provider>}
          <p className={pathname === '/bookings' ? "active-text" : "inactive-text"}>Bookings</p>
        </button>
        <button 
        onClick={this.press.bind(this, '/users')} 
        className={pathname === '/users' ? "route active-route" : "route inactive-route"}>
        {pathname === '/users' ?           <IconContext.Provider value={{ color: "#1281dd", size: 22 }}>
            <FaUsers />
          </IconContext.Provider> :           <IconContext.Provider value={{ color: "#757575", size: 22, marginRight:10 }}>
            <FaUsers />
          </IconContext.Provider>}
          <p className={pathname === '/users' ? "active-text" : "inactive-text"}>Users</p>
        </button>
        {/* <button 
        onClick={this.press.bind(this, '/dropbox')} 
        className={pathname === '/dropbox' ? "route active-route" : "route inactive-route"}>
        {pathname === '/dropbox' ?           <IconContext.Provider value={{ color: "#1281dd", size: 22 }}>
        <FaMapMarkerAlt />
          </IconContext.Provider> :           <IconContext.Provider value={{ color: "#757575", size: 22 }}>
          <FaMapMarkerAlt />
          </IconContext.Provider>}
          <p className={pathname === '/dropbox' ? "active-text" : "inactive-text"}>Dropboxes</p>
        </button> */}
        {/* <button 
        onClick={this.press.bind(this, '/pricelist')} 
        className={pathname === '/pricelist' ? "route active-route" : "route inactive-route"}>
        {pathname === '/pricelist' ?           <IconContext.Provider value={{ color: "#1281dd", size: 22 }}>
        <IoIosPricetags />
          </IconContext.Provider> :           <IconContext.Provider value={{ color: "#757575", size: 22 }}>
          <IoIosPricetags />
          </IconContext.Provider>}
          <p className={pathname === '/pricelist' ? "active-text" : "inactive-text"}>Pricelist</p>
        </button> */}
      </div>
    );
  }
}

export default Sidebar;
