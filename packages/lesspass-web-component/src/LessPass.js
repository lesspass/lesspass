import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";
import Logo from "./logo.png";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCogs,
  faQuestion,
  faUserSecret
} from "@fortawesome/free-solid-svg-icons";

library.add(faCogs);
library.add(faQuestion);
library.add(faUserSecret);

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

const FooterIcon = styled(FontAwesomeIcon)`
  font-size: 1em;
  margin-bottom: 0.5em;
`;

const FooterText = styled.div`
  font-size: 0.8em;
`;

const InputWrapper = styled.div`
  position: relative;
  input {
    width: 100%;
    padding: 1em 0.5em;
    outline: none;
    border: 1px solid #dddddd;
    border-radius: 3px;
  }
  input:focus {
    border-color: #333333;
  }
  label {
    background-color: #ffffff;
    color: #333333;
    padding: 0 0.5em;
    position: absolute;
    top: -0.5em;
    font-size: 0.8em;
    left: 10px;
  }
`;

class Input extends React.Component {
  state = {
    focused: false
  };

  onBlur = () => {
    this.setState({ focused: false });
  };

  onFocus = () => {
    this.setState({ focused: true });
  };

  render() {
    const { focused } = this.state;
    const { label, value, onChange, ...props } = this.props;
    return (
      <InputWrapper>
        {(focused || value) && <label>{label}</label>}
        <input
          onFocus={this.onFocus}
          onBlur={this.onBlur}
          value={value}
          onChange={event => onChange(event.target.value)}
          placeholder={focused ? "" : label}
          {...props}
        />
      </InputWrapper>
    );
  }
}

const Options = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  color: #333;
`;

const Counter = styled.div`
  display: flex;
  border-radius: 3px;
  border: 1px solid #333;
  span {
    background-color: #333;
    color: #eee;
    padding: 0 1em;
    cursor: pointer;
  }
  input {
    width: 50px;
    border: none;
    text-align: center;
  }
  &:focus-within {
    border: 1px solid #0275d8;
    span {
      background-color: #0275d8;
    }
  }
`;
const CounterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  label {
    font-size: 0.8em;
    padding-bottom: 0.5em;
    color: #666;
  }
`;

const CheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
  label {
    font-size: 0.8em;
    color: #666;
  }
`;

const Button = styled.button`
  width: 100%;
  background-color: #333;
  color: #eee;
  border: none;
  padding: 1em;
  border-radius: 3px;

  &:focus {
    background-color: #0275d8;
  }
`;

const PasswordGeneration = styled.div`
  display: flex;
  justify-content: space-around;
  height: 100%;
  flex-direction: column;
`;

class PasswordGenerationPage extends React.Component {
  state = {
    site: "",
    login: "",
    masterPassword: ""
  };

  render() {
    const { site, login, masterPassword } = this.state;
    return (
      <PasswordGeneration>
        <Input
          autoFocus
          label="Site"
          value={site}
          onChange={site => this.setState({ site })}
          tabIndex={1}
        />
        <Input
          label="Login"
          value={login}
          onChange={login => this.setState({ login })}
          tabIndex={2}
        />
        <Input
          label="Master Password"
          value={masterPassword}
          type="password"
          onChange={masterPassword => this.setState({ masterPassword })}
          tabIndex={3}
        />
        <Options>
          <CheckboxWrapper>
            <input id="lowercase" type="checkbox" checked tabIndex={5} />
            <label htmlFor="lowercase">a-z</label>
          </CheckboxWrapper>
          <CheckboxWrapper>
            <input id="uppercase" type="checkbox" checked tabIndex={6} />
            <label htmlFor="uppercase">A-Z</label>
          </CheckboxWrapper>
          <CheckboxWrapper>
            <input id="digits" type="checkbox" checked tabIndex={7} />
            <label htmlFor="digits">0-9</label>
          </CheckboxWrapper>
          <CheckboxWrapper>
            <input id="symbols" type="checkbox" checked tabIndex={8} />
            <label htmlFor="symbols">!@%</label>
          </CheckboxWrapper>
        </Options>
        <Options>
          <CounterWrapper>
            <label>Length</label>
            <Counter>
              <span>-</span>
              <input type="number" value="16" tabIndex={9} />
              <span>+</span>
            </Counter>
          </CounterWrapper>
          <CounterWrapper>
            <label>Counter</label>
            <Counter>
              <span>-</span>
              <input type="number" value="1" tabIndex={10} />
              <span>+</span>
            </Counter>
          </CounterWrapper>
        </Options>
        <Button tabIndex={4}>GENERATE</Button>
      </PasswordGeneration>
    );
  }
}

class SettingPage extends React.Component {
  render() {
    return <div>SettingPage</div>;
  }
}

class HelpPage extends React.Component {
  render() {
    return <div>HelpPage</div>;
  }
}

class LessPass extends React.Component {
  render() {
    return (
      <Router>
        <MainContent>
          <GlobalStyle />
          <Header>
            <HeaderImg src={Logo} alt="LessPass" />
          </Header>
          <Content>
            <Route exact path="/" component={PasswordGenerationPage} />
            <Route path="/settings" component={SettingPage} />
            <Route path="/help" component={HelpPage} />
          </Content>
          <Footer>
            <FooterItem>
              <FooterLink active tabIndex={11} to="/">
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
