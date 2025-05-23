import { Spin } from "antd";

export default function App() {
  return (
    <>
      <div className="sub-wrap" id="sub-app">
        <Spin>
          <div className="loading"></div>
        </Spin>
      </div>
    </>
  );
}
