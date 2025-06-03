import React, { useEffect, useState } from "react";
import "./Users.css";

const mockUsers = [
  { id: 1, name: "Alice Johnson", email: "alice@email.com", role: "Recruiter" },
  { id: 2, name: "Bob Smith", email: "bob@email.com", role: "Candidate" },
  {
    id: 3,
    name: "Carol Lee",
    email: "carol@email.com",
    role: "Hiring Manager",
  },
];

const Users = () => {
  const [users, setUsers] = useState([]);
  const [form, setForm] = useState({ name: "", email: "", role: "" });

  useEffect(() => {
    setUsers(mockUsers);
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.role) return;
    const newUser = {
      id: users.length ? users[users.length - 1].id + 1 : 1,
      ...form,
    };
    setUsers([...users, newUser]);
    setForm({ name: "", email: "", role: "" });
  };

  return (
    <div className="users-container">
      <h2 className="users-title">Register New User</h2>
      <form className="users-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
        />
        <select name="role" value={form.role} onChange={handleChange}>
          <option value="">Select Role</option>
          <option value="Recruiter">Recruiter</option>
          <option value="Candidate">Candidate</option>
          <option value="Hiring Manager">Hiring Manager</option>
        </select>
        <button type="submit">Register</button>
      </form>

      <h2 className="users-title">Pipeline Users</h2>
      <table className="users-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          {users.length === 0 ? (
            <tr>
              <td colSpan="3" className="users-empty">
                No users found.
              </td>
            </tr>
          ) : (
            users.map((user) => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
