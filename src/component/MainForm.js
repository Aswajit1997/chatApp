import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const MainForm = () => {
  const [error, setError] = useState("");
  const [data, setData] = useState({ userName: "", room: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const validation = () => {
    if (!data.userName) {
      setError("Please enter your name");
      return false;
    }
    if (!data.room) {
      setError("Please select room");
      return false;
    }
    setError("");
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validation();
    if (isValid) {
        navigate(`/chat/${data.room}`,{state:data})
    }
  };
  return (
    <div className="px-3 py-4 shadow bg-white text-dark border rounded row">
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="form-group mb-4">
          <h2 className="text-warning mb-4">Welcome to ChatRoom</h2>
        </div>
        <div className="form-group mb-4">
          <input
            type="text"
            className="form-control bg-light"
            name="userName"
            placeholder="Enter name"
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="form-group mb-4">
          <select
            className="form-select bg-light"
            name="room"
            onChange={(e) => handleChange(e)}
          >
            <option value="">Select Room</option>
            <option value="gaming">Gaming</option>
            <option value="coding">Coding</option>
            <option value="socialMedia">socialMedia</option>
          </select>
        </div>
        <button type="submit" className="btn btn-warning w-100 mb-2">
          Submit
        </button>
        {error ? <small className="text-danger">{error}</small> : ""}
      </form>
    </div>
  );
};

export default MainForm;
