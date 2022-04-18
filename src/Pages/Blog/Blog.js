import React from "react";
import { Accordion } from "react-bootstrap";

const Blog = () => {
  return (
    <div className="m-5 p-5">
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            Difference between authorization and authentication
          </Accordion.Header>
          <Accordion.Body>
            Authentication is the process of verifying who a user is, while
            Authorization is the process of verifying what they have access to.{" "}
            <br />
            The process of verifying and confirming employees ID and passwords
            in an organization is called Authentication, <br /> but determining
            which employee has access to which floor is called Authorization.{" "}
            <br />
            For simple, Authentication is the process of verifying who a user
            is, <br /> while Authorization is the process of verifying what they
            have access to.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            {" "}
            Why are you using firebase? What other options do you have to
            implement ?
          </Accordion.Header>
          <Accordion.Body>
            Firebase is a Backend-as-a-Service for creating mobile and web
            applications. <br />
            Firebase helps you create and run successful apps. Developed by
            Google. <br />
            Parse, Back4App, AWS Amplify, Kuzzle, Couchbase, NativeScript, RxDB,
            Flutter are the alternatives of firebase.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>
            {" "}
            What other services does firebase provide other than authentication?
          </Accordion.Header>
          <Accordion.Body>
            Firebase Authentication provides backend services, easy-to-use SDKs,
            and ready-made UI libraries to authenticate users to your app. <br /> It
            supports authentication using passwords, phone numbers, popular
            federated identity providers like Google, Facebook and Twitter, <br /> and
            more. Firebase Authentication integrates tightly with other Firebase
            services, <br />  and it leverages industry standards like OAuth 2.0 and
            OpenID Connect, <br /> so it can be easily integrated with your custom
            backend.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default Blog;
