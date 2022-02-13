import React, { useState } from "react";

import validator from "validator";

// creating functional component ans getting props from app.js and destucturing them
const StepTwo = ({ nextStep, handleFormData, prevStep, values }) => {
  //creating error state for validation
  const [error, setError] = useState(false);

  // after form submit validating the form data using validator
  const submitFormData = (e) => {
    e.preventDefault();

    // checking if value of stack and skills is empty show error else take to next step
    if (validator.isEmpty(values.stack) || validator.isEmpty(values.skills)) {
      setError(true);
    } else {
      nextStep();
    }
  };
  return (
    <div>
      <h1>Welcome to MWC</h1>
      <span>It Always seems impossible until it's done!</span>
      <div className="form-container">
        <form onSubmit={submitFormData} noValidate autoComplete="off">
          <input
            style={{ border: error ? "2px solid red" : "" }}
            type="text"
            placeholder="Role"
            onChange={handleFormData("stack")}
          />

          <input
            style={{ border: error ? "2px solid red" : "" }}
            type="number"
            placeholder="How many years of experience do you have?"
            onChange={handleFormData("yearsExperience")}
          />

          <textarea
            style={{ border: error ? "2px solid red" : "" }}
            name="workExperience"
            type="text"
            placeholder="Tell us about you work(Companies,your projects...)"
            onChange={handleFormData("workExperience")}
          />

          <input
            style={{ border: error ? "2px solid red" : "" }}
            type="text"
            placeholder="Tell us your Skills"
            onChange={handleFormData("skills")}
          />

          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <button onClick={prevStep}>Previous</button>

            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default StepTwo;
