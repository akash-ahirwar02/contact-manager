import React, { useState , useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

function Update() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [error, setError] = useState();

  const {id} = useParams();
  const navigate = useNavigate();


  const getSingleData = async () => {
    const response = await fetch(`http://localhost:5000/${id}`);
    const result = await response.json();
    if (response.ok) {
      setName(result.name);
      setEmail(result.email);
      setPhone(result.phone);
    }
  };



  const handelUpdate= async(e)=>{



    e.preventDefault();
    const updatedUser = { name, email, phone };
    console.log(updatedUser);
    const response = await fetch(`http://localhost:5000/edit/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedUser),
    });

    const result = await response.json();
    if (response.ok) {
      setError("");
      navigate("/read");
    }
    if (!response.ok) {
      console.log(result.error);
      setError(result.error);
    }


  }


  useEffect(() => {
    getSingleData();
  }, []);



  return (
    <>
    <div className="container mx-auto p-2 mt-5 custom-container  ">
      <form className="form" onSubmit={handelUpdate}>
        <h1 className="h1 text-center">Update Contact</h1>

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
          <label className="form-label m-2 fs-5">phone</label>
          <input
            type="number"
            className="form-control"
            placeholder="Enter phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>

        <div className="text-center ">
          <button type="submit" className="btn btn-primary m-3">
            Update
          </button>
        </div>
      </form>
    </div>
  </>
  )
}

export default Update
