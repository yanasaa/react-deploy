import "../src/sass/style.css";
import Footer from "./components/widgets/footer/Footer";
import Header from "./components/widgets/header/Header";
import Home from "./components/pages/home/Home";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
