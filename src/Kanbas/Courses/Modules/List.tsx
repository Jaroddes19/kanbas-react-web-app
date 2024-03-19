import React, { useState } from "react";
import "./index.css";
import { FaEllipsisV, FaCheckCircle, FaPlusCircle } from "react-icons/fa";
import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
} from "./reducer";
import { KanbasState } from "../../store";

interface Lesson {
  _id: string,
  name: string,
  description: string,
  module: string;
}

function ModuleList() {
  const { courseId } = useParams();
  const moduleList = useSelector((state: KanbasState) =>
    state.modulesReducer.modules);
  const module = useSelector((state: KanbasState) =>
    state.modulesReducer.module);
  const dispatch = useDispatch();



  const [selectedModule, setSelectedModule] = useState(moduleList[0]);
  return (
    <>
      <button onClick={() => setSelectedModule(null)}>Collapse All</button>
      <button>View Progress</button>
      <select>
        <option>Publish All</option>
        <option>Publish All Modules and Items</option>
        <option>Publish Modules Only</option>
        <option>Unpublish All</option>
      </select >
      <hr />
      <ul className="list-group wd-modules">
        <li className="list-group-item">
          <div className="flex-fill">
            <div className="row">
              <input
                value={module.name}
                onChange={(e) =>
                  dispatch(setModule({ ...module, name: e.target.value }))
                } />
              <textarea
                value={module.description}
                onChange={(e) =>
                  dispatch(setModule({ ...module, description: e.target.value }))
                } />
            </div>
            <div style={{paddingTop: 2}} className="row">
            <button style={{ backgroundColor: "green" }}
              onClick={() => dispatch(addModule({ ...module, course: courseId }))}>
              Add
            </button>
            <button style={{ backgroundColor: "blue" }}
              onClick={() => dispatch(updateModule(module))}>
              Update
            </button>
            </div>
          </div>
        </li>
        {moduleList
          .filter((module) => module.course === courseId)
          .map((module, index) => (
            <li key={index} className="list-group-item" onClick={() => setSelectedModule(module)}>
              <div>
                <button style={{ backgroundColor: "green" }}
                  onClick={() => dispatch(setModule(module))}>
                  Edit
                </button>
                <button style={{ backgroundColor: "red" }}
                  onClick={() => dispatch(deleteModule(module._id))}>
                  Delete
                </button>
              </div>
              <div>
                <FaEllipsisV className="me-2" />
                {module.name}
                <span className="float-end">
                  <FaCheckCircle className="text-success" />
                  <FaPlusCircle className="ms-2" />
                  <FaEllipsisV className="ms-2" />
                </span>
                <p>{module.description}</p>
              </div>
              {(selectedModule) && (selectedModule._id === module._id) && (
                <ul className="list-group">
                  {module.lessons?.map((lesson: Lesson, index: number) => (
                    <li className="list-group-item" key={index}>
                      <FaEllipsisV className="me-2" />
                      {lesson.name}
                      <span className="float-end">
                        <FaCheckCircle className="text-success" />
                        <FaEllipsisV className="ms-2" />
                      </span>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
      </ul>
    </>
  );
}
export default ModuleList;