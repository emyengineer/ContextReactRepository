import * as React from "react";

const CountStateContext = React.createContext();
const CountDispatchContext = React.createContext();

function CountDisplay() {
  const { count } = React.useContext(CountStateContext);
  return <div>{count}</div>;
}
/* ReactDOM.render(<CountDisplay />, document.getElementById('⚛️')) */
