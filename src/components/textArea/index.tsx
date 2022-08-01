import React, { useState, useRef, useContext, useEffect } from "react";

import * as Styles from "./styles";
import { FilesContext } from "../../context/filesContext";

function TextArea() {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const lineNumbersRef = useRef<HTMLDivElement>(null);
  const { currentActive, handleChangeFileContent } = useContext(FilesContext);
  const [value, setValue] = useState(currentActive?.content || "");

  const handleGetLines = (text?: string) => {
    if (!text) {
      return 0;
    }
    const lines = text.split(/\r|\r\n|\n/);
    const count = lines.length;
    return count;
  };

  const [currentLines, setCurrentLines] = useState(
    handleGetLines(currentActive?.content)
  );

  const handleSynchScroll = (event: React.UIEvent<HTMLTextAreaElement>) => {
    if (lineNumbersRef.current) {
      lineNumbersRef.current.scrollTop = event.currentTarget.scrollTop;
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCurrentLines(handleGetLines(event.currentTarget.value));
    setValue(event.currentTarget.value);
    handleChangeFileContent({
      ...currentActive,
      content: event.currentTarget.value,
    });
  };

  useEffect(() => {
    setCurrentLines(handleGetLines(currentActive?.content));
    setValue(currentActive?.content || "");
  }, [currentActive]);

  return (
    currentActive && (
      <Styles.MainContainer>
        <Styles.LineNumbers className="line-numbers" ref={lineNumbersRef}>
          {[...Array(currentLines)].map((item, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <span key={`${index}-line`} />
          ))}
        </Styles.LineNumbers>
        <textarea
          value={value}
          ref={textareaRef}
          onChange={handleChange}
          onScroll={handleSynchScroll}
        />
      </Styles.MainContainer>
    )
  );
}

export default TextArea;
