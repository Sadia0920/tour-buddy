import { createBrowserRouter } from "react-router-dom";
import GuideProfilePage from "../pages/GuideProfilePage";
import PaymentPage from "../pages/PaymentPage";

const router = createBrowserRouter([
    {
      path: "/",
      element: <GuideProfilePage></GuideProfilePage>,
    },
    {
      path: "/payment",
      element: <PaymentPage></PaymentPage>,
    },
  ]);

export default router ;