import React, { useContext, ReactNode } from "react";
import { IoMdSave, IoMdTrash } from "react-icons/io";
import * as Styles from "./styles";
import FileItem from "./fileItem";
import { FilesContext } from "../../context/filesContext";
import { FileModel } from "../../types/fileTypes";

function FileExplorer() {
  const {
    fileTree,
    filesList,
    currentActive,
    getHasChanges,
    handleSaveFile,
    handleDeleteFile,
  } = useContext(FilesContext);

  const handleFileTree = (
    file: FileModel,
    level: number,
    index: number
  ): ReactNode => {
    const currentLevel = level + 1;
    const hasFile = filesList.find((item) => item.id === file.id);
    if (file.isDirectory) {
      return (
        <>
          <FileItem
            id={file.id}
            name={file.name}
            isDirectory={file.isDirectory}
            level={currentLevel}
            key={`${file.name}`}
          >
            {file.children}
          </FileItem>
          {file.children &&
            file.children.map((subFile) =>
              handleFileTree(subFile, currentLevel, index)
            )}
        </>
      );
    }

    if (hasFile)
      return (
        <FileItem
          id={file.id}
          name={file.name}
          isDirectory={file.isDirectory}
          level={currentLevel}
          key={`${file.name}-fileItem`}
        >
          {file.children}
        </FileItem>
      );
    return null;
  };

  return (
    <Styles.MainContainer>
      <Styles.ControllerContainer>
        <span>CodeEditor</span>
        {currentActive && (
          <>
            {getHasChanges(currentActive.id) && (
              <Styles.ButtonController
                isSaveButton
                onClick={() => handleSaveFile(currentActive.id)}
              >
                <IoMdSave />
              </Styles.ButtonController>
            )}
            <Styles.ButtonController
              isSaveButton={false}
              onClick={() => handleDeleteFile(currentActive.id)}
            >
              <IoMdTrash />
            </Styles.ButtonController>
          </>
        )}
      </Styles.ControllerContainer>
      {fileTree?.map((item, index) => handleFileTree(item, 0, index))}
    </Styles.MainContainer>
  );
}

export default FileExplorer;
