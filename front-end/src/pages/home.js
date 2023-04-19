import React, { Component } from "react";
import { AppointmentForm } from "../components/appointmentForm";
import { Card } from "../components/card";
import { Nav } from "../components/nav";
import { Notification } from "../components/notification";
import { NotificationScreen } from "../components/notificationScreen";
import { ProfileImage } from "../components/profileImg";
import { Searchinput } from "../components/searchInput";
import { User } from "../components/user";
import { MedicalCross } from "../svg";
import { getLocation } from "../utils/functions/location";
// import profileImg from "";

class Home extends Component {
  state = {
    showNotification: false,
    openForm: false,
  };

  componentDidMount() {
    getLocation();
  }

  render() {
    return (
      <div className="container">
        <div className="header">
          <ProfileImage src={"assets/R.jfif"} />
          <Notification
            handleOnClick={() =>
              this.setState({ showNotification: !this.state.showNotification })
            }
          />
        </div>
        <User username="Emilia" />
        <Searchinput placeholder="search..." />
        <Card />
        <div
          className="book-appointment"
          onClick={() => this.setState({ openForm: !this.state.openForm })}
        >
          <MedicalCross height={50} width={50} />
          <span></span>
          <p>Book appointment</p>
        </div>
        {/* appointment form */}
        {this.state.openForm && <AppointmentForm />}

        {/* notification container*/}
        {this.state.showNotification && <NotificationScreen />}

        <Nav
          handleOnClick={() =>
            this.setState({ openForm: false, showNotification: false })
          }
        />
      </div>
    );
  }
}

export default Home;
