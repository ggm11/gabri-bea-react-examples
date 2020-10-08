import React, {useState, useEffect} from 'react';
import styled, { css } from 'styled-components';

import Input from '../Input';
import Label from '../Label';

const FieldBar = styled.span`
  position: absolute;
  left: 0;
  bottom: -0.5px;
  width: 100%;
  border: 2px solid black;
  opacity: 0;
  will-change: transform, opacity, color;
  transform: scale(0);
  transform-origin: left center;
  transition: transform 150ms ease-in,
              color 150ms ease-in,
              opacity 150ms ease-in;
`

const FieldWrapper = styled.div`
  display: inline-block;
  position: relative;
  padding-top: 1em;

  ${Label} {
    position: absolute;
    left: 0;
    will-change: transform, color;
    transform-origin: bottom center;
    transition: transform 150ms ease-in,
                color 150ms ease-in;
  }

  ${Input}:focus ~ ${Label} {
    transform: translateY(-1em)
               scale(0.75);
    color: pink;
  }
  ${Input}:hover ~ ${FieldBar},
  ${Input}:focus ~ ${FieldBar} {
    transform: scale(1);
    opacity: 1;
  }

  ${Input}:focus ~ ${FieldBar} {
    border-color: pink;
  }

  ${({isFilled}) => isFilled && css`
    ${Label} {
      transform: translateY(-1em)
                scale(0.75);
      color: pink;
    }
  `}
`;

function TextField({
  label,
  name,
  value,
  onChange,
  id = name,
}) {
  const isControlled = value != null;
  const [isFilled, setIsFilled] = useState(isControlled && value.length > 0);

  const handleChange = (event) => {
    if (!isControlled) setIsFilled(event.target.value.length > 0);
    if (onChange) onChange(event);
  }
  useEffect(() => {
    if (isControlled) setIsFilled(value.length > 0);
  }, [isControlled, value]);


  return (
    <FieldWrapper isFilled={isFilled}>
      <Input
        id={id}
        name={name}
        value={value}
        onChange={handleChange}
      />
      <Label htmlFor={id}>{label}</Label>
      <FieldBar />
    </FieldWrapper>
  )
}

export default TextField;
