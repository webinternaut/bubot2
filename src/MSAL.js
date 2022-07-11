const config = {
    auth: {
      clientId: "be8e526e-35c4-4867-ab60-30f53b14d942",
    },
    cache: {
      cacheLocation: "localStorage",
    },
  };
  
  const msalInstance = new msal.PublicClientApplication(config);