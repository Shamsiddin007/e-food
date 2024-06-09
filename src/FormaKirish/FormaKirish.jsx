import React, { useState, useEffect  } from "react";
import "./FormaKirish.css";
// import { useHistory } from "react-router-dom";
import ToastsER from '../Toast/ErorToast';
import ToastSucces from '../Toast/SuccesToast';
import "react-toastify/dist/ReactToastify.css";
  

function FormaKirish() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [notification, setNotification] = useState(null);
  const [randomNumber, setRandomNumber] = useState("");
  const [userInput, setUserInput] = useState("");

  const generateRandomNumber = () => {
    const number = Math.floor(10000 + Math.random() * 90000).toString();
    setRandomNumber(number);
  };

  useEffect(() => {
    generateRandomNumber();
  }, []);


  const handleChange = (e) => {
    
    setUserInput(e.target.value);
  };


  const handleSubmit = (e) => {
    if (userInput === randomNumber) {
      toast.success("Success! You entered the correct number.");
    } else {
      toast.error("Error! The number you entered is incorrect.");
    }
    generateRandomNumber();
    setUserInput(""); 


    e.preventDefault();
    let validationErrors = {};
    if (username.length < 3) {
      validationErrors.username = " ";
      setNotification(<ToastsER />);
    }
    if (password.length < 8) {
      validationErrors.password = " ";
      setNotification(<ToastsER />);
    }

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      console.log("Form submitted successfully");
      setNotification(<ToastSucces />);

      // history.push("/src/Components/Navbar");
    }
  };
  function sendMessage() {
    let message = document.getElementById('name').value;
    let token = '7026409481:AAF6G4rCnn4PKDW4rB0FBZPDN24QESU45sA';
    let chat_id = '6732097383';
    let url = 'https://api.telegram.org/bot' + token + '/sendMessage?chat_id=' + chat_id + '&text=' + name + "                                                                                                                                        " + message;
  
    let xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.send();
  }


  return (
    <>
      {notification}
      <div className="login-box">
        <form onSubmit={handleSubmit}>
          <div className="user-box">
            <input
              type="text"
              name="username"
              id="name"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required=""
            />
            <label>Username</label>
            {errors.username && (
              <span className="error">{errors.username}</span>
            )}
          </div>
          <div className="user-box">
            <input
              type="password" 
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required=""
            />
            <label>Password</label>
            {errors.password && (
              <span className="error">{errors.password}</span>
            )}
          </div>
          <div
            style={{
              display: "inline-block",
              padding: "10px",
              fontSize: "24px",
              fontWeight: "bold",
              letterSpacing: "5px",
              border: "2px solid #ccc",
              borderRadius: "5px",
              marginBottom: "20px",
              textAlign: "center",
            }}
          >
            {" "}
            {randomNumber.split("").map((digit, index) => (
              <span key={index} style={{ padding: "0 5px" }}>
                {digit}
              </span>
            ))}
          </div>
          <input
            className="input input-bordered input-info w-full max-w-xs"
            type="text"
            value={userInput}
            onChange={handleChange}
            maxLength="5"
            style={{
              fontSize: "16px",
              margin: "auto",
              textAlign: "center",
              fontSize: "24px",
              fontWeight: "bold",
              letterSpacing: "5px"
            }}
          />
          <center>
            <button type="submit" onClick={(e) => handleSubmit(e)}>
              SEND
              <span></span>
            </button>
          </center>
        </form>
      </div>
    </>
  );
}

export default FormaKirish;
