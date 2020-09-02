import React, { Component } from "react";
import InputField from "../customs/InputField";
import { nameRex, emailRex, phoneRex, addressRex } from "../constants/regExp";

export default class RegistrationForm extends Component {
  state = {
    // users: getData("userList") ? getData("userList") : [],
    user: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      address: "",
    },
    formErrors: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      address: "",
    },
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    const { firstName, lastName, email, phone, address } = this.state.user;
    let formErrors = { ...this.state.formErrors };
    switch (name) {
      case "firstName":
        formErrors.firstName = firstName.match(nameRex)
          ? null
          : "your first name must more than 2 characters!";
        break;
      case "lastName":
        formErrors.lastName = lastName.match(nameRex)
          ? null
          : "your last name must more than 2 characters!";
        break;
      case "email":
        formErrors.email = email.match(emailRex)
          ? null
          : "your email id is not valid!";
        break;
      case "phone":
        formErrors.phone = phone.match(phoneRex)
          ? null
          : "your phone number is invalid!";
        break;
      case "address":
        formErrors.address = address.match(addressRex)
          ? null
          : "you must input 7 to 40 characrters!";
        break;
      default:
        break;
    }
    this.setState({
      user: {
        ...this.state.user,
        [name]: value,
      },
      formErrors: formErrors,
    });
  };

  render() {
    //console.log(this.state.user);
    const { firstName, lastName, email, phone, address } = this.state.user;
    const { formErrors } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit} style={styles.form}>
          <InputField
            type="text"
            value={firstName}
            name="firstName"
            label="First Name:"
            placeHolder="Enter your First Name here!"
            changeHandler={this.handleChange}
            error={formErrors.firstName}
          />
          <InputField
            type="text"
            value={lastName}
            name="lastName"
            label="Last Name: "
            placeHolder="Enter your Last Name here!"
            changeHandler={this.handleChange}
            error={formErrors.lastName}
          />
          <InputField
            type="text"
            value={email}
            name="email"
            label="Email: "
            placeHolder="Enter your Name here!"
            changeHandler={this.handleChange}
            error={formErrors.email}
          />
          <InputField
            type="text"
            value={phone}
            name="phone"
            label="Phone: "
            placeHolder="Enter your Contact Number!"
            changeHandler={this.handleChange}
            error={formErrors.phone}
          />
          <InputField
            type="text"
            value={address}
            name="address"
            label="Address: "
            placeHolder="What is your address?"
            changeHandler={this.handleChange}
            error={formErrors.address}
          />
          <button style={styles.submitBtn}>submit</button>
        </form>
      </div>
    );
  }
}

const styles = {
  form: {
    minWidth: "70%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: "auto",
    paddingTop: "3rem",
  },
  submitBtn: {
    minWidth: "120px",
    backgroundColor: "white",
    color: "#29ade5",
    border: "1px solid #29ade5",
    padding: "5px",
    margin: "10px",
  },
};
