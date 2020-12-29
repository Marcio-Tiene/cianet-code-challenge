import styled from 'styled-components';
import UnformInput from '../UnformInput';
import { Form as UnForm } from '@unform/web';

export const Form = styled(UnForm)`
  display: flex;
  flex-direction: column;
  padding: 10px 20px;
  .error {
    color: red;
    font-size: 0.75rem;
    align-self: flex-end;
  }
`;

export const Input = styled(UnformInput)`
  margin: 5px 0;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  gap: 5px;
  margin-top: 20px;
`;
