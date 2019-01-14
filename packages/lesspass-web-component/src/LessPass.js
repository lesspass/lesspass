import React, { Component } from "react";
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
  background-color: #333333;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 320px;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
    Helvetica Neue, Arial, sans-serif;
  color: #eeeeee;
  box-sizing: border-box;
`;

const Header = styled.div`
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
`;

const Footer = styled.div`
  display: flex;
  justify-content: space-around;
`;

const FooterItem = styled.a`
  padding: 0.5em;
  padding-top: 0.7em;
  width: 75px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: ${props => (props.active ? "#eee" : "#aaa")};
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
  margin-bottom: 0.5em;
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

class Input extends Component {
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
  padding-top: 1em;
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
  margin-top: 1em;
  margin-bottom: 2em;
  border-radius: 3px;
`;

class PasswordGenerationPage extends Component {
  state = {
    site: "",
    login: "",
    masterPassword: ""
  };

  render() {
    const { site, login, masterPassword } = this.state;
    return (
      <div>
        <Input
          label="Site"
          value={site}
          onChange={site => this.setState({ site })}
        />
        <Input
          label="Login"
          value={login}
          onChange={login => this.setState({ login })}
        />
        <Input
          label="Master Password"
          value={masterPassword}
          type="password"
          onChange={masterPassword => this.setState({ masterPassword })}
        />
        <Options>
          <CheckboxWrapper>
            <input id="lowercase" type="checkbox" checked />
            <label htmlFor="lowercase">a-z</label>
          </CheckboxWrapper>
          <CheckboxWrapper>
            <input id="uppercase" type="checkbox" checked />
            <label htmlFor="uppercase">A-Z</label>
          </CheckboxWrapper>
          <CheckboxWrapper>
            <input id="digits" type="checkbox" checked />
            <label htmlFor="digits">0-9</label>
          </CheckboxWrapper>
          <CheckboxWrapper>
            <input id="symbols" type="checkbox" checked />
            <label htmlFor="symbols">!@%</label>
          </CheckboxWrapper>
        </Options>
        <Options>
          <CounterWrapper>
            <label>Length</label>
            <Counter>
              <span>-</span>
              <input type="number" value="16" />
              <span>+</span>
            </Counter>
          </CounterWrapper>
          <CounterWrapper>
            <label>Counter</label>
            <Counter>
              <span>-</span>
              <input type="number" value="1" />
              <span>+</span>
            </Counter>
          </CounterWrapper>
        </Options>
        <Button>GENERATE</Button>
      </div>
    );
  }
}

class LessPass extends Component {
  render() {
    return (
      <MainContent>
        <GlobalStyle />
        <Header>
          <HeaderImg src={Logo} alt="LessPass" />
        </Header>
        <Content>
          <PasswordGenerationPage />
        </Content>
        <Footer>
          <FooterItem active>
            <FooterIcon icon="user-secret" />
            <FooterText>LessPass</FooterText>
          </FooterItem>
          <FooterItem>
            <FooterIcon icon="cogs" />
            <FooterText>Settings</FooterText>
          </FooterItem>
          <FooterItem>
            <FooterIcon icon="question" />
            <FooterText>Help</FooterText>
          </FooterItem>
        </Footer>
      </MainContent>
    );
  }
}

export default LessPass;
