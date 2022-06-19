export default function InputGroups() {
  return (
    <section>
      <h2>Input Groups</h2>
      <div className="border p-2 max-w-lg">
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" placeholder="Jane Smith" />
        </div>
      </div>
    </section>
  );
}
