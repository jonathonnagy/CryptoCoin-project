import React, { useState, useMemo } from "react";
import Select from "react-select";
import countryList from "react-select-country-list";

const Profile = () => {
  const [value, setValue] = useState("");
  const options = useMemo(() => countryList().getData(), []);

  const changeHandler = (value) => {
    setValue(value);
  };
  return (
    <>
      <div className="wrapper-bg">
        <h1>Profile</h1>

        <p>First name: </p>
        <input type="text" id="first-name" placeholder="First name" />
        <p>Last name: </p>
        <input type="text" id="last-name" placeholder="Last name" />
        <p>Birthdate: </p>
        <input type="date" id="birthdate" />
        <p>Country: </p>
        <Select options={options} value={value} onChange={changeHandler} />
      </div>
    </>
  );
};

export default Profile;
