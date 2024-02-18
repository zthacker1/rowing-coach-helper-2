import "./Athlete.css";

export const Athlete = ({ athlete }) => {
  return (
    <section className="athlete" key={athlete.id}>
      <header>{athlete.name}</header>
    </section>
  );
};
