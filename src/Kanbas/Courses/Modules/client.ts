import axios from "axios";
type Lesson = {
    id: string,
    name: string,
    description: string,
    module: string;
}
export interface Module {
    _id:
    string;
    id: string;
    name: string;
    description: string;
    course: string;
    lessons: [Lesson];

}

const API_BASE = process.env.REACT_APP_API_BASE_URL || "broken";
const MODULES_API = `${API_BASE}/api/modules`;

export const deleteModule = async (module: Module) => {
    const response = await axios
        .delete(`${MODULES_API}/${module._id}`);
    return response.data;
};
export const updateModule = async (module: Module) => {
    const response = await axios
        .put(`${MODULES_API}/${module._id}`, module);
    return response.data;
};

export const createModule = async (courseId: string | undefined, module: Module) => {
    const response = await axios.post(
        `${MODULES_API}`,
        module
    );
    return response.data;
};

export const findModulesForCourse = async (courseId: string | undefined) => {
    const response = await
    axios.get(`${MODULES_API}/${courseId}`);
    return response.data;
};
