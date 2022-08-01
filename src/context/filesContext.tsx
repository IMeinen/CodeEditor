import React, {
  createContext,
  useEffect,
  useState,
  ReactNode,
  useCallback
} from "react";
import {
  getFileTree,
  getFile,
  updateFile,
  deleteFile,
} from "../services/fIleServices";
import { FileModel } from "../types/fileTypes";

interface FileContextProviderProps {
  children: ReactNode;
}

interface FileContextData {
  fileTree: FileModel[];
  filesList: FileModel[];
  setFilesOpened: React.Dispatch<React.SetStateAction<FileModel[]>>;
  filesOpened: FileModel[];
  handleOpenFile: (file: FileModel) => void;
  handleCloseFile: (file: FileModel) => void;
  currentActive: FileModel;
  setCurrentActive: React.Dispatch<React.SetStateAction<FileModel>>;
  handleChangeFileContent: (file: FileModel) => void;
  getHasChanges: (id: number) => boolean;
  handleSaveFile: (id: number) => void;
  handleDeleteFile: (id: number) => void;
}

export const FilesContext = createContext<FileContextData>(
  {} as FileContextData
);

export function FilesProvider({ children }: FileContextProviderProps) {
  const [fileTree, setFileTree] = useState<FileModel[]>([]);
  const [filesList, setFilesList] = useState<FileModel[]>([]);
  const [filesOpened, setFilesOpened] = useState<FileModel[]>([]);
  const [currentActive, setCurrentActive] = useState(
    null as unknown as FileModel
  );

  const handleOnlyFiles = useCallback((currentList: FileModel[]): any => {
    currentList.forEach((file: FileModel) => {
      if (file.isDirectory && file.children) {
        handleOnlyFiles(file.children);
      }
      if (!file.isDirectory) {
        setFilesList((prev) => [...prev, file]);
      }
    });
  }, []);

  const handleOpenFile = async (file: FileModel) => {
    const formatedFile = filesList.find(
      (listedFile) => listedFile.id === file.id
    );

    const found = filesOpened.find((currentFile) => currentFile.id === file.id);

    if (!found && formatedFile) {
      let currentContent = "";
      if (!formatedFile.alreadySaved) {
        await getFile(file.id).then((res) => {
          currentContent = res.content;
        });
      }
      setFilesOpened((prev) => [
        ...prev,
        {
          ...formatedFile,
          content: formatedFile.alreadySaved
            ? formatedFile.content
            : currentContent,
          initialContent: formatedFile.alreadySaved
            ? formatedFile.content
            : currentContent,
        },
      ]);
      setCurrentActive({
        ...formatedFile,
        content: formatedFile.alreadySaved
          ? formatedFile.content
          : currentContent,
        initialContent: formatedFile.alreadySaved
          ? formatedFile.content
          : currentContent,
      });
    }
    if (found) {
      setCurrentActive(found);
    }
  };

  const handleCloseFile = (file: FileModel) => {
    const index = filesOpened.findIndex(
      (currentFile) => currentFile.id === file.id
    );

    if (filesOpened.length > 0) {
      if (index - 1 < 0) {
        setCurrentActive(filesOpened[index + 1]);
      } else {
        setCurrentActive(filesOpened[index - 1]);
      }
    }
    if (index >= 0) {
      setFilesOpened((prev) =>
        prev.filter((prevValues) => prevValues.id !== file.id)
      );
    }
  };

  const handleChangeFileContent = (file: FileModel) => {
    const fileChanged = filesOpened.find(
      (fileOpened) => fileOpened.id === file.id
    );

    if (fileChanged) {
      const newList = filesOpened.map((fileItem) => {
        if (fileItem.id === file.id) {
          return file;
        }
        return fileItem;
      });

      setFilesOpened(newList);
    }
  };

  useEffect(() => {
    getFileTree().then((res) => {
      setFileTree(res);
      handleOnlyFiles(res);
    });
  }, [handleOnlyFiles]);

  const getHasChanges = (id: number) => {
    const finded = filesOpened.find((item) => item.id === id);

    if (!finded) return false;

    return finded.content !== finded.initialContent;
  };

  const handleSaveFile = async (id: number) => {
    const fileChanged = filesOpened.find((item) => item.id === id);

    if (fileChanged) {
      const payload = {
        id: fileChanged.id,
        name: fileChanged.name,
        content: fileChanged.content,
      };
      await updateFile(fileChanged.id.toString(), payload).then((res) => {
        const newList = filesList.map((fileItem) => {
          if (fileItem.id === fileChanged.id) {
            return {
              ...fileChanged,
              initialContent: fileChanged.content,
              alreadySaved: true,
            };
          }
          return fileItem;
        });

        const newListOpened = filesOpened.map((fileItem) => {
          if (fileItem.id === fileChanged.id) {
            return {
              ...fileChanged,
              initialContent: fileChanged.content,
              alreadySaved: true,
            };
          }
          return fileItem;
        });

        setFilesList(newList);
        setFilesOpened(newListOpened);
      });
    }
  };

  const handleDeleteFile = async (id: number) => {
    await deleteFile(id.toString()).then((res) => {
      const newListOpened = filesOpened.filter((item) => item.id !== id);
      const newList = filesList.filter((item) => item.id !== id);

      handleCloseFile(currentActive);

      setFilesList(newList);
      setFilesOpened(newListOpened);
    });
  };

  // eslint-disable-next-line react/jsx-no-constructed-context-values
  const providerPayload = {
    fileTree,
    filesOpened,
    setFilesOpened,
    handleOpenFile,
    handleCloseFile,
    currentActive,
    setCurrentActive,
    handleChangeFileContent,
    getHasChanges,
    handleSaveFile,
    handleDeleteFile,
    filesList,
  };

  return (
    <FilesContext.Provider value={providerPayload}>
      {children}
    </FilesContext.Provider>
  );
}
