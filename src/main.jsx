import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import PlayContextProvider from "./context/PlayContext.jsx";
import { Auth0Provider } from '@auth0/auth0-react';

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <PlayContextProvider>
        <Auth0Provider
          domain="dev-kfj3qw32wo0jk644.us.auth0.com"
          clientId="kyqHzmqGBhJkxtforA1CzmhZHoNS53Pe"
          authorizationParams={{
            redirect_uri: window.location.origin,
          }}
        >
          <App />
        </Auth0Provider>
      </PlayContextProvider>
    </BrowserRouter>
  </StrictMode>
);