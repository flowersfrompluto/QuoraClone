import "./App.css";
import "./css/Error.css";
import "./css/Account.css";
import "./css/Animation.css";
import "./css/DashboardHome.css";
import Router from "./Router";
import GlobalProvider from "./context/Context";

function App() {
  return (
    <GlobalProvider>
      <Router />
    </GlobalProvider>
  );
}

export default App;