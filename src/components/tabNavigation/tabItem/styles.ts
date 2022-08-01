import styled from "styled-components";

interface TextProps {
  hasChanges: boolean;
}

interface ButtonProps {
  hasChanges: boolean;
}

interface MainContainerProps {
  key: string;
  active: boolean;
}

const MainContainer = styled.div<MainContainerProps>`
  width: 200px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${(props) => props.theme.colors.darkBlue};
  border-top: 2px solid;
  border-color: ${(props) => props.active && props.theme.colors.highlightPink};
  padding: 8px 4px 8px 8px;
`;

const TextContainer = styled.div`
  height: 40px;
  flex: 3;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const Text = styled.span<TextProps>`
  text-align: center;
  font-size: 12px;
  text-overflow: ellipsis;
  color: ${(props) =>
    props.hasChanges
      ? props.theme.colors.lightGreen
      : props.theme.colors.foregroundWhite};
  font-family: Arial, Helvetica, sans-serif;
`;

const IconContainer = styled.div`
  height: 40px;
  flex: 2;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const ButtonContainer = styled.button<ButtonProps>`
  width: 24px;
  height: 24px;
  border-radius: 8px;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.colors.lightestBlueOpaque};
  }

  &:nth-child(1) {
    margin-left: 10;
  }

  ${(props) =>
    props.hasChanges
      ? `
     svg {
      color: ${props.theme.colors.lightGreen}
    }
  `
      : `
  svg {
   color: ${props.theme.colors.lightestBlue}
 }
`}
`;

const Point = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: ${(props) => props.theme.colors.lightGreen};
`;

export {
  MainContainer,
  TextContainer,
  IconContainer,
  Text,
  ButtonContainer,
  Point,
};
