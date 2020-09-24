import * as React from "react"
import { theme } from "../theme"
import styled from "styled-components"

// Types
export type Props = {
  /** Input text */
  value?: string

  /** Placeholder text */
  placeholder?: string

  /** Disable Input */
  disabled?: boolean

  /** Show error state */
  error?: boolean

  /** Change handler */
  onChange?: any
}

// Component
export const Input: React.FC<Props> = ({
  value,
  placeholder,
  error,
  disabled,
  onChange
}) => (
  <StyledInput
    type="text"
    value={value}
    placeholder={placeholder}
    className={`${error ? "error" : ""} ${disabled ? "disabled" : ""} bg-purple red w-100 h6 flex absolute`}
    onChange={onChange}
  />
)

// Styles
const StyledInput = styled.input`
  &.error::placeholder {
    color: ${theme.color.danger};
    opacity: 0.5;
  }
`
