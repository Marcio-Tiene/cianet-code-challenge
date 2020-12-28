import styled from 'styled-components';
import UnformInput from '../UnformInput';
import { Form as UnForm } from '@unform/web';
import UnformDataList from '../UnformDataList';

export const Form = styled(UnForm)`
  display: flex;
  flex-direction: column;
  padding: 10px 20px;
`;

export const DataList = styled(UnformDataList)``;

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
