import auth from "./services/auth.service";
import App from "./App";
import "./styles/index.css";

auth.renderApp({ RootComponent: App });
