declare global {
  interface Window {
    /* eslint-disable-next-line */
    env: ImportMetaEnv & {
      readonly REACT_APP_API_URL: string;
      readonly REACT_APP_KEYCLOAK_REALM_ID: string;
      readonly REACT_APP_KEYCLOAK_REALM_URL: string;
      readonly REACT_APP_KEYCLOAK_REALM_CLIENT_ID: string;
      readonly REACT_APP_SENTRY_DSN: string;
    };
  }
}

const defaultEnvValues = import.meta.env;
/* eslint-disable-next-line */
const windowEnv = window?.env ?? ({} as ImportMetaEnv);
const env = { ...defaultEnvValues, ...windowEnv };
export default env;
