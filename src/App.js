// inspired by https://github.com/josdejong/jsoneditor/blob/develop/examples/react_demo/src/App.js
import React from "react";

import JSONEditorDemo from "./JSONEditorDemo";
import "./App.css";

function App() {
  const [json, setJson] = React.useState({
    array: [1, 2, 3],
    boolean: true,
    null: null,
    number: 123,
    object: { a: "b", c: "d" },
    string: "Hello World"
  });

  const onChangeJSON = (json) => {
    setJson({ json });
  };

  const updateTime = () => {
    const time = new Date().toISOString();
    setJson({ ...json, time });
  };

  return (
    <div className="app">
      <h1>JSONEditor React demo</h1>
      <div className="contents">
        <div className="menu">
          <button onClick={updateTime}>Create/update a field "time"</button>
        </div>
        <JSONEditorDemo json={json} onChangeJSON={onChangeJSON} />
        <div className="code">
          <pre>
            <code>{JSON.stringify(json, null, 2)}</code>
          </pre>
        </div>
      </div>
    </div>
  );
}
export default App;
