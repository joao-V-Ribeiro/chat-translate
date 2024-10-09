import React, { Component } from "react";
import Auth from "@aws-amplify/auth";
import { AmplifySignOut, withAuthenticator } from "@aws-amplify/ui-react";
import awsconfig from "./aws-exports";

import "./App.css";
import "semantic-ui-less/semantic.less";

// Import components
import Ccp from "./components/ccp";
import ConctactInfo from "./components/cio/ContactInfo";
import Infos from "./components/cio/UserInfos";
import UserStatus from "./components/cio/UserSatus";
import Header from "./components/cio/Header";

Auth.configure(awsconfig);

class App extends React.Component {
  render() {
    return (
      <>
        <Header />
          <div className="App">
            <Ccp />
          </div>
          <div className="div-container-contacts-info">
          <ConctactInfo />
          <Infos />
        </div>
        <UserStatus />
      </>
    );
  }
}

export default withAuthenticator(App);
