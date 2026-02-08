import React from "react";
import "./VocabularyAZ.css";

import apple from "/workspaces/vivamos-test-new/Icons/cross.png";
import user from "/workspaces/vivamos-test-new/Icons/cross.png";
import home from "/workspaces/vivamos-test-new/Icons/cross.png";
import back from "/workspaces/vivamos-test-new/Icons/cross.png";
import sound from "/workspaces/vivamos-test-new/Icons/cross.png";
import menu from "/workspaces/vivamos-test-new/Icons/cross.png";

const letters = [
  "A","B","C","CH","D","E","F","G","H","I",
  "J","K","L","LL","M","N","Ñ","O","P","Q",
  "R","RR","S","T","U","V","W","X","Y","Z"
];

const VocabularyAZ = () => {
  return (
    <div className="vocab-page">
      
      {/* Top Left Icons */}
      <div className="top-left-icons">
        <img src={apple} alt="apple" />
        <img src={user} alt="user" />
        <img src={home} alt="home" />
      </div>

      {/* Top Right Icons */}
      <div className="top-right-icons">
        <img src={back} alt="back" />
        <img src={sound} alt="sound" />
        <img src={menu} alt="menu" />
      </div>

      {/* Main Card */}
      <div className="vocab-card">
        <h1>Vocabulario de la A-Z</h1>

        <div className="letters-grid">
          {letters.map((letter) => (
            <img
              key={letter}
              src={require(`../assets/letters/${letter}.png`)}
              alt={letter}
              className="letter-btn"
            />
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="footer">
        <span>Privacy Policy</span>
        <span>©2025 Vivamos Spanish LLC</span>
        <span>vivamosspanish.com</span>
      </div>

    </div>
  );
};

export default VocabularyAZ;
