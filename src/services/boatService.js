export const getAllBoats = () => {
    return fetch(`http://localhost:8088/boats`).then((res) => res.json())
}