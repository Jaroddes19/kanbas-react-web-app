import { Link } from "react-router-dom";
import "./index.css";
function Dashboard({ courses, course, setCourse, addNewCourse,
  deleteCourse, updateCourse }: {
    courses: any[]; course: any; setCourse: (course: any) => void;
    addNewCourse: () => Promise<void>; deleteCourse: (course: any) => Promise<void>;
    updateCourse: () => Promise<void>;
  }) {

  return (
    <div className="p-4">
      <h1>Dashboard</h1>              <hr />
      <h5>Course</h5>
      <input value={course.name} className="form-control"
        onChange={(e) => setCourse({ ...course, name: e.target.value })} />
      <input value={course.number} className="form-control"
        onChange={(e) => setCourse({ ...course, number: e.target.value })} />
      <input value={course.startDate} className="form-control" type="date"
        onChange={(e) => setCourse({ ...course, startDate: e.target.value })} />
      <input value={course.endDate} className="form-control" type="date"
        onChange={(e) => setCourse({ ...course, endDate: e.target.value })} />
      <button style={{ background: "green" }}  className="wd-button" onClick={addNewCourse} >
        Add
      </button>
      <button style={{ background: "blue" }} className="wd-button" onClick={updateCourse} >
        Update
      </button>


      <h2>Published Courses ({courses.length})</h2> <hr />
      <div className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          {courses.map((course) => (
            <div key={course.id} className="col" style={{ width: 300 }}>
              <div className="card">
                <img src={`/images/${course.image}`} className="card-img-top"
                  style={{ height: 150 }} alt={"minion"} />
                <div className="card-body">
                  <Link className="card-title" to={`/Kanbas/Courses/${course._id}/Home`}
                    style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                    {course.name}
                  </Link>
                  <p className="card-text">{course.name}</p>
                  <button style={{ background: "green" }}  className="wd-button" onClick={(event) => {
                    event.preventDefault();
                    setCourse(course);
                  }}>
                    Edit
                  </button>

                  <button style={{ background: "red" }} className="wd-button" onClick={(event) => {
                    event.preventDefault();
                    deleteCourse(course);
                  }}>
                    Delete
                  </button> <br/>
                  <Link to={`/Kanbas/Courses/${course.id}/Home`} className="btn btn-primary">
                    Go </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Dashboard;