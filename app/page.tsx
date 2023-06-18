/** @jsxImportSource @reactjs/renderer/react/client */
import { Analytics } from "@vercel/analytics/react";

import { Home } from "./components/home";
import PrivacyPolicyAlert from './components/PrivacyPolicyAlert.client.jsx';

import { getServerSideConfig } from "./config/server";

const serverConfig = getServerSideConfig();

export default async function App() {
  return (
    <>
      <Home />
      {serverConfig?.isVercel && <Analytics />}
      <PrivacyPolicyAlert />
    </>
  );
}
