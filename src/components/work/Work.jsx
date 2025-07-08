import React from "react";
import "./style.css";

import l1 from "./l1.jpg";
import l2 from "./l2.jpg";
import l3 from "./l3.jpg";
import l4 from "./l4.jpg";
import l5 from "./l5.jpg";
import l6 from "./l6.jpg";

const Work = () => {
  const gameData = [
    {
      image: l1,
      title: "Max Payne III",
      info: "Action-packed shooter!",
      text: "Follow Max through intense battles and dark storylines.",
    },
    {
      image: l2,
      title: "Mafia III",
      info: "1960s crime drama!",
      text: "Lead Lincoln Clay in a quest for revenge.",
    },
    {
      image: l3,
      title: "Watch Dogs II",
      info: "Hack the system!",
      text: "Explore San Francisco as a tech rebel.",
    },
    {
      image: l4,
      title: "FIFA 19",
      info: "Real football action!",
      text: "Play with real teams and players in stunning realism.",
    },
    {
      image: l5,
      title: "The Witcher",
      info: "Epic RPG adventure!",
      text: "Become Geralt in a magical, dangerous world.",
    },
    {
      image: l6,
      title: "Zelda: Breath of the Wild",
      info: "Explore Hyrule!",
      text: "Free-roam battles, puzzles, and secrets await.",
    },
  ];

  return (
    <div className="work">
      <div className="work-section-wrapper">
        <div className="work-section-top">
          <h1 className="primary-heading">Gaming is life!</h1>
          <p className="primary-text">
            We're passionate about creating immersive and captivating gaming
            experiences. Join us on a journey through unique worlds.
          </p>
        </div>

        <div className="work-section-bottom">
          <p className="lol">New releases!</p>

          {gameData.map((item, index) => (
            <div key={index} className="game-info">
              <img src={item.image} alt={item.title} />
              <h2>{item.title}</h2>
              <p>{item.text}</p>
              <p><strong>{item.info}</strong></p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
