import styled from "styled-components";

interface ButtonProps {
  isSaveButton: boolean;
}

const MainContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  background-color: ${(props) => props.theme.colors.darkBlue};
`;

const ControllerContainer = styled.div`
  width: 100%;
  min-height: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 8px;

  span {
    margin-right: auto;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 24px;
    font-weight: bold;
    color: ${(props) => props.theme.colors.foregroundWhite};
  }
`;

const ButtonController = styled.button<ButtonProps>`
  width: 32px;
  height: 32px;
  display: flex;
  border-radius: 8px;
  margin-left: 8px;
  align-items: center;
  justify-content: center;
  background-color: ${(props) =>
    props.isSaveButton
      ? props.theme.colors.lightGreen
      : props.theme.colors.lightRed};

  svg {
    color: ${(props) => props.theme.colors.lightBlue};
  }
`;

export { MainContainer, ControllerContainer, ButtonController };
