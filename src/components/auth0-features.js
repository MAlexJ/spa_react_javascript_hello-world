import React from "react";
import { Auth0Feature } from "./auth0-feature";

export const Auth0Features = () => {
  const featuresList = [
    {
      title: "Identity Providers",
      description:
        "Auth0 supports social providers such as Google, Facebook, and Twitter, along with Enterprise providers such as Microsoft Office 365, Google Apps, and Azure. You can also use any OAuth 2.0 Authorization Server.",
      resourceUrl: "https://appointment-scheduler-rest-service.onrender.com",
      icon: "https://cdn.auth0.com/blog/hello-auth0/identity-providers-logo.svg",
    },
    {
      title: "Multi-Factor Authentication",
      description:
        "You can require your users to provide more than one piece of identifying information when logging in. MFA delivers one-time codes to your users via SMS, voice, email, WebAuthn, and push notifications.",
      resourceUrl: "https://appointment-scheduler-rest-service.onrender.com",
      icon: "https://cdn.auth0.com/blog/hello-auth0/mfa-logo.svg",
    }
  ];

  return (
    <div className="auth0-features">
      <h2 className="auth0-features__title">Explore Features</h2>
      <div className="auth0-features__grid">
        {featuresList.map((feature) => (
          <Auth0Feature
            key={feature.resourceUrl}
            title={feature.title}
            description={feature.description}
            resourceUrl={feature.resourceUrl}
            icon={feature.icon}
          />
        ))}
      </div>
    </div>
  );
};
