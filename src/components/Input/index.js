import React from "react";
import PropTypes from "prop-types";
import styled from "react-emotion";
import validations from "../../utils/validations";
import { SSE_LIGHT_GREEN } from "../../constants";
const InputWrap = styled("div")`
  width: 100%;
  font-family: "Montserrat", sans-serif;
`;
const StyledInput = styled("input")`
  outline: none;
  border: none;
  height: 3.4rem;
  width: 100%;
  font-size: 1.5rem;
  font-family: "Montserrat", sans-serif;
  padding: 0 0.8rem;
  background: #fff;
  border-bottom: 1px solid ${SSE_LIGHT_GREEN};
  @media (max-width: 992px) {
    font-size: 1.3rem;
  }
`;
const ErrorSpan = styled("span")`
  color: red;
  font-size: 1.4rem;
  margin-top: 1.2rem;
  font-family: "Montserrat", sans-serif;
`;
const Section1 = styled("div")`
  display: flex;
`;
export default class Input extends React.Component {
  onValueChange = (event) => {
    const { name, value } = event.target;
    const { onValueChange } = this.props;
    const state = { ...this.props.state };
    if (onValueChange) {
      state.value = value;
      state.error = !validations.check(state);
      if (value.length > 0) state.dirty = true;
      onValueChange({
        [name]: state,
      });
    }
  };
  render() {
    const {
      state,
      className = "",
      showError = false,
      errorText = "Default error text",
      showCustomElement,
      CustomElement,
      ...restProps
    } = this.props;
    return (
      <InputWrap className={className}>
        <Section1>
          <StyledInput
            value={state.value}
            onChange={this.onValueChange}
            {...restProps}
          />
          {showCustomElement && <CustomElement />}
        </Section1>

        {showError && <ErrorSpan>{errorText}</ErrorSpan>}
      </InputWrap>
    );
  }
}
Input.propTypes = {
  state: PropTypes.shape({
    value: PropTypes.any.isRequired,
    type: PropTypes.string.isRequired,
    dirty: PropTypes.bool.isRequired,
    error: PropTypes.bool.isRequired,
  }),
  showError: PropTypes.bool,
  onValueChange: PropTypes.func,
  className: PropTypes.string,
  errorText: PropTypes.string,
  showCustomElement: PropTypes.bool,
  CustomElement: PropTypes.any,
};
