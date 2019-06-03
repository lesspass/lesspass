import React from "react";
import styled from "styled-components";
import CheckBoxInput from "../ui/CheckBoxInput";
import Input from "../ui/Input";
import InputNumber from "../ui/InputNumber";

const PasswordGeneration = styled.div`
  display: flex;
  justify-content: space-around;
  height: 100%;
  flex-direction: column;
`;

const Options = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  color: #333;
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

class PasswordGenerationPage extends React.Component {
  state = {
    site: "",
    login: "",
    masterPassword: "",
    lowercase: true,
    uppercase: true,
    digits: true,
    symbols: true,
    length: 16,
    counter: 1
  };

  render() {
    const {
      site,
      login,
      masterPassword,
      lowercase,
      uppercase,
      digits,
      symbols,
      length,
      counter
    } = this.state;
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
          <CheckBoxInput
            id="lowercase"
            label="a-z"
            checked={lowercase}
            onChange={lowercase => this.setState({ lowercase })}
            tabIndex={5}
          />
          <CheckBoxInput
            id="uppercase"
            label="A-Z"
            checked={uppercase}
            onChange={uppercase => this.setState({ uppercase })}
            tabIndex={6}
          />
          <CheckBoxInput
            id="digits"
            label="0-9"
            checked={digits}
            onChange={digits => this.setState({ digits })}
            tabIndex={7}
          />
          <CheckBoxInput
            id="symbols"
            label="!@%"
            checked={symbols}
            onChange={symbols => this.setState({ symbols })}
            tabIndex={8}
          />
        </Options>
        <Options>
          <InputNumber
            label="Length"
            value={length}
            tabIndex={9}
            onChange={length => this.setState({ length })}
          />
          <InputNumber
            label="Counter"
            value={counter}
            tabIndex={9}
            onChange={counter => this.setState({ counter })}
          />
        </Options>
        <Button tabIndex={4}>GENERATE</Button>
      </PasswordGeneration>
    );
  }
}

export default PasswordGenerationPage;
