import styled from 'styled-components';

const Button = styled.button`
  border-radius: 8px;
  padding: 3px 5px;
  margin: 3px 0;
  background-color: transparent;
  color: var(--text-in-primary);
  border: solid 2px var(--text-in-primary);
  font-size: 1rem;
  outline: none;
  box-shadow: 0px 0px 14px rgba(255, 255, 255, 0.315);
  transition: linear 0.3s;
  cursor: pointer;

  :hover {
    color: var(--primary-color);
    background-color: var(--text-in-primary);
  }

  :active {
    background-color: transparent;
    color: var(--text-in-primary);
  }
`;

export default Button;
