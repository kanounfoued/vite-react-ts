import { init as initSentry, setUser } from "@sentry/react";
import auth from "../services/auth.service";

export class SentryUtil {
  static init() {
    if (import.meta.env.PROD) {
      initSentry({
        dsn: import.meta.env.REACT_APP_SENTRY_DSN,
        environment: import.meta.env.REACT_APP_KEYCLOAK_REALM_CLIENT_ID,
      });
      setTimeout(() => {
        setUser({ username: auth.getUsername() });
      }, 1000);
    }
  }
}
