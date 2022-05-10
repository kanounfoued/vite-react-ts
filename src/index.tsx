import auth from "./services/auth.service";
import App from "./App";
import "./index.css";

auth.renderApp({ RootComponent: App });
