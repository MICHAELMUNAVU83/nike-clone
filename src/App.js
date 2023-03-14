import NavBar from "./components/NavBar";
import AfterNavBar from "./components/AfterNavBar";
import Home from "./components/Home";
import FeaturedStyles from "./components/FeaturedStyles";
import Trending from "./components/Trending";
import LetsGo from "./components/LetsGo";
import NewArrivals from "./components/NewArrivals";
import Membership from "./components/Membership";
import AfterMemberships from "./components/AfterMemberships";
import BeforeFooter from "./components/BeforeFooter";
import Footer from "./components/Footer";
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
      <BeforeFooter />
      <Footer />
    </div>
  );
}

export default App;
