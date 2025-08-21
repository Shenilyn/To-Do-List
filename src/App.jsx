import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import LandingPage from "./LandingPage";
import Dashboard from "./Dashboard";
import "./index.css"; // ✅ Tailwind styles

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "*",
    element: (
      <div className="flex items-center justify-center min-h-screen text-2xl font-bold text-gray-700">
        404 | Page Not Found
      </div>
    ),
  },
]);

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
