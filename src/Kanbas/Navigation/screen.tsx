import { Link, useLocation, useNavigate } from "react-router-dom";
import "./index.css";
import { FaTachometerAlt, FaRegUserCircle, FaBook, FaRegCalendarAlt, FaInbox, FaRegClock, FaCameraRetro, FaGlobe, FaInfoCircle, FaTimes } from "react-icons/fa";
function KanbasNavigationScreen() {
  const links = [
    { label: "Account", icon: <FaRegUserCircle className="fs-2" />, redirect: "Account/Profile" },
    { label: "Dashboard", icon: <FaTachometerAlt className="fs-2" />, redirect: "Dashboard" },
    { label: "Courses", icon: <FaBook className="fs-2" />, redirect: "Dashboard" },
    { label: "Calendar", icon: <FaRegCalendarAlt className="fs-2" />, redirect: "Dashboard" },
    { label: "Inbox", icon: <FaInbox className="fs-2" />, redirect: "Dashboard" },
    { label: "History", icon: <FaRegClock className="fs-2" />, redirect: "Dashboard" },
    { label: "Studio", icon: <FaCameraRetro className="fs-2" />, redirect: "Dashboard" },
    { label: "Commons", icon: <FaGlobe className="fs-2" />, redirect: "Dashboard" },
    { label: "Help", icon: <FaInfoCircle className="fs-2" />, redirect: "Dashboard" }
  ];
  const { pathname } = useLocation();
  let history = useNavigate();
  return (
    <div className="flex-fill">
      <div className="wd-x">
        <button onClick={() => history(-1)}>X</button>
      </div>
      <div className="d-sm-none">
        <ul className="wd-mini-navigation">
          <li><a href="http://northeastern.edu"><img src="/images/northeastern_feature.png" className="icon"
            style={{ maxHeight: "50px" }} alt="" /></a></li>
          {links.map((link, index) => (
            <li key={index} className={`${link.label === "Account" ? "wd-account" : ""} ${pathname.includes(link.label) ? (link.label === "Account" ? "wd-active-account" : "wd-active") : ""}`}>
              <Link to={`/Kanbas/${link.redirect}`}> {link.icon} {link.label} </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
export default KanbasNavigationScreen;