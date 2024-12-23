import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SinglePage from "./components/SinglePage";
import Home from "./components/Home";
import Nav from "./components/Nav";
import "./index.css";
import Support from "./components/Support";
import Login from "./components/Login";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Nav />,
    },
    {
      path: "/support",
      element: <Support />,
    },
    {
      path: "/movie/:id",
      element: <SinglePage />,
    },
    {
      path: "/login",
      element: <Login />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
