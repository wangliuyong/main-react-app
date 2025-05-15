import Menu from "./Menu";
import "./layout.scss";

function MenuLayout() {
  return (
    <>
      <div className="container">
        <div className="slider-wrap">
          <Menu />
        </div>
        <div className="app-container">
          <div className="header">header</div>
          <div className="sub-wrap" id="sub-vue-app">
            loading...
          </div>
        </div>
      </div>
    </>
  );
}

export default function Layout() {
  return <MenuLayout></MenuLayout>;
}
