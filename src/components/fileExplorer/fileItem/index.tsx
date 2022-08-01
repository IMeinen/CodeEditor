import React, { useContext } from "react";

import { IoIosFolder } from "react-icons/io";
import * as Styles from "./styles";
import { FileModel } from "../../../types/fileTypes";
import { FilesContext } from "../../../context/filesContext";

function FileItem({ id, name, isDirectory,level }: FileModel) {
  const { handleOpenFile, getHasChanges, currentActive } =
    useContext(FilesContext);

  return (
    <Styles.MainContainer
      onClick={() => {
        handleOpenFile({ id, name, isDirectory });
      }}
      level={level || 0}
      isActive={currentActive?.id === id}
      key={`${id}-${name}`}
    >
      <Styles.TextContainer hasChanges={getHasChanges(id)}>
        {isDirectory && <IoIosFolder size={12} />}
        <span>{name}</span>
      </Styles.TextContainer>
      {getHasChanges(id) && <Styles.Point />}
    </Styles.MainContainer>
  );
}

export default FileItem;
