import styled from "styled-components";

const MainContainer = styled.div`
  display: inline-flex;
  gap: 10px;
  font-family: monospace;
  line-height: 21px;
  border-radius: 2px;
  padding: 20px 10px;
  background-color: ${(props) => props.theme.colors.lightBlue};
  flex: 1;
  width: 100%;

  textarea {
    line-height: 21px;
    overflow-y: hidden;
    padding: 0;
    border: 0;
    background-color: ${(props) => props.theme.colors.lightBlue};

    color: #fff;
    width: 100%;
    outline: none;
    resize: none;
    overflow: auto;
  }
`;

const LineNumbers = styled.div`
  width: 20px;
  text-align: right;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  span {
    counter-increment: linenumber;

    &::before {
      content: counter(linenumber);
      display: block;
      color: ${(props) => props.theme.colors.lightestBlue};
    }
  }
`;
export { MainContainer, LineNumbers };
