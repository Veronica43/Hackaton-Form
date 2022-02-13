import "./App.css";

import { useState } from "react";
import FormOne from "./components/formOne/FormOne";
import FormTwo from "./components/formTwo/FormTwo";
import Profile from "./components/profile/Profile";

function App() {
  //state for steps
  const [step, setstep] = useState(1);

  //state for form data
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    about: "",
    country: "",
    city: "",
    stack: "",
    yearsExperience: "",
    workExperience: "",
    skills: "",
  });

  // function for going to next step
  const nextStep = () => {
    setstep(step + 1);
  };

  // function for going to previous step
  const prevStep = () => {
    setstep(step - 1);
  };

  // handling form input data by taking onchange value and updating our previous form data state
  const handleInputData = (input) => (e) => {
    const { value } = e.target;

    //updating for data state taking previous state and then adding new value to create new object
    setFormData((prevState) => ({
      ...prevState,
      [input]: value,
    }));
  };

  // javascript switch case to show different form in each step
  switch (step) {
    case 1:
      return (
        <div className="App">
          <div>
            <FormOne
              nextStep={nextStep}
              handleFormData={handleInputData}
              values={formData}
            />
          </div>
        </div>
      );

    case 2:
      return (
        <div className="App">
          <div>
            <FormTwo
              nextStep={nextStep}
              prevStep={prevStep}
              handleFormData={handleInputData}
              values={formData}
            />
          </div>
        </div>
      );

    case 3:
      return (
        <div className="App">
          <div>
            <Profile values={formData} />
          </div>
        </div>
      );

    default:
      return <div className="App"></div>;
  }
}

export default App;
