import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./layout/RootLayout";
import Home from "./pages/Home";
import Stories from "./pages/Stories";
import Pricing from "./pages/Pricing";
import Features from "./pages/Features";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "stories",
        element: <Stories />,
      },
      {
        path: "features",
        element: <Features />,
      },
      {
        path: "pricing",
        element: <Pricing />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
