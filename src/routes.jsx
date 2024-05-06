import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "./pages/error/ErrorPage";
import App from "./pages/home/Index";
import Blogs from "./pages/home/components/Blogs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <App />
      },
      {
        path:"/blogs",
        element: <Blogs />
      }
    ]
  },
]);
export default router;
