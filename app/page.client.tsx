/** @jsxImportSource @reactjs/renderer/react/client */
import React from 'react';
import {jsx as _jsx} from '@reactjs/renderer/react/jsx-runtime';
import { Analytics } from "@vercel/analytics/react";

import { Home } from "./components/home";
import PrivacyPolicyAlert from './components/PrivacyPolicyAlert.client';

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
