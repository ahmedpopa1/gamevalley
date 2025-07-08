/* eslint-disable jsx-a11y/alt-text */
import "./style.css";
import React from "react";
import productsSchema from "../Search/Cars";
import Rate from "./rate";
import Navbar from "../nav/Navbar";

export default function SingleItem(itemid) {
  return (
    <>
      <Navbar />
      {productsSchema
        .filter((e) => {
          return e.id.includes(itemid.id);
        })
        .map((e) => {
          return (
            <>
              <div className="model">
                <h1>
                  <p>
                    {e.model} {e.year}
                  </p>
                </h1>
                <h2>{e.body_style}</h2>
                <ul>
                  <li>about : {e.about}</li>
                </ul>
              </div>
              <div className="body">
                <div className="itemPhoto">
                  <img src={e.photo}></img>
                  <br />
                </div>
              </div>
              <br />

              <div className="rate">
                <Rate r={e.rate / 2} />
              </div>
            </>
          );
        })}
    </>
  );
}
