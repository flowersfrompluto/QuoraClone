import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import CreatePost from "./components/CreatePost";
import AskQuestion from "./components/AskQuestion";
import Account from "./pages/Account";
import Profile from "./pages/Profile";
import ErrorPage from "./pages/ErrorPage";
import PopUp from "./components/PopUp";
import Admin from "./pages/Admin";
import AllPosts from "./pages/admin/AllPosts"
import CreateAdmin from "./pages/admin/CreateAdmin"
import CreateUser from "./pages/admin/CreateUser"
import Users from "./pages/admin/Users"
import Post from "./pages/Post";
import Dashboard from "./pages/admin/Dashboard";



export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post/:id" element={<Post />} />
        <Route path="/account" element={<Account />} />
        <Route path="/profile:id" element={<Profile />} />
        <Route path="/" element={<PopUp />}>
          <Route path="/popup" element={<Navigate replace to="/popup/createpost" />} />
          <Route path="/createpost" element={<CreatePost />} />
          <Route path="/askquestion" element={<AskQuestion />} />
        </Route>
        <Route path="/admin" element={<Admin />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/allposts" element={<AllPosts />} />
        <Route path="/adminsignup" element={<CreateAdmin />} />
        <Route path="/usersignup" element={<CreateUser />} />
        <Route path="/users" element={<Users />} />
        

        {/* <Route path="/admin" element={<Admin />}>
          <Route path="admin" element={<Navigate replace to="dashboard" />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="allposts" element={<AllPosts />} />
          <Route path="adminsignup" element={<CreateAdmin />} />
          <Route path="usersignup" element={<CreateUser />} />
          <Route path="users" element={<Users />} />
        </Route> */}

        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}