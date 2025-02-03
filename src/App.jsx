import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home";
import MainLayout from "./Pages/MainLayout/MainLayout";
import Ingredients from "./Pages/Ingredients/Ingredients";
import ProtectedRoutes from "./Component/ProtectedRoutes/ProtectedRoutes";
import NotFound from "./Pages/NotFound/NotFound";

function App() {
  const routes = createBrowserRouter([
    {
      path: "",
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "mealdetails/:productId",
          element: (
            <ProtectedRoutes>
              <Ingredients />
            </ProtectedRoutes>
          ),
        },
        {
          path: "notfound",
          element: <NotFound />,
        },
        {
          path: "*",
          element: <NotFound />,
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={routes}></RouterProvider>
    </>
  );
}

export default App;
