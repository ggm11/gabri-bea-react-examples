import styled from 'styled-components';

const IconButton = styled.button`
  border: 0;
  padding: 0.35em;
  background: none;
  border-radius: 50%;

  &:focus {
    outline: 0;
    box-shadow: 0 0 1px rgba(0, 0, 0, .5);
  }
  svg {
    width: 1.5em;
    height: 1.5em;
  }
`;

IconButton.defaultProps = {
  type: 'button',
}

export default IconButton;
