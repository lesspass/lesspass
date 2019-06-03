import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";
import Logo from "./logo.png";
import PasswordGenerationPage from "./password/PasswordGenerationPage";
import SettingsPage from "./settings/SettingsPage";
import HelpPage from "./help/HelpPage";
import Icon from "./ui/Icon";

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    background-color: #024379;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  input[type=number]::-webkit-outer-spin-button,
  input[type=number]::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
  }
  input[type=number] {
    -moz-appearance:textfield;
  }
`;

const MainContent = styled.div`
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 320px;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
    Helvetica Neue, Arial, sans-serif;
  color: #333333;
  box-sizing: border-box;
`;

const Header = styled.div`
  color: #eeeeee;
  background-color: #333333;
  display: flex;
  justify-content: center;
  padding: 1em 0;
`;

const HeaderImg = styled.img`
  width: 180px;
  height: 39px;
`;

const Content = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  padding: 1em;
  min-height: 400px;
`;

const Footer = styled.ul`
  color: #eeeeee;
  background-color: #333333;
  display: flex;
  justify-content: space-around;
  margin: 0;
  padding: 0;
  list-style: none;
`;

const FooterItem = styled.li``;

const FooterLink = styled(Link)`
  padding: 0.5em;
  padding-top: 0.7em;
  width: 75px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  text-decoration: none;
  color: ${props => (props.active ? "#eeeeee" : "#aaaaaa")};
  &:focus {
    background-color: #0275d8;
    color: #eeeeee;
  }
`;

const FooterIcon = styled(Icon)`
  font-size: 1em;
  margin-bottom: 0.5em;
`;

const FooterText = styled.div`
  font-size: 0.8em;
`;

class LessPass extends React.Component {
  render() {
    const { db } = this.props;
    return (
      <Router>
        <MainContent>
          <GlobalStyle />
          <Header>
            <HeaderImg src={Logo} alt="LessPass" />
          </Header>
          <Content>
            <Route
              exact
              path="/"
              render={props => <PasswordGenerationPage db={db} {...props} />}
            />
            <Route
              path="/settings"
              render={props => <SettingsPage db={db} {...props} />}
            />
            <Route path="/help" component={HelpPage} />
          </Content>
          <Footer>
            <FooterItem>
              <FooterLink active="true" tabIndex={11} to="/">
                <FooterIcon icon="user-secret" />
                <FooterText>LessPass</FooterText>
              </FooterLink>
            </FooterItem>
            <FooterItem>
              <FooterLink tabIndex={12} to="settings">
                <FooterIcon icon="cogs" />
                <FooterText>Settings</FooterText>
              </FooterLink>
            </FooterItem>
            <FooterItem>
              <FooterLink tabIndex={13} to="help">
                <FooterIcon icon="question" />
                <FooterText>Help</FooterText>
              </FooterLink>
            </FooterItem>
          </Footer>
        </MainContent>
      </Router>
    );
  }
}

export default LessPass;
