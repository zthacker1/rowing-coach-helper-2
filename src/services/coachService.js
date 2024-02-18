export const getAllCoaches = () => {
    return fetch(`http://localhost:8088/coaches`).then((res) => res.json())
}