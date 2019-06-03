import React from "react";
import styled from "styled-components";

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

export default Input;
