import { Link, useLocation, useNavigate } from "react-router-dom";
import "./index.css";
function CourseNavigationScreen() {
  const links = ["Home", "Modules", "Piazza", "Grades", "Assignments"];
  const { pathname } = useLocation();
  let history = useNavigate();
  return (
    <div className="flex-fill">
      <div className="wd-x">
        <button onClick={() => history(-1)}>X</button>
      </div>
      <div className="d-sm-none">
        <ul className="wd-mini-navigation">
          {links.map((link, index) => (
            <li key={index} className={pathname.includes(link) ? "wd-active" : ""}>
              <Link to={"../"}>{link}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
export default CourseNavigationScreen;