export const Coach = ({ coach }) => {
    return (
      <section className="coach" key={coach.id}>
        <header>{coach.name}</header>
        <footer>
          <div>Email: {coach.email}</div>
        </footer>
      </section>
    );
  };
  