import React, { useState } from "react";
import {useNavigate} from "react-router-dom";

function Create() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();



  
  const handleSubmit = async (e) => {
    e.preventDefault();

    const addUser = { name, email, phone };

    const response = await fetch("http://localhost:5000/", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(addUser),
    });

  
    const result = await response.json();

    if (!response.ok) {
      console.log(result.error);
      setError(result.error);
    }
    if (response.ok) {
      console.log(result);
      setName("");
      setEmail("");
      setPhone("");
      setError("");
      navigate("/read")
    }
  };





  return (
    <>
      <div className="container mx-auto p-2 mt-5 custom-container shadow p-4 mb-5 bg-white rounded ">
        <form className="form" onSubmit={handleSubmit}>
          <h1 className="h1 text-center">Contact Information</h1>

         {error &&  <div className="alert alert-warning" role="alert">{error}</div>}

          <div className="mb-3">
            <label className="form-label m-2 fs-5">Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label className="form-label m-2 fs-5">Email address</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label className="form-label m-2 fs-5">Phone No.</label>
            <input
              type="number"
              className="form-control"
              placeholder="Enter phone no."
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>

          <div className="text-center ">
            <button type="submit" className="btn btn-primary m-3">
              Save
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Create;
