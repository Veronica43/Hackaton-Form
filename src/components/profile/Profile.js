import { useEffect, useState } from "react";
import "./profile.css";
const Final = ({ values }) => {
  //destructuring the object from values
  const [url, setUrl] = useState("");

  useEffect(() => {
    fetch(`https://robohash.org/${fullName}`)
      .then((result) => {
        setUrl(result.url);
      })
      .catch((error) => console.log(error));
    //eslint-disable-next-line
  }, []);
  const {
    fullName,
    email,
    about,
    country,
    city,
    stack,
    yearsExperience,
    workExperience,
    skills,
  } = values;
  return (
    <div className="main">
      <img src={url} alt="Random generated robot pic" />
      <h2>
        Thank you
        <span>See you soon!!</span>
      </h2>

      <div className="container">
        <h2>{fullName}</h2>
        <h2>{email} </h2>
        <h4>
          About me:
          <strong> {about}</strong>
        </h4>{" "}
        <h4>
          I'm from:
          <strong> {country}</strong>
        </h4>{" "}
        <h4>
          My city is:
          <strong> {city}</strong>
        </h4>{" "}
        <h4>
          My role is:
          <strong> {stack}</strong>
        </h4>{" "}
        <h4>
          I have:
          <strong> {yearsExperience} years of experience</strong>
        </h4>{" "}
        <h4>
          My work:<strong> {workExperience}</strong>
        </h4>{" "}
        <h4>
          My Skills:
          <strong> #{skills}</strong>
        </h4>{" "}
      </div>
    </div>
  );
};

export default Final;
