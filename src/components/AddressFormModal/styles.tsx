import styled, { css } from 'styled-components';

interface IModal {
  show?: boolean;
}

export const ModalBackground = styled.dialog`
  display: none;

  opacity: 0;

  place-items: center;

  min-width: 100vw;
  min-height: 100vh;
  background: #000000c6 0% 0% no-repeat padding-box;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1000;

  .animate {
    -webkit-animation: animatezoom 0.2s;
    animation: animatezoom 0.2s;
  }
  @-webkit-keyframes animatezoom {
    from {
      -webkit-transform: scale(0);
    }
    to {
      -webkit-transform: scale(1);
    }
  }
  @keyframes animatezoom {
    from {
      transform: scale(0);
    }
    to {
      transform: scale(1);
    }
  }

  ${(p: IModal) =>
    p.show &&
    css`
      display: grid;
      opacity: 1;
    `};
`;

export const AddressFormArticle = styled.article`
  display: none;
  overflow: hidden;
  border-radius: 8px;
  ${(p: IModal) =>
    !p.show &&
    css`
      display: flex;
    `};
  flex-direction: column;
  width: 95vw;
  max-width: 600px;
  height: 95vh;
  max-height: 700px;
  margin: 10% 0;
  border-radius: 5px;
  color: var(--text-in-bg);

  background: var(--bg-color) 0% 0% no-repeat padding-box;
  box-shadow: 0px 20px 25px #0000001a;

  @media (max-height: 900px) {
    margin: 5px;
    height: fit-content;
  }
`;

export const AddressFormHeader = styled.header`
  background-color: var(--primary-color);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: var(--text-in-primary);
  align-items: center;
  padding: 20px;

  h2 {
    display: flex;
    align-items: center;
  }
  span {
    cursor: pointer;
    width: 25px;
    height: 25px;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  gap: 5px;
  padding: 20px;
`;
