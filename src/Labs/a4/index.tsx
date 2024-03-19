import React from "react";
import PassingFunctions from "./PassingFunctions";
import ReduxExamples from "./redux-examples";
import store from "./store";
import { Provider } from "react-redux";
const Assignment4 = () => {
    function sayHello() {
        alert("Hello");
    }

    return (
        <>
            <Provider store={store}>
                <h1>Assignment 4</h1>
                <PassingFunctions theFunction={sayHello} />
                <ReduxExamples />
            </Provider>
        </>
    );
};
export default Assignment4;