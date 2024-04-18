import React, { useEffect, useState } from "react";
import axios from "axios";
const API_BASE = process.env.REACT_APP_BASE_API_URL;
// type Lesson = {
//     _id: string,
//     name: string,
//     description: string,
//     module: string;
// }
// type Module = { _id: string; name: string; description: string, course: string, lesson: Lesson }

function WorkingWithObjects() {
    const [assignment, setAssignment] = useState({
        id: 1, title: "NodeJS Assignment",
        description: "Create a NodeJS server with ExpressJS",
        due: "2021-10-10", completed: false, score: 0,
    });
    const [module, setModule] = useState({
        _id: "M101",
        name: "Introduction to Web Development",
        description: "Basic principles of web development and web technologies.",
        course: "RS101",
        lessons: [
            {
                _id: "L101",
                name: "History of Web Development",
                description: "A brief history of web development and internet evolution.",
                module: "M101"
            },
            {
                _id: "L102",
                name: "HTML Fundamentals",
                description: "Basic principles of HTML.",
                module: "M101"
            },
            {
                _id: "L103",
                name: "CSS Basics",
                description: "Overview of cascading style sheets (CSS).",
                module: "M101"
            }
        ]
    });
    const ASSIGNMENT_URL = `${API_BASE}/a5/assignment`;
    const MODULE_URL = `${API_BASE}/a5/module`;

    const fetchAssignment = async () => {
        const response = await axios.get(`${ASSIGNMENT_URL}`);
        setAssignment(response.data);
    };
    const updateTitle = async () => {
        const response = await axios
            .get(`${ASSIGNMENT_URL}/title/${assignment.title}`);
        setAssignment(response.data);
    };
    const updateScore = async () => {
        const response = await axios
            .get(`${ASSIGNMENT_URL}/score/${assignment.score}`);
        setAssignment(response.data);
    };
    const updateCompleted = async () => {
        const response = await axios
            .get(`${ASSIGNMENT_URL}/completed/${assignment.completed}`);
        setAssignment(response.data);
    };

    const fetchModule = async () => {
        const response = await axios.get(`${MODULE_URL}`);
        setModule(response.data);
    };
    const updateName = async () => {
        const response = await axios
            .get(`${MODULE_URL}/name/${module.name}`);
        setModule(response.data);
    };
    const updateDescription = async () => {
        const response = await axios
            .get(`${MODULE_URL}/description/${module.description}`);
        setModule(response.data);
    };

    useEffect(() => {
        fetchAssignment();
        fetchModule();
    }, []);

    return (
        <div>
            <h3>Working With Objects</h3>
            <h3>Modifying Properties</h3>
            <input onChange={(e) => setAssignment({
                ...assignment, title: e.target.value
            })}
                value={assignment.title} type="text" />
            <button onClick={updateTitle} >
                Update Title to: {assignment.title}
            </button>
            <input onChange={(e) => setAssignment({
                ...assignment, score: parseInt(e.target.value)
            })}
                type="number" min="0" max="100" value={assignment.score} />
            <button onClick={updateScore} >
                Update Score to: {assignment.score}
            </button>

            <input type="checkbox" onChange={(e) => setAssignment({
                ...assignment, completed: !assignment.completed
            })}
                value={assignment.completed.toString()} checked={assignment.completed} />
            <button onClick={updateCompleted} >
                Update Completed to: {assignment.completed.toString()}
            </button>

            <button onClick={fetchAssignment} >
                Fetch Assignment
            </button>
            <hr />
            <input onChange={(e) => setModule({
                ...module, name: e.target.value
            })}
                value={module.name} type="text" />
            <button onClick={updateName} >
                Update Name to: {module.name}
            </button>
            <input onChange={(e) => setModule({
                ...module, description: e.target.value
            })}
                value={module.description} type="text" size={assignment.description.length} />
            <button onClick={updateDescription} >
                Update Description to: {module.description}
            </button>
            <button onClick={fetchModule} >
                Fetch Module
            </button>
            <h4>Modifying Properties</h4>
            <a className="btn btn-primary" href={`${ASSIGNMENT_URL}/title/${assignment.title}`}>
                Update Title
            </a>
            <input type="text"
                onChange={(e) => setAssignment({
                    ...assignment,
                    title: e.target.value
                })}
                value={assignment.title} />
            <hr />
            <a className="btn btn-primary" href={`${MODULE_URL}/name/${module.name}`}>
                Update Name
            </a>
            <input type="text"
                onChange={(e) => setModule({
                    ...module,
                    name: e.target.value
                })}
                value={module.name} />
            <h4>Retrieving Objects</h4>
            <a className="btn btn-primary" href={`${API_BASE}/a5/assignment`}>
                Get Assignment
            </a>
            <a className="btn btn-primary" href={`${API_BASE}/a5/module`}>
                Get Module
            </a>
            <h4>Retrieving Properties</h4>
            <a className="btn btn-primary" href={`${API_BASE}/a5/assignment/title`}>
                Get Title
            </a>
            <a className="btn btn-primary" href={`${ASSIGNMENT_URL}/title/${assignment.title}`}>
                Update Title
            </a>
            <input type="text"
                onChange={(e) => setAssignment({
                    ...assignment,
                    title: e.target.value
                })}
                value={assignment.title} />
            <hr />
            <a className="btn btn-primary" href={`${API_BASE}/a5/module/name`}>
                Get Name
            </a>
            <a className="btn btn-primary" href={`${MODULE_URL}/name/${module.name}`}>
                Update Name
            </a>
            <input type="text"
                onChange={(e) => setModule({
                    ...module,
                    name: e.target.value
                })}
                value={module.name} />

        </div>
    );
}
export default WorkingWithObjects;