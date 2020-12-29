import styled from 'styled-components';

const Button = styled.button`
  border-radius: 8px;
  padding: 3px 5px;
  margin: 3px 0;
  border: 2px solid var(--primary-color);
  color: var(--text-in-primary);
  background-color: var(--primary-color);
  font-size: 1rem;
  outline: none;

  transition: linear 0.3s;
  cursor: pointer;

  :hover {
    background-color: #105f5f;
  }

  :active {
    background-color: #0b4444;
  }

  &.on-primary {
    background-color: transparent;
    color: var(--text-in-primary);
    border: 2px solid var(--text-in-primary);

    :hover {
      color: var(--primary-color);
      background-color: var(--text-in-primary);
    }
    :active {
      background-color: transparent;
      color: var(--text-in-primary);
    }
  }

  &.secondary-neutral {
    background-color: var(--bg-color);
    color: var(--primary-color);
    border: 2px solid var(--primary-color);

    :hover {
      background-color: #fff4e9;
    }
    :active {
      background-color: #fdf0e3;
    }
  }
`;

export default Button;
