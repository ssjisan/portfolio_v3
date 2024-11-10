import MainRouter from "./Components/MainRouter";
import ThemeProvider from "./Components/Theme";
import DataProcessing from "./DataProcessing/DataProcessing";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <ThemeProvider>
      {({ toggleMode, mode }) => (
        <DataProcessing mode={mode} toggleMode={toggleMode}>
          <BrowserRouter>
            <MainRouter toggleMode={toggleMode} mode={mode} />
          </BrowserRouter>
        </DataProcessing>
      )}
    </ThemeProvider>
  );
}

export default App;
