import React, { useState } from "react";
import "./formOne.css";
import validator from "validator";

// creating functional component ans getting props from app.js and destucturing them
const StepOne = ({ nextStep, handleFormData, values }) => {
  //creating error state for validation
  const [error, setError] = useState(false);

  const submitFormData = (e) => {
    e.preventDefault();

    // checking if value of full name and email is empty show error else take to step 2
    if (validator.isEmpty(values.fullName) || validator.isEmpty(values.email)) {
      setError(true);
    } else {
      nextStep();
    }
  };

  return (
    <div>
      <h1>Welcome to MWC</h1>
      <span>Let's build the future together...</span>
      <div className="form-container">
        <form onSubmit={submitFormData}>
          <input
            style={{ border: error ? "2px solid red" : "" }}
            name="fullName"
            defaultValue={values.fullName}
            type="text"
            placeholder="Full Name"
            onChange={handleFormData("fullName")}
          />

          <input
            style={{ border: error ? "2px solid red" : "" }}
            name="email"
            defaultValue={values.email}
            type="email"
            placeholder="Email"
            onChange={handleFormData("email")}
          />

          <textarea
            style={{ border: error ? "2px solid red" : "" }}
            name="about"
            defaultValue={values.about}
            type="text"
            placeholder="Tell us about you..."
            onChange={handleFormData("about")}
          />

          <input
            style={{ border: error ? "2px solid red" : "" }}
            name="country"
            defaultValue={values.country}
            type="text"
            placeholder="Country"
            onChange={handleFormData("country")}
          />

          <input
            style={{ border: error ? "2px solid red" : "" }}
            name="city"
            defaultValue={values.city}
            type="text"
            placeholder="City"
            onChange={handleFormData("city")}
          />

          <button type="submit">Continue</button>
        </form>
      </div>
    </div>
  );
};

export default StepOne;
