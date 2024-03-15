import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import CreatePost from "./pages/CreatePost";
import SinglePost from "./pages/SinglePost";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Account from "./pages/Account";


export default function Router() {
  return (
    <BrowserRouter>
      {/* <Navigation /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/properties" element={<CreatePost />} />
        <Route path="/properties/details/:id" element={<SinglePost />} />
        <Route path="/login" element={<Login />} />
        <Route path="/account" element={<Account />} />
        <Route path="/signup" element={<Signup />}>
          <Route path="/signup" element={<Navigate replace to="useraccount" />}/>
          {/* <Route path="useraccount" element={<UserSignup />} />
          <Route path="agentaccount" element={<AgentSignup />} />
          <Route path="admin" element={<MerchantSignup />} /> */}
        </Route>
        <Route path="*" element={<h1>Error page not found</h1>}/>
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  );
}