import ReactDOM from "react-dom/client";
import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import { router } from "./routes/Routes";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <Toaster />
    <RouterProvider router={router} />
  </>
);
