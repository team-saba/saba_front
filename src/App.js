import AppHeader from './appHeader/appHeader.js';
import AppMenu from './appMenu/appMenu.js';
import AppFooter from './appFooter/appFooter.js';
import AppMain from './appMain/appMain.js';
 
function App() {
  return (
    <div className="wrapper">
      <AppHeader />
      <AppMenu />
      <AppMain />
      <AppFooter />
    </div>
  );
}
 
export default App;