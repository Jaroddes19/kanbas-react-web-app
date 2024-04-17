import KanbasNavigation from "./Navigation";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import NavigationScreen from "./Navigation/screen";
import Account from "./Account";
import Nav from "../Nav";
import { useState, useEffect } from "react";
import store from "./store";
import { Provider } from "react-redux";
import axios from "axios";
import * as client from "./Courses/client";
const API_BASE = process.env.REACT_APP_API_BASE;
function Kanbas() {
  const [courses, setCourses] = useState<any[]>([]);
  const COURSES_API = `${API_BASE}/api/courses`;
  const findAllCourses = async () => {
    const response = await client.findAllCourses();
    setCourses(response);
  };
  useEffect(() => {
    findAllCourses();
  }, []);

  const [course, setCourse] = useState({
    _id: "", id: "1234", name: "New Course", number: "New Number",
    startDate: "2023-09-10", endDate: "2023-12-15", image: "minio.png",
  });
  const addNewCourse = async () => {
    const response = await client.createCourse(course);
    setCourses([...courses, response]);
  };
  const deleteCourse = async (course: any) => {
    try {
      await client.deleteCourse(course);
      setCourses(courses.filter((c) => c._id !== course._id));
    } catch (err) {
      console.log(err);
    }
  };
  const updateCourse = async () => {
    try {
      await client.updateCourse(course);
      setCourses(
        courses.map((c) => {
          if (c.id === course.id) {
            return course;
          } else {
            return c;
          }
        })
      );
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Provider store={store}>
      <div>
        <Nav />
        <div className="d-flex">
          <div className="d-none d-sm-block">
            <KanbasNavigation />
          </div>
          <div style={{ flexGrow: 1 }}>
            <Routes>
              <Route path="/" element={<Navigate to="Dashboard" />} />
              <Route path="/Account/*" element={<Account />} />
              <Route path="/Dashboard" element={<Dashboard
                courses={courses}
                course={course}
                setCourse={setCourse}
                addNewCourse={addNewCourse}
                deleteCourse={deleteCourse}
                updateCourse={updateCourse} />
              } />
              <Route path="/Courses/*" element={<h1>Courses</h1>} />
              <Route path="/Courses/:courseId/*" element={<Courses courses={courses} />} />
              <Route path="Navigation" element={<NavigationScreen />} />
            </Routes>

          </div>
        </div>
      </div>
    </Provider>
  );
}

export default Kanbas;