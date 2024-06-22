import { createBrowserRouter } from "react-router-dom";

import Main from "@pages/Main";

import Transaction from "@pages/Transaction";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },

  {
    path: "/transaction",
    element: <Transaction />,
  },
]);

export default router;
