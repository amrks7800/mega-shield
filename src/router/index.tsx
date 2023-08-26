import RootLayout from "@/layouts/RootLayout"
import Home from "@/pages/home"
import Shopping from "@/pages/shopping"
import Who from "@/pages/us"
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
      {
        path: "/who",
        element: <Who />,
      },
    ],
  },
])

export default router
