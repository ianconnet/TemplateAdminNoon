import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom"
import Drawer from "./components/Drawer"
import Login from "./pages/Login"
import Dashboard from "./pages/Dashboard"
import Error from "./pages/Error"
import Buyers from "./pages/Buyers"
import Sellers from "./pages/Sellers"
import Projects from "./pages/Projects"
import ProjectRequests from "./pages/ProjectRequests"
import Purchases from "./pages/Purchases"

// const Auth = ({ children }) => {
//   const IS_USER_LOGGED_IN = localStorage.getItem("USER_LOGGED_IN")

//   if(!IS_USER_LOGGED_IN) {
//     return <Navigate to={"/login"} replace />
//   }

//   return children
// }

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/login" />,
    errorElement: <Error />
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <Error />
  },
  {
    path: "/dashboard",
    element: <Drawer><Dashboard /></Drawer>,
    errorElement: <Error />
  },
  {
    path: "/buyers",
    element: <Drawer><Buyers /></Drawer>,
    errorElement: <Error />
  },
  {
    path: "/sellers",
    element: <Drawer><Sellers /></Drawer>,
    errorElement: <Error />
  },
  {
    path: "/projects",
    element: <Drawer><Projects /></Drawer>,
    errorElement: <Error />
  },
  {
    path: "/project-requests",
    element: <Drawer><ProjectRequests /></Drawer>,
    errorElement: <Error />
  },
  {
    path: "/purchases",
    element: <Drawer><Purchases /></Drawer>,
    errorElement: <Error />
  },
])

const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App