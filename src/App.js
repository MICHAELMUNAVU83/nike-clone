import NavBar from "./components/NavBar";
import AfterNavBar from "./components/AfterNavBar";
import Home from "./components/Home";
import FeaturedStyles from "./components/FeaturedStyles";
import Trending from "./components/Trending";
import LetsGo from "./components/LetsGo";
import NewArrivals from "./components/NewArrivals";
import Membership from "./components/Membership";
import AfterMemberships from "./components/AfterMemberships";
function App() {
  return (
    <div className="App">
      <NavBar />
      <AfterNavBar />
      <Home />
      <FeaturedStyles />
      <Trending />
      <LetsGo />
      <NewArrivals />
      <Membership />
      <AfterMemberships />
    </div>
  );
}

export default App;
