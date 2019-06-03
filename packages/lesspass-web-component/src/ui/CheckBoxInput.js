import React from "react";
import styled from "styled-components";

const CheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
  label {
    font-size: 0.8em;
    color: #666;
  }
`;

class CheckBoxInput extends React.Component {
  render() {
    const { id, label, checked, onChange, ...props } = this.props;
    return (
      <CheckboxWrapper>
        <input
          id={id}
          type="checkbox"
          checked={checked}
          onChange={event => onChange(event.target.checked)}
          {...props}
        />
        <label htmlFor={id}>{label}</label>
      </CheckboxWrapper>
    );
  }
}

export default CheckBoxInput;
