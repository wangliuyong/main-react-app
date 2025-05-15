import { useState } from "react";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="header">header</div>
      <div className="content">
        <a href="/sub-vue-app" target="">
          {" "}
          跳转子应用sub-vue-app{" "}
        </a>

        <div className="sub-wrap" id="sub-vue-app">
          vue
        </div>
      </div>
    </>
  );
}

export default App;
