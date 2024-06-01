import React, { useState } from "react";

function ModalCart() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const validateEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newErrors = {};

    if (!name) {
      newErrors.name = "Name is required.";
    } else if (name.length < 3) {
      newErrors.name = "Name must be at least 3 characters long.";
    }

    if (!age) {
      newErrors.age = "Age is required.";
    } else if (!/^\d+$/.test(age)) {
      newErrors.age = "Age must be a number.";
    } else if (parseInt(age, 10) <= 0) {
      newErrors.age = "Age must be a positive number.";
    }

    if (!email) {
      newErrors.email = "Email is required.";
    } else if (!validateEmail(email)) {
      newErrors.email = "Email is invalid.";
    }

    if (!password) {
      newErrors.password = "Password is required.";
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters long.";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // No errors, proceed with form submission (e.g., call an API)
      console.log("Form submitted", { name, age, email, password });

      // Clear the form fields
      setName("");
      setAge("");
      setEmail("");
      setPassword("");
    }
  };

  return (
    <>
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg">Hello!</h3>

          {/* Name Input */}
          <label className="input input-bordered flex items-center gap-2 m-2">
            Name:
            <input
              type="text"
              className="grow"
              placeholder="Daisy"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          {errors.name && <p className="text-red-500 ml-2">{errors.name}</p>}

          {/* Age Input */}
          <label className="input input-bordered flex items-center gap-2 m-2">
            Age:
            <input
              type="text"
              className="grow"
              placeholder="18"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </label>
          {errors.age && <p className="text-red-500 ml-2">{errors.age}</p>}

          {/* Email Input */}
          <label className="input input-bordered flex items-center gap-2 m-2">
            Email:
            <input
              type="text"
              className="grow"
              placeholder="daisy@site.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          {errors.email && <p className="text-red-500 ml-2">{errors.email}</p>}

          {/* Password Input */}
          <label className="input input-bordered flex items-center gap-2 m-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-4 h-4 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                clipRule="evenodd"
              />
            </svg>
            <input
              type="password"
              className="grow"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          {errors.password && <p className="text-red-500 ml-2">{errors.password}</p>}

          {/* Submit Button */}
          <div className="flex flex-col gap-2 m-2">
            <button className="btn btn-outline btn-success" onClick={handleSubmit}>
              Submit
            </button>
          </div>
        </div>
      </dialog>
    </>
  );
}

export default ModalCart;
