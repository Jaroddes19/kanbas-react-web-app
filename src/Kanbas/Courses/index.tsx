import { useState, useEffect } from "react";
import axios from "axios";
import { Navigate, Route, Routes, useParams } from "react-router-dom";
import { HiMiniArrowRight, HiMiniBars3 } from "react-icons/hi2";
import CourseNavigation from "./Navigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import CourseNavigationScreen from "./Navigation/screen";
import Dropdown from "../Navigation/dropdown";
import Grades from "./Grades";
import * as client from "./client";
function Courses({ courses }: { courses: any[]; }) {
  const { courseId } = useParams();
  const [course, setCourse] = useState({
    _id: "", id: "1234", name: "New Course", number: "New Number",
    startDate: "2023-09-10", endDate: "2023-12-15", image: "minio.png",
  });
  const findCourseById = async (courseId: string) => {
    const course = await client.findCourseById(courseId);
    setCourse(course);
  };
  useEffect(() => {
    if (courseId) {
      findCourseById(courseId);
    }
  }, [courseId]);


  return (
    <div>
      <div className="d-sm-none row">
        <Dropdown />
      </div>
      <div className="p-4 d-none d-sm-block">
        <h2><HiMiniBars3 /> <span style={{ paddingLeft: '0.5rem' }}>Course</span> <HiMiniArrowRight /> {course.name}</h2>
        <hr />
      </div>
      <div className="d-flex">
        <div className="d-none d-md-block">
          <CourseNavigation />
        </div>
        <div className="flex-fill">
          <div>
            <Routes>
              <Route path="/" element={<Navigate to="Home" />} />
              <Route path="Home" element={<Home />} />
              <Route path="Modules" element={<Modules />} />
              <Route path="Assignments" element={<Assignments />} />
              <Route path="Assignments/:assignmentId" element={<h1>Assignment Editor</h1>} />
              <Route path="Grades" element={<Grades />} />
              <Route path="CNav" element={<CourseNavigationScreen />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Courses;