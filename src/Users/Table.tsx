import React, { useState, useEffect } from "react";
import { BsFillCheckCircleFill, BsPencil, BsTrash3Fill, BsPlusCircleFill } from "react-icons/bs";
import * as client from "./client";
import { User } from "./client";
export default function UserTable() {
    const [role, setRole] = useState("USER");
    const fetchUsersByRole = async (role: string) => {
        const users = await client.findUsersByRole(role);
        setRole(role);
        setUsers(users);
    };
    const [users, setUsers] = useState<User[]>([]);
    const [user, setUser] = useState<User>({
        _id: "", username: "", password: "", firstName: "",
        lastName: "", role: "USER", dob: "", email: ""
    });
    const createUser = async () => {
        if (user.password && user.username) {
            try {
                const newUser = await client.createUser(user);
                setUsers([newUser, ...users]);
            } catch (err) {
                console.log(err);
            }
        }
        else {
            console.log("All fields are required");
        }
    };
    const deleteUser = async (user: User) => {
        try {
            await client.deleteUser(user);
            setUsers(users.filter((u) => u._id !== user._id));
        } catch (err) {
            console.log(err);
        }
    };
    const selectUser = async (user: User) => {
        try {
            const u = await client.findUserById(user._id);
            setUser(u);
        } catch (err) {
            console.log(err);
        }
    };
    const updateUser = async () => {
        if (user.password && user.username) {
            try {
                await client.updateUser(user);
                setUsers(users.map((u) =>
                    (u._id === user._id ? user : u)));
            } catch (err) {
                user.firstName = "Error";
                setUser(user);
            }
        }
        else {
            console.log("All fields are required");
        }
    };


    const fetchUsers = async () => {
        const users = await client.findAllUsers();
        setUsers(users);
    };
    useEffect(() => { fetchUsers(); }, []);
    return (
        <div>
            <select
                onChange={(e) => fetchUsersByRole(e.target.value)}
                value={role || "USER"}
                className="form-control w-25 float-end"
            >
                <option value="USER">User</option>
                <option value="ADMIN">Admin</option>
                <option value="FACULTY">Faculty</option>
                <option value="STUDENT">Student</option>
            </select>
            <h1>User Table</h1>
            <table className="table">
                <thead>
                    <tr>
                        <td>
                            <h3>Username & Password</h3>

                            <input value={user.username} onChange={(e) =>
                                setUser({ ...user, username: e.target.value })} />
                            <input value={user.password} onChange={(e) =>
                                setUser({ ...user, password: e.target.value })} />
                        </td>
                        <td>
                            <h3>First Name</h3>
                            <input value={user.firstName} onChange={(e) =>
                                setUser({ ...user, firstName: e.target.value })} />
                        </td>
                        <td>
                            <h3>Last Name</h3>
                            <input value={user.lastName} onChange={(e) =>
                                setUser({ ...user, lastName: e.target.value })} />
                        </td>
                        <td>
                            <h3>Role</h3>
                            <select value={user.role} onChange={(e) =>
                                setUser({ ...user, role: e.target.value })}>
                                <option value="USER">User</option>
                                <option value="ADMIN">Admin</option>
                                <option value="FACULTY">Faculty</option>
                                <option value="STUDENT">Student</option>
                            </select>
                        </td>
                        <td>
                            <button onClick={() => updateUser()} >
                                <BsFillCheckCircleFill />
                            </button>
                            <button className="btn btn-warning me-2" onClick={() => createUser()} >
                                <BsPlusCircleFill />
                            </button>
                        </td>
                        <th>&nbsp;</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user: any) => (
                        <tr key={user._id}>
                            <td>{user.username}</td>
                            <td>{user.firstName}</td>
                            <td>{user.lastName}</td>
                            <td>{user.role}</td>
                            <td>
                                <button onClick={() => deleteUser(user)}>
                                    <BsTrash3Fill />
                                </button>
                                <button className="btn btn-warning me-2" onClick={() => selectUser(user)} >
                                    <BsPencil />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
