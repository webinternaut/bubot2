import * as msal from "@azure/msal-browser";

const msalConfig = {
    auth: {
        clientId: "be8e526e-35c4-4867-ab60-30f53b14d942",
        authority: "https://login.microsoftonline.com/86b5b2a1-375f-4c5f-885e-2b4fcbad43e6",
        redirectUri: "https://audit.ncc1701d.xyz/user/login"
    }
};

const msalInstance = new msal.PublicClientApplication(msalConfig);

export { msalInstance }





// /*
//  * Copyright (c) Microsoft Corporation. All rights reserved.
//  * Licensed under the MIT License.
//  */

// import { LogLevel } from "@azure/msal-browser";

// /**
//  * Configuration object to be passed to MSAL instance on creation. 
//  * For a full list of MSAL.js configuration parameters, visit:
//  * https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-browser/docs/configuration.md 
//  */
// export const msalConfig = {
//     auth: {
//         clientId: "be8e526e-35c4-4867-ab60-30f53b14d942", // This is the ONLY mandatory field that you need to supply.
//         authority: "https://login.microsoftonline.com/86b5b2a1-375f-4c5f-885e-2b4fcbad43e6", // Defaults to "https://login.microsoftonline.com/common"
//         redirectUri: "https://audit.ncc1701d.xyz/user/login", // You must register this URI on Azure Portal/App Registration. Defaults to window.location.origin
//         postLogoutRedirectUri: "localhost:3000", // Indicates the page to navigate after logout.
//         navigateToLoginRequestUrl: false, // If "true", will navigate back to the original request location before processing the auth code response.
//     },
//     cache: {
//         cacheLocation: "localStorage", // Configures cache location. "sessionStorage" is more secure, but "localStorage" gives you SSO between tabs.
//         storeAuthStateInCookie: false, // Set this to "true" if you are having issues on IE11 or Edge
//     },
//     system: {
//         loggerOptions: {
//             loggerCallback: (level, message, containsPii) => {
//                 if (containsPii) {
//                     return;
//                 }
//                 switch (level) {
//                     case LogLevel.Error:
//                         console.error(message);
//                         return;
//                     case LogLevel.Info:
//                         console.info(message);
//                         return;
//                     case LogLevel.Verbose:
//                         console.debug(message);
//                         return;
//                     case LogLevel.Warning:
//                         console.warn(message);
//                         return;
//                 }
//             }
//         }
//     }
// };

// /**
//  * Scopes you add here will be prompted for user consent during sign-in.
//  * By default, MSAL.js will add OIDC scopes (openid, profile, email) to any login request.
//  * For more information about OIDC scopes, visit: 
//  * https://docs.microsoft.com/en-us/azure/active-directory/develop/v2-permissions-and-consent#openid-connect-scopes
//  */
// export const loginRequest = {
//     scopes: []
// };

// /**
//  * Add here the endpoints and scopes when obtaining an access token for protected web APIs. For more information, see:
//  * https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-browser/docs/resources-and-scopes.md
//  */
// export const protectedResources = {
//     graphMe: {
//         endpoint: "https://graph.microsoft.com/v1.0/me",
//         scopes: ["User.Read"],
//     },
//     apiHello: {
//         endpoint: "http://localhost:5000/hello",
//         scopes: ["Enter_the_Web_Api_Scope_Here"], // e.g. api://xxxxxx/access_as_user
//     },
// }
