export default function Tables() {
  const people = [
    {
      name: "Lindsay Walton",
      title: "Front-end Developer",
      email: "lindsay.walton@example.com",
      role: "Member",
    },
    {
      name: "Lindsay Walton",
      title: "Front-end Developer",
      email: "lindsay.walton@example.com",
      role: "Member",
    },
  ];
  return (
    <section>
      <h2>Tables</h2>
      <div className="p-2 border">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Title</th>
              <th>Email</th>
              <th>Role</th>
              <th>
                <span className="sr-only">Edit</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {people.map((person, i) => (
              <tr key={i}>
                <td>{person.name}</td>
                <td className="on-background-light">{person.title}</td>
                <td className="on-background-light">{person.email}</td>
                <td className="on-background-light">{person.role}</td>
                <td className="on-background-light">
                  <button className="btn-borderless">Edit</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
