import { Configuration, PopupRequest } from "@azure/msal-browser";
// Config object to be passed to Msal on creation
export const msalConfig: Configuration = {
  auth: {
    clientId: "be8e526e-35c4-4867-ab60-30f53b14d942",
    authority: "https://login.microsoftonline.com/86b5b2a1-375f-4c5f-885e-2b4fcbad43e6"
  }
};
// Add here scopes for id token to be used at MS Identity Platform endpoints.
export const loginRequest: PopupRequest = {
  scopes: ["User.Read"]
};
// Add here the endpoints for MS Graph API services you would like to use.
export const graphConfig = {
  graphMeEndpoint: "https://graph.microsoft.com/v1.0/me"
};


