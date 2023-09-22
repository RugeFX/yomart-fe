import { createBrowserRouter, RouteObject } from "react-router-dom";

import Home from "../pages/Home";
import TestUser from "src/pages/TestUser";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/testuser",
    element: <TestUser />,
  },
];

const router = createBrowserRouter(routes);

export default router;
