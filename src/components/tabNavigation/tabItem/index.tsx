import React, { useContext } from "react";

import { IoCloseSharp } from "react-icons/io5";
import * as Styles from "./styles";
import { FileModel } from "../../../types/fileTypes";
import { FilesContext } from "../../../context/filesContext";

function TabItem({ id, name, isDirectory }: FileModel) {
  const { handleCloseFile, currentActive, handleOpenFile, getHasChanges } =
    useContext(FilesContext);

  return (
    <Styles.MainContainer
      key={`${id}${name}`}
      active={Boolean(currentActive?.id === id)}
    >
      <Styles.TextContainer
        onClick={() => handleOpenFile({ id, name, isDirectory })}
      >
        <Styles.Text hasChanges={getHasChanges(id)}>{name}</Styles.Text>
      </Styles.TextContainer>
      <Styles.IconContainer>
        {getHasChanges(id) && <Styles.Point />}
        <Styles.ButtonContainer hasChanges={getHasChanges(id)}>
          <IoCloseSharp
            onClick={() => handleCloseFile({ id, name, isDirectory })}
          />
        </Styles.ButtonContainer>
      </Styles.IconContainer>
    </Styles.MainContainer>
  );
}

export default TabItem;
