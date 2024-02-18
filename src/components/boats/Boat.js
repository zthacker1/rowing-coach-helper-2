export const Boat = ({ boat }) => {
  return (
    <section className="boat" key={boat.id}>
      <header>{boat.name}</header>
      <div>{boat.description}</div>
      <footer>
        <div>Size (Rowers): {boat.size}</div>
        <div>Lineup:</div>
        <div>Workout:</div>
      </footer>
    </section>
  );
};
