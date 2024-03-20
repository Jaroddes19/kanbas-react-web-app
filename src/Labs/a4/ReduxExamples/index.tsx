import React from "react";
import CounterRedux from "./CounterRedux";
import AddRedux from "./AddRedux";
import HelloRedux from "./HelloRedux";

const ReduxExamples = () => {
  return(
    <div>
      <h2>Redux Examples</h2>
      <CounterRedux />
      <AddRedux />
      <HelloRedux />

    </div>
  );
};

export default ReduxExamples;