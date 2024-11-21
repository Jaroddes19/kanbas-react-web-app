// import AccountNavigation from "./Navigation";

// function Account() {
//   return (
//     <div className="d-flex">
//       <div className="d-none d-md-block">
//         <AccountNavigation />
//       </div>
//       <div className="flex-fill">

//         <div className="row">
//           <h3> Jarod DeSousa's profile</h3>
//           <hr></hr>
//         </div>
//         <h1>Jarod DeSousa</h1>

//         <h3>Contact</h3>
//         No registered contact information. You can add some on the <a href="#">settings</a> page.

//         <h3>Biography</h3>
//         Student at Northeastern.

//         <h3>Links</h3>
//         <a href="https://www.linkedin.com/in/jarod-desousa/">LinkedIn</a><br />
//         <form action="/Kanbas/Account/Profile/Edit/screen.html">
//           <input type="submit" value="Edit Profile"></input>
//         </form>
//       </div>
//     </div>
//   );
// }
import Signin from "../../Users/Signin";
import Profile from "../../Users/Profile";
import UserTable from "../../Users/Table";
import { Routes, Route, Navigate } from "react-router-dom";
import Signup from "../../Users/Signup";
export default function Account() {
  return (
    <div className="container-fluid">
      <Routes>
        <Route path="/" element={<Navigate to="/Kanbas/Account/Profile" />} />
        <Route path="/Signin" element={<Signin />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Admin/Users" element={<UserTable />} />
      </Routes>
    </div>
  );
}