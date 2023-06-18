import React, { useEffect } from 'react';
import { useClient } from 'react-components';

const PrivacyPolicy = () => {
  useEffect(() => {
    // Google tag (gtag.js)
    const script1 = document.createElement('script');
    script1.src = 'https://www.googletagmanager.com/gtag/js?id=G-J69GGWFT9G';
    script1.async = true;
    document.body.appendChild(script1);

    const script2 = document.createElement('script');
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-J69GGWFT9G');
    `;
    document.body.appendChild(script2);

    // Cookie Consent by TermsFeed
    const script3 = document.createElement('script');
    script3.src =
      'https://www.termsfeed.com/public/cookie-consent/4.0.0/cookie-consent.js';
    script3.charset = 'UTF-8';
    script3.type = 'text/javascript';
    document.body.appendChild(script3);

    const script4 = document.createElement('script');
    script4.innerHTML = `
      document.addEventListener('DOMContentLoaded', function () {
        cookieconsent.run({
          "notice_banner_type": "headline",
          "consent_type": "implied",
          "palette": "light",
          "language": "en",
          "page_load_consent_levels": ["strictly-necessary", "functionality", "tracking", "targeting"],
          "notice_banner_reject_button_hide": false,
          "preferences_center_close_button_hide": false,
          "page_refresh_confirmation_buttons": false,
          "website_name": "https://imalexbfs.ml",
          "website_privacy_policy_url": "https://github.com/sayborduu/privgpt/blob/main/privacy%20policy.md"
        });
      });
    `;
    document.body.appendChild(script4);
  }, []);

  return (
    <div>
      <noscript>
        Free cookie consent management tool by{' '}
        <a href="https://www.termsfeed.com/" rel="nofollow noopener">
          TermsFeed Policy Generator
        </a>
      </noscript>
    </div>
  );
};

const PrivacyPolicyClient = () => {
  useClient(); // Mark the component as a client component

  return <PrivacyPolicy />;
};

export default PrivacyPolicyClient;
