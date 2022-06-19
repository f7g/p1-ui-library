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
  // More people...
];

export default function Tables() {
  return (
    <section>
      <h2>Tables</h2>
      <div className="p-2 border">
        <table className="table">
          <thead className="thead">
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Title</th>
              <th scope="col">Email</th>
              <th scope="col">Role</th>
              <th scope="col">
                <span className="sr-only">Edit</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {people.map((person) => (
              <tr key={person.email}>
                <td>{person.name}</td>
                <td className="on-background-light">{person.title}</td>
                <td className="on-background-light">{person.email}</td>
                <td className="on-background-light">{person.role}</td>
                <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium">
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
