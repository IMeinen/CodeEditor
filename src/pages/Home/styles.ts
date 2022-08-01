import styled from "styled-components";

const MainContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  overflow: scroll;
`;

const TabContainer = styled.div`
  display: flex;
  flex: 1;
`;

const EditorContainer = styled.div`
  display: flex;
  height: 100vh;
  flex: 4;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  background-color: ${(props) => props.theme.colors.lightBlue};
`;

export { MainContainer, TabContainer, EditorContainer };
