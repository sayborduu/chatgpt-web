import { Analytics } from "@vercel/analytics/react";

import { Home } from "./components/home";
import { PrivacyPolicy } from "./components/privacy";

import { getServerSideConfig } from "./config/server";

const serverConfig = getServerSideConfig();

export default async function App() {
  return (
    <>
      <Home />
      <PrivacyPolicy />
      {serverConfig?.isVercel && <Analytics />}
    </>
  );
}
