import { Suspense, lazy } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";

function App() {
  const Auth = lazy(() => import("../src/Pages/Auth/Auth.tsx"));
  const SignUp = lazy(() => import("../src/Pages/Auth/SignUp.tsx"));

  return (
    <>
      <Suspense fallback={<div className="suspense-loader">Loading...</div>}>
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Auth />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
