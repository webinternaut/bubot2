import * as msal from "@azure/msal-browser";

const msalConfig = {
    auth: {
        clientId: "be8e526e-35c4-4867-ab60-30f53b14d942",
        authority: "https://login.microsoftonline.com/86b5b2a1-375f-4c5f-885e-2b4fcbad43e6",
                redirectUri: '/'
    }
};

const msalInstance = new msal.PublicClientApplication(msalConfig);

export { msalInstance }
