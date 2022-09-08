import { ThemeProvider } from "styled-components";
import Crossword from "react-crossword";
import React from "react";

const CrosswordPage = ({ data, onCrosswordComplete }) => {
  return (
    <div className="content">
      <div style={{ width: "100vw" }}>
        <div className="title">Prize: {data.extra_reward} + {data.reward} NEAR</div>
        <div className="subtitle">The prize in NEAR is sent immediately, the other prize will be processed after NEARCON</div>
        <ThemeProvider
          theme={{
            columnBreakpoint: "9999px",
            gridBackground: "#fff",
            cellBackground: "#8ba9f9",
            cellBorder: "#dfe8fe",
            textColor: "#dae3ff",
            numberColor: "#000000",
            focusBackground: "#346af7",
            highlightBackground: "#779bfc",
          }}
        >
          <Crossword data={data} onCrosswordComplete={onCrosswordComplete} />
        </ThemeProvider>
        <div class="bottom"></div>
      </div>
    </div>
  );
};

export default CrosswordPage;
