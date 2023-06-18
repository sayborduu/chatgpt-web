import { Analytics } from "@vercel/analytics/react";

import { Home } from "./components/home";
import PrivacyPolicyAlert from './components/PrivacyPolicyAlert';

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
