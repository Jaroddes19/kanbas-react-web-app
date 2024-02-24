import KanbasNavigation from "./Navigation";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import NavigationScreen from "./Navigation/screen";
import Account from "./Account";
function Kanbas() {
  return (
    <div>
      <div className="d-flex">
        <div className="d-none d-sm-block">
          <KanbasNavigation />
        </div>
        <div style={{ flexGrow: 1 }}>
          <Routes>
            <Route path="/" element={<Navigate to="Dashboard" />} />
            <Route path="Account/*" element={<Account/>} />
            <Route path="Dashboard" element={<Dashboard />} />
            <Route path="Courses/*" element={<h1>Courses</h1>} />
            <Route path="Courses/:courseId/*" element={<Courses />} />
            <Route path="Navigation" element={<NavigationScreen />} />
          </Routes>

        </div>
      </div>
    </div>
  );
}

export default Kanbas;