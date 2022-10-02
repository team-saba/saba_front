import AppHeader from "./appHeader/appHeader.js";
import AppMenu from "./appMenu/appMenu.js";
import AppFooter from "./appFooter/appFooter.js";
import AppMain from "./appMain/appMain.js";
import { Route, Routes } from "react-router-dom";
import Container from "./appMain/container.js";

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
