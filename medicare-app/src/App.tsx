import { Suspense, lazy } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import { ToastContainer } from "react-toastify";

function App() {
  const Login = lazy(() => import("../src/Pages/Auth/Login.tsx"));
  const SignUp = lazy(() => import("../src/Pages/Auth/SignUp.tsx"));

  return (
    <>
      <ToastContainer />
      <Suspense fallback={<div className="suspense-loader">Loading...</div>}>
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
