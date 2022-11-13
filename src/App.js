import { AppHeader } from "./component/Header.js";
import AppMenu from "./component/appMenu.js";
import AppFooter from "./component/appFooter.js";
import AppMain from "./component/appMain.js";
import { Route, Routes } from "react-router-dom";
import Container from "./component/container/container.js";
import AppImage from "./component/images/appImage.js";
import Vulnerability from "./component/vulner/vulner.js";
import AppCve from "./component/vulner/cve.js";
import Log from "./component/log/log.js";
import SettingPage from "./setting/settingPage.js";

function App() {
  return (
    <div className="wrapper">
      <AppHeader />
      <AppMenu />

      <Routes>
        <Route path="/" element={<Container />}></Route>
        <Route path="/container" element={<Container />}></Route>
        <Route path="/home" element={<AppMain />}></Route>
        <Route path="/images" element={<AppImage />}></Route>
        <Route path="/vulner" element={<Vulnerability />}></Route>
        <Route path="/cve" element={<AppCve />}></Route>
        <Route path="/log" element={<Log />}></Route>
        <Route path="/setting" element={<SettingPage />}></Route>
      </Routes>

      <AppFooter />
    </div>
  );
}

export default App;
