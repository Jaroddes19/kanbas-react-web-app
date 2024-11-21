import * as client from "./client";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { User } from "./client";
import "./profile.css";
export default function Profile() {
    const [profile, setProfile] = useState<User>({
        _id: "", username: "", password: "",
        firstName: "", lastName: "", dob: "", email: "", role: "USER"
    });
    const navigate = useNavigate();
    const fetchProfile = async () => {
        try{
        const account = await client.profile();
        setProfile(account);
        } catch (err) {
            navigate("/Kanbas/Account/Signin");
        }
    };
    const save = async () => {
        await client.updateUser(profile);
    };
    const signout = async () => {
        await client.signout();
        navigate("/Kanbas/Account/Signin");
    };

    useEffect(() => {
        fetchProfile();
    }, []);
    return (
        <div className="profile-container">
        <h1>Profile</h1>
        <form className="profile-form">
            {profile ? (
                <>
                    <label htmlFor="username">Username</label>
                    <input id="username" value={profile.username} onChange={(e) => setProfile({ ...profile, username: e.target.value })} />

                    <label htmlFor="password">Password</label>
                    <input id="password" value={profile.password} onChange={(e) => setProfile({ ...profile, password: e.target.value })} />

                    <label htmlFor="firstName">First Name</label>
                    <input id="firstName" value={profile.firstName} onChange={(e) => setProfile({ ...profile, firstName: e.target.value })} />

                    <label htmlFor="lastName">Last Name</label>
                    <input id="lastName" value={profile.lastName} onChange={(e) => setProfile({ ...profile, lastName: e.target.value })} />

                    <label htmlFor="dob">Date of Birth</label>
                    <input id="dob" type="date" value={profile.dob} onChange={(e) => setProfile({ ...profile, dob: e.target.value })} />

                    <label htmlFor="email">Email</label>
                    <input id="email" value={profile.email} onChange={(e) => setProfile({ ...profile, email: e.target.value })} />

                    <label htmlFor="role">Role</label>
                    <select id="role" value={profile.role} onChange={(e) => setProfile({ ...profile, role: e.target.value })}>
                        <option value="USER">User</option>
                        <option value="ADMIN">Admin</option>
                        <option value="FACULTY">Faculty</option>
                        <option value="STUDENT">Student</option>
                    </select>
                </>
            ) : "Loading..."}

            <div className="button-group">
                <button type="button" onClick={save}>Save</button>
                <button type="button" onClick={signout}>Signout</button>
                <Link to="/Kanbas/Account/Admin/Users" className="btn btn-warning w-100">Users</Link>
            </div>
        </form>
    </div>
    );
}

