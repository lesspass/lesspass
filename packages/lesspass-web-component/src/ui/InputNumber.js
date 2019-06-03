import React from "react";
import styled from "styled-components";

const InputNumberBox = styled.div`
  display: flex;
  flex-direction: column;
  label {
    font-size: 0.8em;
    padding-bottom: 0.5em;
    color: #666;
  }
`;

const InputNumberWrapper = styled.div`
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

class InputNumber extends React.Component {
  increment = () => {
    const { value, onChange } = this.props;
    const newValue = value + 1;
    onChange(newValue);
  };
  decrement = () => {
    const { value, onChange } = this.props;
    const newValue = value - 1;
    onChange(newValue);
  };
  render() {
    const { label, value, onChange, ...props } = this.props;
    return (
      <InputNumberBox>
        <label>{label}</label>
        <InputNumberWrapper>
          <span id="decrement" onClick={this.decrement}>-</span>
          <input
            type="number"
            value={value}
            onChange={event => onChange(event.target.value)}
            {...props}
          />
          <span id="increment" onClick={this.increment}>+</span>
        </InputNumberWrapper>
      </InputNumberBox>
    );
  }
}

export default InputNumber;
