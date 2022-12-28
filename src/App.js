//import packages
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from "styled-components";
import { themes } from './Theme';
//import components
import Start from './pages/Start';
import NotFound from './pages/NotFound';
import ResultSuccess from './pages/ResultSuccess';
import ResultFail from './pages/ResultFail';
import Load from './load/load';
import Play from './pages/Play';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={< Start />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/success" element={<ResultSuccess />} />
          <Route path="/fail" element={<ResultFail />} />
          <Route path="/load" element={<Load />} />
          <Route path="/play" element={<Play />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;

const theme = themes.original;