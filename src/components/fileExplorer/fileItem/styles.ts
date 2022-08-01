import styled from "styled-components";

interface MainContainerProps {
  level: number;
  isActive: boolean;
}

interface TextContainerProps {
  hasChanges: boolean;
}

const MainContainer = styled.div<MainContainerProps>`
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background-color: ${(props) =>
    props.isActive
      ? props.theme.colors.lightBlue
      : props.theme.colors.darkBlue};
  padding: 8px 16px;
  padding-left: ${(props) => `${8 + props.level * 8}px`};
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.colors.lightBlue};
  }
`;

const TextContainer = styled.div<TextContainerProps>`
  height: 40px;
  flex: 3;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  svg {
    color: ${(props) => props.theme.colors.lightOrange};
    margin-right: 8px;
  }

  span {
    text-align: center;
    font-size: 12px;
    color: ${(props) =>
      props.hasChanges
        ? props.theme.colors.lightGreen
        : props.theme.colors.foregroundWhite};
    font-family: Arial, Helvetica, sans-serif;
  }
`;

const Point = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: ${(props) => props.theme.colors.lightGreen};
`;

export { MainContainer, TextContainer, Point };
