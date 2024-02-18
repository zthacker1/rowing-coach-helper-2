export const getNonCoachUsers = () => {
  return fetch(`http://localhost:8088/users?isACoach=false`).then((res) =>
    res.json()
  );
};

export const getCoachUsers = () => {
    return fetch(`http://localhost:8088/users?isACoach=true`).then((res) =>
      res.json()
    );
  };
export const getUserByEmail = (email) => {
  return fetch(`http://localhost:8088/users?email=${email}`).then((res) =>
    res.json()
  )
}

export const createUser = (coach) => {
  return fetch("http://localhost:8088/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(coach),
  }).then((res) => res.json())
}
