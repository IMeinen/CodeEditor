import React from "react";
import * as Styles from "./styles";
import { FileExplorer, TabNavigation, TextArea } from "../../components";

function Home() {
  return (
    <Styles.MainContainer>
      <Styles.TabContainer>
        <FileExplorer />
      </Styles.TabContainer>
      <Styles.EditorContainer>
        <TabNavigation />
        <TextArea />
      </Styles.EditorContainer>
    </Styles.MainContainer>
  );
}

export default Home;
