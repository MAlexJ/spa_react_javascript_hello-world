import React, {useEffect, useState} from "react";
import {apiFindApplicationInfo} from "../services/message.service";

export const PageFooter = () => {

    // const resourceList = [
    //   {
    //     path: "https://auth0.com/why-auth0/",
    //     label: "Why Auth0",
    //   },
    //   {
    //     path: "https://auth0.com/docs/get-started",
    //     label: "How It Works",
    //   },
    //   {
    //     path: "https://auth0.com/blog/developers/",
    //     label: "Developer Blog",
    //   },
    //   {
    //     path: "https://auth0.com/contact-us",
    //     label: "Contact an Expert",
    //   },
    // ];

    const [applicationInfo, setApplicationInfo] = useState([]);

    useEffect(() => {
        const findApplicationInfo = async () => {

            const {data, error} = await apiFindApplicationInfo();

            if (data) {
                return data;
            }

            // if (data) {
            //   return Object.keys(data)
            //       .map(index => {
            //         let event = data[index];
            //         return {
            //           id: event.id,
            //           text: event.text,
            //           start: DayPilot.Date.parse(event.start, "yyyy-MM-ddTHH:mm:ss"),
            //           end: DayPilot.Date.parse(event.end, "yyyy-MM-ddTHH:mm:ss"),
            //           backColor: event.backColor,
            //           borderColor: event.borderColor
            //         }
            //       })
            // }

            if (error) {
                console.error(error)
            }
        };

        findApplicationInfo().then(ApplicationInfoJson => setApplicationInfo(ApplicationInfoJson))
    }, []);

    return (<footer className="page-footer">
        <div className="page-footer-grid">
            <div className="page-footer-grid__info">

            </div>

            <div className="page-footer-grid__brand">
                <div className="page-footer-brand">
                    <img
                        className="page-footer-brand__logo"
                        src="https://cdn.auth0.com/blog/hello-auth0/auth0-shield.svg"
                        alt="Auth0"
                        width="20"
                        height="22.22"
                    />
                </div>
            </div>

            <div className="page-footer-grid__info">
                <div className="page-footer-info__message">
                    <p className="page-footer-message__headline">
                        Backend server information:
                             <pre>
                                {JSON.stringify(applicationInfo, null, 2)}
                            </pre>
                    </p>
                </div>
            </div>

            {/*<div className="page-footer-grid__info">*/}
            {/*  <div className="page-footer-info__message">*/}
            {/*    <p className="page-footer-message__headline">*/}
            {/*      <span>This sample application is brought to you by&nbsp;</span>*/}
            {/*        <PageFooterHyperlink path="https://auth0.com/">*/}
            {/*          Auth0*/}
            {/*        </PageFooterHyperlink>*/}
            {/*      </p>*/}
            {/*      <p className="page-footer-message__description">*/}
            {/*        <PageFooterHyperlink path="https://auth0.com/docs/quickstarts/">*/}
            {/*        <span>*/}
            {/*          Securely implement authentication using Auth0 on any stack and*/}
            {/*          any device&nbsp;*/}
            {/*        </span>*/}
            {/*          <u>in less than 10 minutes</u>*/}
            {/*        </PageFooterHyperlink>*/}
            {/*      </p>*/}
            {/*    </div>*/}
            {/*    <div className="page-footer-info__button">*/}
            {/*      <a*/}
            {/*          id="create-account-button"*/}
            {/*          className="button button--secondary"*/}
            {/*          href="https://auth0.com/signup"*/}
            {/*          target="_blank"*/}
            {/*          rel="noreferrer noopener"*/}
            {/*      >*/}
            {/*        Create Free Auth0 Account*/}
            {/*      </a>*/}
            {/*    </div>*/}
            {/*    <div className="page-footer-info__resource-list">*/}
            {/*      {resourceList.map((resource) => (*/}
            {/*          <div*/}
            {/*              key={resource.path}*/}
            {/*              className="page-footer-info__resource-list-item"*/}
            {/*          >*/}
            {/*            <PageFooterHyperlink path={resource.path}>*/}
            {/*              {resource.label}*/}
            {/*            </PageFooterHyperlink>*/}
            {/*          </div>*/}
            {/*      ))}*/}
            {/*    </div>*/}
            {/*  </div>*/}
            {/*<div className="page-footer-grid__brand">*/}
            {/*  <div className="page-footer-brand">*/}
            {/*    <img*/}
            {/*        className="page-footer-brand__logo"*/}
            {/*        src="https://cdn.auth0.com/blog/hello-auth0/auth0-shield.svg"*/}
            {/*        alt="Auth0"*/}
            {/*        width="20"*/}
            {/*        height="22.22"*/}
            {/*    />*/}
            {/*    <PageFooterHyperlink path="https://auth0.com/">*/}
            {/*      Auth0 Inc*/}
            {/*    </PageFooterHyperlink>*/}
            {/*  </div>*/}
            {/*</div>*/}
        </div>
    </footer>);
};
