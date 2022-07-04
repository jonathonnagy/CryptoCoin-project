import React, { useState, useMemo, useEffect } from "react";
import Select from "react-select";
import countryList from "react-select-country-list";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { makeStyles } from "@mui/styles";
import http from "axios";
import { useAuth } from "../providers/auth";

const useStyles = makeStyles({
  input: {
    backgroundColor: "white",
  },
});

const Profile = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [birdthDate, setBirdthDate] = useState(null);
  const [country, setCountry] = useState("");
  const classes = useStyles();
  const { user } = useAuth();

  const options = useMemo(() => countryList().getData(), []);

  const changeHandler = (value) => {
    setCountry(value);
  };
  console.log(firstName, lastName, birdthDate, country);
  const saveProfileData = async () => {
    try {
      const response = await http.post(
        "http://localhost:4000/api/user/save-profile",
        {
          firstName,
          lastName,
          birdthDate,
          country: country.label,
          user,
        }
      );

      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getProfileData = async () => {
    const response = await http.get() //get profile data from DB
  }

  useEffect(() => {
    getProfileData()
  }, [])
  

  return (
    <>
      <div className="wrapper-bg">
        <h1>Profile</h1>

        <div className="form">
          <div className="firstname">
            <label className="form__label" htmlFor="firstName">
              First Name:{" "}
            </label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              value={firstName}
              className="form__input"
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="firstName"
            />
          </div>

          <div className="lastname">
            <label className="form__label" htmlFor="lastName">
              Last Name:{" "}
            </label>
            <input
              type="text"
              name="lastName"
              id="lastName"
              value={lastName}
              className="form__input"
              onChange={(e) => setLastName(e.target.value)}
              placeholder="LastName"
            />
          </div>

          <div className="birdthDate">
            <label className="form__label" htmlFor="birdthDate">
              Birdth date:{" "}
            </label>

            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DatePicker
                label="Birdth date"
                value={birdthDate}
                onChange={(newValue) => {
                  setBirdthDate(newValue.toISOString().substring(0, 10));
                }}
                renderInput={(params) => <TextField {...params} />}
                InputProps={{
                  className: classes.input,
                }}
              />
            </LocalizationProvider>

            {/* <input type="date" name="" id="" /> */}
            {/* <input
              type="text"
              name=""
              id="birdthDate"
              value={birdthDate}
              className="form__input"
              onChange={(e) => setBirdthDate(e.target.value)}
              placeholder="birdthDate"
            /> */}
          </div>
          <div className="country">
            <label className="form__label" htmlFor="country">
              Country:{" "}
            </label>
            <Select
              options={options}
              value={country}
              id="country"
              onChange={changeHandler}
            />
          </div>
          <Button variant="contained" onClick={saveProfileData}>
            Save
          </Button>
        </div>
      </div>
    </>
  );
};

export default Profile;
