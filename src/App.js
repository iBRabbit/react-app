
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import Detail from './Pages/Detail';
import Add from './Pages/Add';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home />}>
          <Route index element={<Home />} />
          <Route path="details" element={<Detail />} />
          <Route path="add" element={<Add />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
