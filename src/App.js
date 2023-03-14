import NavBar from "./components/NavBar";
import AfterNavBar from "./components/AfterNavBar";
import Home from "./components/Home";
import FeaturedStyles from "./components/FeaturedStyles";
function App() {
  return (
    <div className="App">
      <NavBar />
      <AfterNavBar />
      <Home />
      <FeaturedStyles />
    </div>
  );
}

export default App;
