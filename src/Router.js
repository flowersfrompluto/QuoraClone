import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import CreatePost from "./components/CreatePost";
import AskQuestion from "./components/AskQuestion";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Account from "./pages/Account";
import ErrorPage from "./pages/ErrorPage";



export default function Router() {
  return (
    <BrowserRouter>
      {/* <Navigation /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/account" element={<Account />} />
        <Route path="/createpost" element={<Signup />}>
          <Route path="/createpost" element={<Navigate replace to="createpost" />}/>
          <Route path="createpost" element={<CreatePost />} />
          <Route path="askquestion" element={<AskQuestion />} />
        </Route>
        <Route path="*" element={<ErrorPage/>}/>
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  );
}