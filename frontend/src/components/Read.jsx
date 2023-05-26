import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Read() {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");

  const getData = async () => {
    const response = await fetch("http://localhost:5000");
    const result = await response.json();
    

    if (!response.ok) {
      setError(result.error);
    }
    if (response.ok) {
      console.log(response.ok);
      setData(result);
      setError("");
    }
  };

const handleDelete = async (id)=>{

  const response = await fetch(`http://localhost:5000/${id}`,{
    method:"DELETE"
  })

  const result = await response.json();

  if(!response.ok){
    setError(result.error)
  }

  if(response.ok) {
    setError("Deleted Successfully");
    setTimeout(() => {
      setError("");
      getData();
    }, 1000);
  }

}

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="container m-5">
      <h1 className="h1 text-center">All Contact</h1>
      {error && (
        <div className="alert alert-warning" role="alert">
          {error}
        </div>
      )}

      <div className="row">
        {data?.map((item) => (
          <div key={item._id} className="col-4">
            <div className="card m-3 shadow p-3 mb-5 bg-white rounded ">
              <div className="card-body">
                <h5 className="card-title">Name : {item.name}</h5>
                <h6 className="card-subtitle mb-2 text-muted">Email : {item.email}</h6>
                <h6 className="card-subtitle mb-2 text-muted">phone : {item.phone}</h6>

                <Link to={`/${item._id}`} className="card-link btn btn-success">
                  Update
                </Link>
                <a href="#" className="card-link btn btn-danger " onClick={()=>handleDelete(item._id)}>
                  Delete
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Read;
