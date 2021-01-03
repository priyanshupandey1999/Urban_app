import "./App.css";
import Navbar from "./components/Navbar";
import Content from "./components/Content";
import SocialLinks from "./components/SocialLinks";

function App() {
  return (
    <div className="App landing-page">
      <header >
        <Navbar />
      </header>
      <Content />
      <div>
      <SocialLinks />
      </div>

    </div>
  );
}

export default App;
