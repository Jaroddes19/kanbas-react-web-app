import React from "react";
import PassingFunctions from "./PassingFunctions";
import ReduxExamples from "./ReduxExamples";
import Counter from "./Counter";
import EventObject from "./EventObject"; 
import StringStateVariables from "./StringStateVariables";
import ObjectStateVariable from "./ObjectStateVariable";
import ArrayStateVariable from "./ArrayStateVariable";
import ParentStateComponent from "./ParentStateComponent";
import store from "../store";
import { Provider } from "react-redux";
const Assignment4 = () => {
    function sayHello() {
        alert("Hello");
    }

    return (
        <>
            <Provider store={store}>
                <h1>Assignment 4</h1>
                <ParentStateComponent />
                <ArrayStateVariable />
                <ObjectStateVariable />
                <StringStateVariables />
                <Counter />
                <EventObject />
                <PassingFunctions theFunction={sayHello} />
                <ReduxExamples />
            </Provider>
        </>
    );
};
export default Assignment4;