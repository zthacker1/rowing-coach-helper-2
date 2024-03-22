import { useEffect, useState } from "react";
import { CoachViews } from "./CoachViews";
import { AthleteViews } from "./AthleteViews";

export const ApplicationViews = () => {
  const [currentUser, setCurrentUser] = useState({ isACoach: "false" });

  useEffect(() => {
    const localRowUser = localStorage.getItem("row_user");
    const rowUserObject = JSON.parse(localRowUser);

    setCurrentUser(rowUserObject);
  }, []);

  return currentUser.isACoach === "true" ? <CoachViews /> : <AthleteViews />;
};
