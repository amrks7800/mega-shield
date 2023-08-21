import RootLayout from "@/layouts/RootLayout"
import Home from "@/pages/home"
import Shopping from "@/pages/shopping"
import { createBrowserRouter } from "react-router-dom"

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: "/*",
        element: <Home />,
      },
      {
        path: "/shopping",
        element: <Shopping />,
      },
    ],
  },
])

export default router
