import EncodingParametersInURLs from "./EncodingParametersInURLs";
import WorkingWithArrays from "./WorkingWithArrays";
import WorkingWithObjects from "./WorkingWithObjects";

const API_BASE = process.env.REACT_APP_BASE_API_URL;
function Assignment5() {
        return (
            <div>
                <h1>Assignment 5</h1>
                <a href={`${API_BASE}/a5/welcome`}>
                    Welcome
                </a>
                <EncodingParametersInURLs/>
                <WorkingWithArrays/>
                <WorkingWithObjects/>
            </div>
        );
    }
    export default Assignment5;
