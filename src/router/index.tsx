import RootLayout from "@/layouts/RootLayout"
import Home from "@/pages/home"
import { createBrowserRouter } from "react-router-dom"

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: "/*",
        element: <Home />,
      },
    ],
  },
])

export default router
