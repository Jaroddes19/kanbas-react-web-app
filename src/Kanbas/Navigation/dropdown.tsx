import { Link, useParams } from "react-router-dom";
import { courses } from "../Database";
import "./index.css";
import { FaChevronDown } from "react-icons/fa";
import { HiMiniBars3 } from "react-icons/hi2";

function Dropdown() {
  const { courseId } = useParams();
  const course = courses.find((course) => course._id === courseId);
  return (
    <ul className="wd-dropdown">
      <li><Link to={`/Kanbas/Navigation`}> <HiMiniBars3 className="ms-2" /></Link></li>
      <li>{course?.name} Modules</li>
      <li><Link to={`CNav`}> <FaChevronDown className="ms-2" /></Link></li>
    </ul>
  );
}
export default Dropdown;