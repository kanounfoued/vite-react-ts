import {
  Navigate,
  Outlet,
  ReactLocation,
  Router,
} from "@tanstack/react-location";
import { ReactLocationDevtools } from "@tanstack/react-location-devtools";
import { ROUTE_PATH } from "../models/routes.model";
import LayoutMain from "../components/LayoutMain";
import env from "../env";

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
          element: <Navigate to={ROUTE_PATH.HOME} />,
        },
      ]}
    >
      <LayoutMain>
        <Outlet />
      </LayoutMain>
      {!env.PROD && (
        <ReactLocationDevtools initialIsOpen={false} position="bottom-left" />
      )}
    </Router>
  );
}
