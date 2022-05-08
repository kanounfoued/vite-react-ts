import Auth from "@verg/auth";

const auth = new Auth({
  keycloakConfig: {
    realm: import.meta.env.REACT_APP_KEYCLOAK_REALM_ID,
    url: import.meta.env.REACT_APP_KEYCLOAK_REALM_URL,
    clientId: import.meta.env.REACT_APP_KEYCLOAK_REALM_CLIENT_ID,
  },
});

export default auth;
