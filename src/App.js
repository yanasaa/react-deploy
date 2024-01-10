import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../src/sass/style.css";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import SignIn from "./pages/signIn/SignIn";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="enter" element={<SignIn />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
