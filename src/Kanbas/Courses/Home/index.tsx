import ModuleList from "../Modules/List";
import "./index.css";

function Home() {
  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <div style={{ flex: 1 }}>
        <h2>Home</h2>
        <div className="flex-fill">
          <ModuleList />
        </div>
      </div>
      <div className="flex-grow-0 me-2 d-none d-lg-block" style={{ width: 250 }}>
        <h3>Course Status</h3>
        <table>
          <tbody>
            <tr>
              <td>
                <button>Unpublish <i className="fa fa-ban"></i></button>
                <button style={{ backgroundColor: "green" }}>Publish <i className="fa fa-check-circle-o"></i></button>
              </td>
            </tr>
          </tbody>
        </table>
        <button>Import Existing Content <i className="fa fa-file-o"></i></button><br />
        <button>Import From Commons <i className="fa fa-cloud-download"></i></button><br />
        <button>Choose Home Page <i className="fa fa-crosshairs"></i></button><br />
        <br />
        <h3>To Do</h3>
        <hr />
        <ul className="wd-mini-navigation">
          <li> <a href="/Kanbas/Courses/Grades/screen.html">Grade A1</a></li>
        </ul>
        <h3>Coming Up</h3>
        <hr />
        <ul className="wd-mini-navigation">
          <li><a href="#">Lecture</a></li>
        </ul>
      </div>
    </div>
  );
}
export default Home;