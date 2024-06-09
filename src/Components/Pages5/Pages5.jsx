import React from "react";
import qrKey from "/public/img/qrkey.png";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import './Page5.css'
import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function Pages() {


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
      
    e.preventDefault();
      if (userInput === randomNumber) {
        toast.success("Success! You entered the correct number.");
      } else {
        toast.error("Error! The number you entered is incorrect.");
      }
      generateRandomNumber();
      setUserInput(""); 
    };
  


  return (
    <div className="contact_div ">
      <div>
        <div className="rounded-2xl w-96 bg-base-100 shadow-xl qrPar">
          <figure>
            <img src={qrKey} alt="QR key" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Comment on Telegram leave a comment or ask a question.
            </h2>
            <a href="https://t.me/samadovic_7" target="blank">
              samadovic_7
            </a>
          </div>
        </div>

        <h1 className="text-2xl pt-6 h1">A single contact center</h1>
        <p className="pt-3">+998712005400</p>
      </div>

      <div class="form-container">
        <form class="form">
          <div class="form-group">
            <label for="email">Your name</label>
            <input required="" name="email" id="email" type="text" />
          </div>
          <div class="form-group">
            <label for="email">Your email</label>
            <input name="name" id="email" type="name" />
          </div>
          <div class="form-group">
            <label for="textarea">Message</label>

            <textarea
              required=""
              cols="50"
              rows="10"
              id="textarea"
              name="textarea"
            >
              {" "}
            </textarea>
          </div>
          <p>Enter the 5-digit number shown below:</p>
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
          <button
            className="btn btn-glass"
            onClick={(e) => handleSubmit(e)}
            style={{
              padding: "5px 10px",
              marginLeft: "10px",
              fontSize: "16px",
            }}
          >
            Submit
          </button>
        </form>
      </div>
      <ToastContainer
        position="bottom-center"
        autoClose={3000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}

export default Pages;
