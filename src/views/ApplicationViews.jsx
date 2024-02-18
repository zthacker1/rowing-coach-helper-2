import React, { Component, useEffect, useState } from "react";
import { WorkoutList } from "../components/workouts/WorkoutList";
import { Outlet, Route, Routes } from "react-router-dom";
import { NavBar } from "../components/navbar/NavBar";
import { AthleteList } from "../components/athletes/AthleteList";
import { BoatList } from "../components/boats/BoatList";
import { CoachList } from "../components/coaches/CoachList";
import { Welcome } from "../components/welcome/Welcome";

export const ApplicationViews = () => {
  const [currentUser, setCurrentUser] = useState()

  useEffect(() => {
    const localRowUser = localStorage.getItem("row_user")
    const rowUserObject = JSON.parse(localRowUser)

    setCurrentUser(rowUserObject)
  }, [currentUser])


  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <NavBar />
              <Outlet />
            </>
          }
        >
          <Route index element={<Welcome />} />;
          <Route path="workouts" element={<WorkoutList currentUser={currentUser} />} />;
          <Route path="athletes" element={<AthleteList />} />;
          <Route path="boats" element={<BoatList />} />;
          <Route path="coaches" element={<CoachList />} />;
        </Route>
      </Routes>
    </>
  );
};
