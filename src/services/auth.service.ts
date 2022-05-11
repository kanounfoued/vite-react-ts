import Auth from "@verg/auth";
import env from "../env";

const auth = new Auth({
  keycloakConfig: {
    realm: env.REACT_APP_KEYCLOAK_REALM_ID,
    url: env.REACT_APP_KEYCLOAK_REALM_URL,
    clientId: env.REACT_APP_KEYCLOAK_REALM_CLIENT_ID,
  },
});

export default auth;
