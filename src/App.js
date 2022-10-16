import AppHeader from "./component/appHeader.js";
import AppMenu from "./component/appMenu.js";
import AppFooter from "./component/appFooter.js";
import AppMain from "./component/appMain.js";
import { Route, Routes } from "react-router-dom";
import Container from "./component/container.js";

function App() {
  return (
    <div className="wrapper">
      <AppHeader />
      <AppMenu />

      <Routes>
        <Route path="/" element={<Container />}></Route>
        <Route path="/container" element={<Container />}></Route>
        <Route path="/home" element={<AppMain />}></Route>
      </Routes>

      <AppFooter />
    </div>
  );
}

export default App;
