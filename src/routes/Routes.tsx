import React from "react";
import {
  Navigate,
  Outlet,
  ReactLocation,
  Router,
} from "@tanstack/react-location";
import { ReactLocationDevtools } from "@tanstack/react-location-devtools";
import { ROUTE_PATH } from "../models/routes.model";

import LayoutMain from "../components/LayoutMain";

const location = new ReactLocation();

export default function Routes() {
  return (
    <Router
      location={location}
      routes={[
        {
          path: ROUTE_PATH.HOME,
          element: () => import("./Home").then((mod) => <mod.default />),
        },
        {
          path: ROUTE_PATH.AREAS,
          element: () => import("./Areas").then((mod) => <mod.default />),
        },
        {
          element: <Navigate to={ROUTE_PATH.UNITS} />,
        },
      ]}
    >
      <LayoutMain>
        <Outlet />
      </LayoutMain>
      {!import.meta.env.PROD && (
        <ReactLocationDevtools initialIsOpen={false} position="bottom-left" />
      )}
    </Router>
  );
}
