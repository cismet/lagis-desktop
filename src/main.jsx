import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import "antd/dist/reset.css";
import { Provider } from "react-redux";
import store from "./store";
import { ConfigProvider } from "antd";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import locale from "antd/locale/de_DE";
import ErrorPage from "./components/ui/errors-template/ErrorsPage";
import Overview from "./pages/Overview";
import AppLayout from "./pages/AppLayout";
import Offices from "./pages/Offices";
import RentAndLease from "./pages/RentAndLease";
import RightsPage from "./pages/RightsPage";
import UsagePage from "./pages/UsagePage";
import OperationsPage from "./pages/OperationsPage";
import HistoryPage from "./pages/HistoryPage";
import Transaction from "./pages/Transaction";
import DMSPage from "./pages/DMSPage";
import LoginPage from "./components/login/LoginPage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Overview />,
      },
      {
        path: "/verwaltungsbereiche",
        element: <Offices />,
      },
      {
        path: "/miet",
        element: <RentAndLease />,
      },
      {
        path: "/rechte",
        element: <RightsPage />,
      },
      {
        path: "/nutzung",
        element: <UsagePage />,
      },
      {
        path: "/vorgänge",
        element: <OperationsPage />,
      },
      {
        path: "/historie",
        element: <HistoryPage />,
      },
      {
        path: "/kassenzeichen",
        element: <Transaction />,
      },
      {
        path: "/dms",
        element: <DMSPage />,
      },
    ],
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ConfigProvider locale={locale}>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </ConfigProvider>
  </React.StrictMode>
);
