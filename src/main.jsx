import ReactDOM from "react-dom/client";
import { Suspense } from "react";
import { RouterProvider } from "react-router-dom";
import router from "./routes";
import "./index.css";
import FallBack from "./components/fallBack";
import { store } from "./App/store";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
  <Suspense fallback={<FallBack />}>
      <RouterProvider router={router} />
  </Suspense>
  </Provider>
);
