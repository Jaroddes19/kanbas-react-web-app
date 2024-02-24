import Classes from "./Classes";
import JavaScript from "./JavaScript";
import BooleanVariables from "./JavaScript/variables/BooleanVariables";
import VariableTypes from "./JavaScript/variables/VariableTypes";
import VariablesAndConstants from "./JavaScript/variables/VariablesAndConstants";
import PathParameters from "./routing/PathParameters";
import Styles from "./Styles";
import ConditionalOutput from "./ConditionalOutput";
import Highlight from "./Highlight";
import Add from "./Add";
import TodoList from "./todos/TodoList";
import AddingAndRemovingDataToFromArrays from "./JavaScript/arrays/AddingAndRemovingDataToFromArrays";
import ArrayIndexAndLength from "./JavaScript/arrays/ArrayIndexAndLength";
import FilterFunction from "./JavaScript/arrays/FilterFunction";
import FindFunction from "./JavaScript/arrays/FindFunction";
import ForLoops from "./JavaScript/arrays/ForLoops";
import MapFunction from "./JavaScript/arrays/MapFunction";
import WorkingWithArrays from "./JavaScript/arrays/WorkingWithArrays";
import IfElse from "./JavaScript/conditionals/IfElse";
import TernaryOperator from "./JavaScript/conditionals/TernaryOperator";
import ArrowFunctions from "./JavaScript/functions/ArrowFunctions";
import ES5Functions from "./JavaScript/functions/ES5Functions";
import FunctionDestructing from "./JavaScript/functions/FunctionDestructing";
import FunctionParenthesisAndParameters from "./JavaScript/functions/FunctionParenthesisAndParameters";
import ImpliedReturns from "./JavaScript/functions/ImpliedReturn";
import Destructing from "./JavaScript/json/Destructing";
import House from "./JavaScript/json/House";
import JsonStringify from "./JavaScript/json/JsonStringify";
import Spreading from "./JavaScript/json/Spreading";
import TemplateLiterals from "./JavaScript/string/TemplateLiterals";

function Assignment3() {
  return (
    <div className="container">
      <h1>Assignment 3</h1>
      <TodoList />
      <ConditionalOutput />
      <Styles />
      <Classes />
      <PathParameters />
      <JavaScript />
      <AddingAndRemovingDataToFromArrays />
      <ArrayIndexAndLength />
      <FilterFunction />
      <FindFunction />
      <ForLoops />
      <MapFunction />
      <WorkingWithArrays />
      <IfElse />
      <TernaryOperator />
      <ArrowFunctions />
      <ES5Functions />
      <FunctionDestructing />
      <FunctionParenthesisAndParameters />
      <ImpliedReturns />
      <Destructing />
      <House />
      <JsonStringify />
      <Spreading />
      <PathParameters />
      <TemplateLiterals />
      <VariableTypes />
      <VariablesAndConstants />
      <BooleanVariables />
      <Highlight>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipitratione eaque illo minus cum, saepe totam
        vel nihil repellat nemo explicabo excepturi consectetur. Modi omnis minus sequi maiores, provident voluptates.
      </Highlight>
      <Add a={3} b={4} />
    </div>
  );
}
export default Assignment3;
