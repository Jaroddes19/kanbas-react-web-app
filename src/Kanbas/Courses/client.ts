import axios from "axios";
export const BASE_API = process.env.REACT_APP_BASE_API_URL;
export const COURSES_API = `${BASE_API}/api/courses`;
export interface Course {
    _id:
    string;
    name:
    string;
    number:
    string;
    startDate:
    string;
    endDate:
    string;
    department: string;
    image:
    string;
};

export const updateCourse = async (course: any) => {
    const response = await axios.put(`${COURSES_API}/${course._id}`, course);
    return response.data;
};
export const findAllCourses = async () => {
    const response = await axios.get(`${COURSES_API}`);
    return response.data;
  };
export const findCourseById = async (id: string) => {
    const response = await axios.get(`${COURSES_API}/${id}`);
    return response.data;
}
export const findCoursesByDepartment = async (department: string) => {
    const response = await
        axios.get(`${COURSES_API}?role=${department}`);
    return response.data;
};
export const createCourse = async (course: any) => {
    const response = await axios.post(`${COURSES_API}`, course);
    return response.data;
};
export const deleteCourse = async (course: any) => {
    const response = await axios.delete(
        `${COURSES_API}/${course._id}`);
    return response.data;
};


