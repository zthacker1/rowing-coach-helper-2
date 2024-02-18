export const getAllAthletes = () => {
    return fetch(`http://localhost:8088/athletes`).then((res) => res.json())
}