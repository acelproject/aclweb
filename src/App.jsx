import LandingPage from "./LandingPage";
import MyApp from "./MyApp";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Valentine from "./pages/Valentine";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="tabs" element={<MyApp />} />
        <Route path="valentine" element={<Valentine />} />
        <Route path="*" element={`No page`} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
