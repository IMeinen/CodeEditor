import React, { useContext } from "react";

import { FilesContext } from "../../context/filesContext";
import MainContainer from "./styles";
import TabItem from "./tabItem";

function TabNavigation() {
  const { filesOpened } = useContext(FilesContext);

  return (
    <MainContainer>
      {filesOpened.map((file) => (
        <TabItem
          key={file.id}
          name={file.name}
          id={file.id}
          isDirectory={file.isDirectory}
        />
      ))}
    </MainContainer>
  );
}

export default TabNavigation;
