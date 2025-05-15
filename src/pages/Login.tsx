function App() {
  return (
    <>
      <div className="header">登录页面</div>
      <div className="content">
        <a href="/sub-vue-app" target="">
          跳转子应用sub-vue-app
        </a>
        <div className="sub-wrap" id="sub-vue-app">
          loading...
        </div>
      </div>
    </>
  );
}

export default App;
