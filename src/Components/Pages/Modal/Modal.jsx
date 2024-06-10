import React, { useState } from "react";
import ToastEr from "/src/Toast/ErorToast"
import ToastSucces from '/src/Toast/SuccesToast';



const MyModal = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [notification, setNotification] = useState(null);

  const validateEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };


  const handleSubmit = (event) => {
    event.preventDefault();
    const newErrors = {};
  
    if (!email) {
      newErrors.email = "Enter your email address.";
      setNotification(<ToastEr />);
    } else if (!validateEmail(email)) {
      newErrors.email = "Email is invalid.";
      setNotification(<ToastEr />);
    }
  
    if (!username) {
      newErrors.username = "Please enter your name.";
    } else if (username.length < 3) {
      setNotification(<ToastSucces />);
      newErrors.username = "Username must be at least 3 characters long.";
      setNotification(<ToastEr />);
    }
  
    if (!password) {
      newErrors.password = "Enter your password.";
      setNotification(<ToastEr />);
    } else if (password.length < 8) {
      newErrors.password = "Password must be at least 8  characters long.";
      setNotification(<ToastEr />);
    }
  
    setErrors(newErrors);
  
    if (Object.keys(newErrors).length === 0) {
      console.log("Form submitted", { email, username, password });
      setNotification(<ToastSucces />);
      setEmail("");
      setUsername("");
      setPassword("");
      setErrors({});
    }
  
    setTimeout(() => {
      setNotification(null);
    }, 5000); 
  };
  

  return (
    <>
        {notification}
        <dialog id="my_modal_3" className="modal">
          <div className="modal-box">
            <form method="dialog">
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </button>
            </form>
            <h3 className="font-bold text-lg">Hello!</h3>
            {/* Email Input */}
            <label className="input input-bordered flex items-center m-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input
                type="text"
                className="grow ml-2"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
            {errors.email && <p className="text-red-500 ml-2">{errors.email}</p>}

            {/* Username Input */}
            <label className="input input-bordered flex items-center m-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
              </svg>
              <input
                type="text"
                className="grow ml-2"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </label>
            {errors.username && <p className="text-red-500 ml-2">{errors.username}</p>}

            {/* Password Input */}
            <label className="input input-bordered flex items-center m-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path
                  fillRule="evenodd"
                  d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                  clipRule="evenodd"
                />
              </svg>
              <input
                type="password"
                className="grow ml-2"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
            {errors.password && <p className="text-red-500 ml-2">{errors.password}</p>}

            {/* Button Container */}
            <div className="flex flex-col gap-2 m-2">
              {/* Success Button */}
              <button className="btn btn-outline btn-success" onClick={handleSubmit}>
                Success
              </button>
            </div>
          </div>
        </dialog>
    </>
  );
};

export default MyModal;
