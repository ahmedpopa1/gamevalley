import React, { useEffect, useState } from "react";
import start from "./start.png";
import './style.css';
import Navbar from "../nav/Navbar";

const Profile = () => {
  const [previews, setPreviews] = useState(() => {
    const stored = localStorage.getItem("userImages");
    return stored ? JSON.parse(stored) : [start];
  });

  const handleFileChange = (e) => {
    if (e.target.files?.length > 0) {
      const newPreviews = Array.from(e.target.files).map((file) =>
        URL.createObjectURL(file)
      );
      setPreviews(newPreviews);
    }
  };

  useEffect(() => {
    localStorage.setItem("userImages", JSON.stringify(previews));
  }, [previews]);

  return (
    <>
      <Navbar />
      <div className="prof">
        <div className="top">
          <label className="profimg" htmlFor="imageUpload">
            <img src={previews[0]} alt="Profile" />
            <input
              id="imageUpload"
              type="file"
              accept="image/jpg, image/jpeg, image/png"
              onChange={handleFileChange}
            />
          </label>
        </div>
        <div className="desc">
          <span className="wel">Welcome dear!</span>
          This is your personalized profile, tailored to showcase your preferences,
          interests, and information. Welcome to your space!
        </div>
        <div className="proftitle">User Name:</div>
        <div className="proftitle">Phone Number:</div>
        <hr className="lol" />
        <div className="klam">
          Explore our latest car website update, introducing innovative navigation
          tools, enhanced vehicle comparison options, and an immersive virtual
          showroom experience for an unparalleled browsing journey!
        </div>
      </div>
    </>
  );
};

export default Profile;
