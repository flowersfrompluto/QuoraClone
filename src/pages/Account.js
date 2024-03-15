import Navigation from "../components/Navigation";
import Login from "../components/Login";

function Account() {
  return (
    <div className="account_page">
      <Navigation />
      <div className="account_grid">
        <Login />
      </div>
    </div>
  );
}
export default Account;
