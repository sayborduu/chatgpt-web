// PrivacyPolicyAlert.js
import React, { useEffect } from 'react';
import Swal from 'sweetalert2';
import { privacyPolicyVersion } from './privacyPolicyVersion';

const PrivacyPolicyAlert = () => {
  useEffect(() => {
    const acceptedPrivacyPolicyVersion = localStorage.getItem('acceptedPrivacyPolicyVersion');

    if (acceptedPrivacyPolicyVersion !== privacyPolicyVersion) {
      Swal.fire({
        title: 'Privacy Policy',
        html: 'Our Privacy Policy has been updated. Please review and accept it from <a href="https://github.com/sayborduu/privgpt/blob/main/privacy%20policy.md">this link</a>.',
        icon: 'info',
        confirmButtonText: 'Accept',
        allowOutsideClick: false, // Prevent closing the alert by clicking outside
      }).then(() => {
        localStorage.setItem('acceptedPrivacyPolicyVersion', privacyPolicyVersion);
      });
    }
  }, []);

  return null;
};

export default PrivacyPolicyAlert;
