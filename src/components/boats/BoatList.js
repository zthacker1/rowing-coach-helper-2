import { useEffect, useState } from "react";
import { getAllBoats } from "../../services/boatService";
import "./Boat.css";
import { Boat } from "./Boat";

export const BoatList = () => {
  const [allBoats, setAllBoats] = useState([]);

  useEffect(() => {
    getAllBoats().then((boatsArray) => {
      setAllBoats(boatsArray);
    });
  }, []);

  return (
    <div className="boats-container">
      <h2>Boats</h2>
      <article className="workouts">
        {allBoats.map((boat) => {
          return <Boat boat={boat} key={boat.id} />;
        })}
      </article>
    </div>
  );
};
