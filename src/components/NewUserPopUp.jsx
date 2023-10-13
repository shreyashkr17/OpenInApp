import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./css/newUserPopUp.css";

function NewUserPopUp(props) {
  const [activeSection, setActiveSection] = useState(1);

  const [formData, setFormData] = useState({
    name:"",
    email:"",
    phone:"",
    instagramLink:"",
    youtubeLink:"",
  });

  const dispatch = useDispatch();

  const handleNextClick = () => {
    setActiveSection((prevSection) => prevSection + 1);
  };
  const handleBackClick = () => {
    setActiveSection((prevSection) => prevSection - 1);
  };

  const handleDoneClick = () => {
    // props.onClick(formData);
    dispatch({type:"AddFormData", payload:formData});
    // console.log(formData)
    props.closePopUp();
  }

  const handleInputChange = (event) => {
    // const {name, valueName} = event.target;

    setFormData((prevData) => ({
        ...prevData,
        [event.target.name]:event.target.value,
    }))
  }

  return (
    <div className="UserPopUp">
      <div className="PopUpNavbar">
        <div className="PopTitle">
          <h1>Add New Profile</h1>
        </div>
        <div className="PopTitleSvg" onClick={props.closePopUp}>
          <svg
            width="14"
            height="15"
            viewBox="0 0 14 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.250001 0.75L7 7.5M7 7.5L0.25 14.25M7 7.5L13.75 14.25M7 7.5L13.75 0.750001"
              stroke="#999CA0"
              stroke-width="0.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>
      <div className="PopUpBody">
        <div className="bodyOptionCOnt">
          {activeSection == 1 && (
            <>
            <div className="opt1">
                <h2>Basic</h2>
            </div>
            <div className="opt2">
                <h2>Contact</h2>
            </div>
            </>
          )}
          {activeSection == 2 && (
            <>
            <div className="opt2">
                <h2>Basic</h2>
            </div>
            <div className="opt1">
                <h2>Contact</h2>
            </div>
            </>
          )}
        </div>
        <div className="PopUpinputBody">
          {activeSection == 1 && (
            <>
              <label className="nameLabel">Enter Name*</label>
              <input
                type="text"
                className="NameInput"
                required="true"
                placeholder="Eg. John Doe"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
              />
              <label className="nameLabel">Enter Email*</label>
              <input
                type="email"
                className="NameInput"
                required="true"
                placeholder="Eg. John@xyz.com"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
              />
              <label className="nameLabel">Enter Phone*</label>
              <input
                type="text"
                className="NameInput"
                required="true"
                placeholder="Eg. 9123456789"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
              />
            </>
          )}
          {activeSection == 2 && (
            <>
            <label className="nameLabel">Instagram Link* (Optional)</label>
              <input
                type="text"
                className="NameInput"
                required="true"
                placeholder="Eg. John Doe"
                name="instagramLink"
                value={formData.instagramLink}
                onChange={handleInputChange}
              />
            <label className="nameLabel">You Tube Link* (Optional)</label>
            <input
                type="text"
                className="NameInput"
                required="true"
                placeholder="Eg. John Doe"
                name="youtubeLink"
                value={formData.youtubeLink}
                onChange={handleInputChange}
            />
            </>
          )}
          <div className="popUpNextButton">
            {activeSection == 1 && (
                <button className="doneBtn1" onClick={handleNextClick}>Next</button>
            )}
            {activeSection == 2 && (
                <>
                <button className="backBtn" onClick={handleBackClick}>Back</button>
                <button className="doneBtn2" onClick={handleDoneClick}>Done</button>
                </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewUserPopUp;
