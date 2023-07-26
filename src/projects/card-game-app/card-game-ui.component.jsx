import Title from "../components/title/title.component";
import Button from "../components/button/button.component";
import React, { useState } from "react";
import Card from "../components/card-game/card-game.component";

import WarMan from "../assets/images/warMan.png"
import WarHorse from "../assets/images/warHorse.png"
import War from "../assets/images/war.png"
import "./card-game-ui.styles.scss";

const CardGameUI = () => {
  const [start, setStart] = useState(false);

  const startGame = () => {
    setStart(true);
  };

  document.body.style.background = "#170536";
  document.body.style.color = "#bab6bf";
  return (
    <div className={"container text-center"}>
      {!start ? (
        <section className="text-center">
          <Title text={"Game Card"} />
          <Button
            text={"Start"}
            btnClass={"btn cg-btn-success btn-lg px-4"}
            onClick={startGame}
          />

          <Title text={"Rules:"} classes={"fs-2 my-4"} />
          <ul className="list-unstyled text-center d-flex flex-column gap-2">
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
              voluptatum aliquam alias veritatis ratione aliquid sequi dolores
              quas culpa quo?
            </li>
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
              voluptatum aliquam alias veritatis ratione aliquid sequi dolores
              quas culpa quo?
            </li>
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
              voluptatum aliquam alias veritatis ratione aliquid sequi dolores
              quas culpa quo?
            </li>
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
              voluptatum aliquam alias veritatis ratione aliquid sequi dolores
              quas culpa quo?
            </li>
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
              voluptatum aliquam alias veritatis ratione aliquid sequi dolores
              quas culpa quo?
            </li>
          </ul>
        </section>
      ) : (
        <>
          <Title text={"0-1"} />
          <main className="container cg-container">
            <section className="player_1">
              <Card player={"player_1"} unitTypeName={"Sword Cavalry"} unitTypeImg={War} />
              <Card player={"player_1"} unitTypeName={"Spear Man"} unitTypeImg={WarMan} />
              <Card player={"player_1"} unitTypeName={"Sword Cavalry"} unitTypeImg={War} />
              <Card player={"player_1"} unitTypeName={"Spear Man"} unitTypeImg={WarMan} />
            </section>
            <section className="fog-of-war"></section>
            <section className="player_2">
              <Card player={"player_2"} unitTypeName={"Sword Cavalry"} unitTypeImg={WarHorse} />
              <Card player={"player_2"} unitTypeName={"Spear Man"} unitTypeImg={WarMan} />
              <Card player={"player_2"} unitTypeName={"Sword Cavalry"} unitTypeImg={WarHorse} />
              <Card player={"player_2"} unitTypeName={"Spear Man"} unitTypeImg={War} />
            </section>
          </main>
        </>
      )}
    </div>
  );
};

export default CardGameUI;
